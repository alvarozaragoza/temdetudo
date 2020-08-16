<?php
    //exclui_item_venda.php
    //exclui item da venda, com ID informado, tabela vendas_itens

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  

        $id = filter_input( INPUT_POST, 'id');
        
        if(!($id)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $id = $json_obj->id;
        }
        
        if($id) {

            //exclui item da venda
            $sql = "DELETE FROM vendas_itens";
            $sql .= " WHERE id = ".$id;
            $sql = $pdo->prepare($sql);
            $sql->execute();
            
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