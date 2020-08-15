<?php
    //lista_produtos.php
    //exclui produto, com ID informado, tabela produtos

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  

        $id = filter_input( INPUT_POST, 'id');
        $nome = filter_input( INPUT_POST, 'nome');
        
        if(!($id && $nome)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $id = $json_obj->id;
            $nome = $json_obj->nome;
        }
        
        if($id && $nome) {
            
            $sql = "UPDATE produtos SET 
                    nome = '*del* ".$nome."',
                    ativo = 'N'";
            $sql .= " WHERE id = ".$id;

            //echo $sql;
            //die;

            $sql = $pdo->prepare($sql);
            $sql->execute();
            ;

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