<?php
    //grava_cliente.php
    //grava um novo cliente na tabela clientes
    
    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  
        $nome = filter_input( INPUT_POST, 'nome');
        $telefone = filter_input( INPUT_POST, 'telefone');
        $endereco = filter_input( INPUT_POST, 'endereco');
        
        if(!($nome && $telefone)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $nome = $json_obj->nome;
            $telefone = $json_obj->telefone;
            $endereco = $json_obj->endereco;
        }
        
        if($nome && $telefone) {
            $sql = $pdo->prepare(
                "INSERT INTO clientes
                (nome, telefone, endereco)
                VALUES
                ('".$nome."','".$telefone."','".$endereco."')");
            $sql->execute();

            $id = $pdo->lastInsertId();
            $array['result'] = [
                'id' => $id
            ];

        } else {
            $array['error'] = "Campos não enviados";
        }
        
    } else {
        $array['error'] = "Acesso não permitido.";
    }

    require("return.php");
?>