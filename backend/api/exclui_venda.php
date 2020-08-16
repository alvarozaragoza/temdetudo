<?php
    //exclui_venda.php
    //exclui venda, com ID informado, tabela vendas

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  

        $id_venda = filter_input( INPUT_POST, 'id_venda');
        
        if(!($id_venda)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $id_venda = $json_obj->id_venda;
        }
        
        if($id_venda) {

            //exclui venda
            $sql = "DELETE FROM vendas";
            $sql .= " WHERE id = ".$id_venda;
            $sql = $pdo->prepare($sql);
            $sql->execute();
            
            //exclui itens da venda
            $sql = "DELETE FROM vendas_itens";
            $sql .= " WHERE id_venda = ".$id_venda;
            $sql = $pdo->prepare($sql);
            $sql->execute();
            
            $array['result'] = [
                'id' => $id_venda
            ];
            
        } else {
            $array['error'] = "Campos não enviados";
        }
        
    } else {
        $array['error'] = "Acesso não permitido.";
    }

    require("return.php");
?>