<?php

//connect to a database

$conn = mysqli_connect('localhost', 'Stu','Richmond10', 'ajaxtest' );

$query = "SELECT * FROM users";

//Get result
$result = mysqli_query($conn, $query);

//Fetch data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);
?>