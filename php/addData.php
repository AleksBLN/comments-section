<?php

$conn = mysqli_connect("localhost", "root", "", "comment_section");
$name = $_POST['name'];
$comment = $_POST['comment'];
$date = date('Y.m.d H:i');
$pathToStoreImg ='';
if($_FILES['image']['size'] != 0)
{
	$file = $_FILES['image'];
	$fileName = $file['name'];
	// $fileError = $file['error'];
	$fileTmp = $file['tmp_name'];
	$pathToStoreImg = "uploads/{$fileName}";
	move_uploaded_file($fileTmp, $pathToStoreImg);
}
$sql = mysqli_query($conn, "INSERT INTO comment (name, message, cur_date, image) VALUES ('$name', '$comment', '$date', '$pathToStoreImg')");
