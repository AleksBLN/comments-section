<?php

$conn = mysqli_connect("localhost", "root", "", "comment_section");
$id = $_POST['id'];

$sql = mysqli_query($conn, "DELETE FROM comment WHERE id=$id");
