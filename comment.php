<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $imageId = htmlspecialchars($_POST['image_id']);
    $comment = htmlspecialchars($_POST['comment']);

    $commentFile = "comments/{$imageId}_comments.txt";

    // Ensure comments directory exists
    if (!is_dir('comments')) {
        mkdir('comments', 0777, true);
    }

    file_put_contents($commentFile, $comment . PHP_EOL, FILE_APPEND);
    header("Location: images.html");
}
?>
