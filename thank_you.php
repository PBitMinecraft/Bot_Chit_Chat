<?php
$message = isset($_GET['message']) ? htmlspecialchars($_GET['message']) : 'No message received.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Result</title>
</head>
<body>
    <p><?php echo $message; ?></p>
    <a href="index.html">Go back</a>
</body>
</html>
