<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];

    $url = 'https://discord.com/api/v10/channels/1271114927481819208/messages';
    $token = getenv('DISCORD_BOT_TOKEN');

    if (!$token) {
        die("Bot token not set.");
    }

    $data = json_encode([
        'content' => $message,
    ]);

    $options = [
        'http' => [
            'header'  => "Content-Type: application/json\r\n" .
                         "Authorization: Bot $token\r\n",
            'method'  => 'POST',
            'content' => $data,
        ],
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        $response_message = "Error sending message.";
    } else {
        $response_message = "Message sent!";
    }

    header("Location: thank_you.php?message=" . urlencode($response_message));
    exit();
}
?>