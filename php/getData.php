<?php

$conn = mysqli_connect("localhost", "root", "", "comment_section");

$sqlOut = mysqli_query($conn, "SELECT * FROM comment");

$result = mysqli_fetch_all($sqlOut, MYSQLI_ASSOC);

exit(json_encode($result));
