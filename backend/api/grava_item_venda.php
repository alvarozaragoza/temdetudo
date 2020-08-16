<?php
    //grava_item_venda.php
    //grava um novo item na venda na tabela venda_itens
    
    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  

        $id_venda = filter_input( INPUT_POST, 'id_vemda');
        $id_produto = filter_input( INPUT_POST, 'id_produto');
        $qtde = filter_input( INPUT_POST, 'qtde');
        $preco = filter_input( INPUT_POST, 'preco');
        
        if(!($id_venda && $id_produto)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $id_venda = $json_obj->id_venda;
            $id_produto = $json_obj->id_produto;
            $qtde = $json_obj->qtde;
            $preco = $json_obj->preco;
        }
        
        if($id_venda && $id_produto) {
            //converte , para . decimal se necessário
            $preco = str_replace(",",".",$preco);
            
            $sql = $pdo->prepare(
                "INSERT INTO vendas_itens 
                (id_venda, id_produto, qtde, preco_venda)
                VALUES
                (".$id_venda.",".$id_produto.",".$qtde.",".$preco.")");
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