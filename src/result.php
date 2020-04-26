<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');

if( $_REQUEST["name"] ) {

   $name = $_REQUEST['name'];
   echo "Welcome ". $name;
}

?>