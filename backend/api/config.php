<?php
    // conn_db.php
    // conexão como BD MySQL :: temdetudo

    $db_host = "localhost";
    $db_name = "temdetudo";
    $db_user = "root";
    $db_pass = "root";

    $pdo = new PDO("mysql:dbname=$db_name;host=$db_host", $db_user, $db_pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

    $array = [
        'error' => '',
        'result' => []
    ]
?>
