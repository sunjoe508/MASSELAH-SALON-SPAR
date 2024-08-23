<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES['files'])) {
    $uploadDir = 'uploads/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $uploadedFiles = $_FILES['files'];
    $fileCount = count($uploadedFiles['name']);

    for ($i = 0; $i < $fileCount; $i++) {
        $tmpName = $uploadedFiles['tmp_name'][$i];
        $fileName = basename($uploadedFiles['name'][$i]);
        $uploadFile = $uploadDir . $fileName;

        if (move_uploaded_file($tmpName, $uploadFile)) {
            echo "File $fileName uploaded successfully.<br>";
        } else {
            echo "Failed to upload $fileName.<br>";
        }
    }
}
?>
