<?php
    //grava_venda.php
    //grava uma nova venda na tabela vendas quando id=novo
    //ou altera os dados com o ID informado da venda

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  

        $id = filter_input( INPUT_POST, 'id_vemda');
        $data = filter_input( INPUT_POST, 'data');
        $id_cliente = filter_input( INPUT_POST, 'id_cliente');
        $id_vendedor = filter_input( INPUT_POST, 'id_vendedor');
        
        if(!($id && $data)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $id = $json_obj->id_venda;
            $data = $json_obj->data;
            $id_cliente = $json_obj->id_cliente;
            $id_vendedor = $json_obj->id_vendedor;
        }
        
        if($id && $data) {
            
            if($id=="novo") {  //inclui produto
                $sql = $pdo->prepare(
                    "INSERT INTO vendas 
                    (data, id_cliente, id_vendedor)
                    VALUES
                    ('".$data."','".$id_cliente."','".$id_vendedor."')");
                $sql->execute();

                $id = $pdo->lastInsertId();
                $array['result'] = [
                    'id' => $id
                ];

            } else { // altera produto
                $sql = "UPDATE vendas SET 
                        data = '".$data."',
                        id_cliente = '".$id_cliente."',
                        id_vendedor = '".$id_vendedor."'";
                $sql .= " WHERE id = ".$id;

                //echo $sql;
                //die;

                $sql = $pdo->prepare($sql);
                $sql->execute();
                ;

                $array['result'] = [
                    'id' => $id
                ];
            }

        } else {
            $array['error'] = "Campos não enviados";
        }
        
    } else {
        $array['error'] = "Acesso não permitido.";
    }

    require("return.php");
?>