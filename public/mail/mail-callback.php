<?php
include "libmail.php"; // Include mail send class

error_reporting(E_ALL); // All of errors will be post in error.log

$project_name = 'github.com'; // TO CHANGE: This will display in sender
$admin_email = 'target@mail.com'; // TO CHANGE: Target email
$letter_type = 'New request'; // TO CHANGE: Type (topic) of letter
$project_name_for_title = 'Project'; // TO CHANGE: Name of project (site)

function foreachFields($array) {
    $c = true; // This is for alternating background of rows
    $message = ''; // Container for message

    foreach ( $array as $key => $value ) { // Cleaning from useless data
        if (
            $value != ""
            &&
            $key != "undefined"
            &&
            $value != "null"
            &&
            $value != "0"
            &&
            strpos($key, "utm") === false
            &&
            strpos($key, "http") === false
            &&
            strpos($key, "yclid") === false
            &&
            strpos($key, "gclid") === false
        ) {
            $key = str_replace("_", " ", $key);

            $message .= "
            " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
            </tr>
            ";
        }
    }

    $message = "<table style='width: 100%; border-collapse: collapse'>$message</table>";

    if ($array["utm_source"]) { // Getting UTM in separate table
        $message .= "<h3>UTM</h3>";

        $newTable = "";

        foreach ( $array as $key => $value ) {
            if (
                strpos($key, "utm") === 0
                ||
                strpos($key, "yclid") === 0
                ||
                strpos($key, "gclid") === 0
            ) {
                $newTable .= "
                " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
                </tr>
                ";
            }
        }

        $newTable = "<table style='width: 100%; border-collapse: collapse'>$newTable</table>";

        $message .= $newTable;
    }

    return $message;
}


$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {
    $message = foreachFields($_POST);
} else if ( $method === 'GET' ) {
    $message = foreachFields($_GET);
}

$m = new Mail();
$m->From($project_name . ";noreply@" . $_SERVER['SERVER_NAME']);
$m->To( $admin_email );
$m->Subject( $letter_type . " | " . $project_name_for_title );
$m->Body( $message, "html" );

if (isset($_FILES['file'])) {
    $m->Attach($_FILES['file']['tmp_name'], $_FILES['file']['name']);
}

$m->Send();