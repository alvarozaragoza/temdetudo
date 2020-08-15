<?php
	// api.php
	// retorno padrão da api en JSON
	// com permissão para qualquer origem e método

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
	header("Content-Type: application/json");
	echo json_encode($array, JSON_UNESCAPED_UNICODE);
	
	exit;
?>
