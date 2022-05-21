<?php
include '../includes/connect.php';

$name = $_POST['name'];
$price = $_POST['price'];
$picture = $_POST['picture'];
$sql = "INSERT INTO items (name, price,picture) VALUES ('$name', '$price','$picture')";
$con->query($sql);
header("location: ../admin-page.php");
?>