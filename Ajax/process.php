<?php

//connect to a database

$conn = mysqli_connect('localhost', 'Stu','Richmond10', 'ajaxtest' );



echo 'processing...';


//Check for a GET variable

iF(isset($_GET['name'])){
    
    echo 'Get: Your name is' .' '. $_GET['name'];

  
}

if(isset($_POST['name'])){

    $name = mysqli_real_escape_string($conn, $_POST['name']);
    //echo 'POST: Your name is' . ' ' .$_POST['name'];

    $query = "INSERT INTO users(name) VALUES ('$name')";

    if(mysqli_query($conn, $query)){
        echo 'User Added...';
    } else {
        echo 'Error: ' . mysqli_error($conn);
    }
    }
 



?>

