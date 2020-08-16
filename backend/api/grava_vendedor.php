<?php
    //grava_vendedor.php
    //grava um novo vendedor na tabela vendedores
    
    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  
        $nome = filter_input( INPUT_POST, 'nome');
        
        if(!($nome)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $nome = $json_obj->nome;
        }
        
        if($nome) {
            $sql = $pdo->prepare(
                "INSERT INTO vendedores
                (nome)
                VALUES
                ('".$nome."')");
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