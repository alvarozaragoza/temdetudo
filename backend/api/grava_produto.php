<?php
    //grava_produto.php
    //grava um novo produto na tabela produtos quando id=novo
    //ou altera os dados com o ID informado produto

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  

        $id = filter_input( INPUT_POST, 'id');
        $nome = filter_input( INPUT_POST, 'nome');
        $descricao = filter_input( INPUT_POST, 'descricao');
        $marca = filter_input( INPUT_POST, 'marca');
        $fornecedor = filter_input( INPUT_POST, 'fornecedor');
        $classificacao = filter_input( INPUT_POST, 'classificacao');
        $preco_custo = filter_input( INPUT_POST, 'preco_custo');
        $preco_venda = filter_input( INPUT_POST, 'preco_venda');
        $qtde_estoque = filter_input( INPUT_POST, 'qtde_estoque');
        $qtde_loja = filter_input( INPUT_POST, 'qtde_loja');

        if(!($nome && $descricao)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $id = $json_obj->id;
            $nome = $json_obj->nome;
            $descricao = $json_obj->descricao;
            $marca = $json_obj->marca;
            $fornecedor = $json_obj->fornecedor;
            $classificacao = $json_obj->classificacao;
            $preco_custo = $json_obj->preco_custo;
            $preco_venda = $json_obj->preco_venda;
            $qtde_estoque = $json_obj->qtde_estoque;
            $qtde_loja = $json_obj->qtde_loja;
        }
        
        if($nome && $descricao) {
            
            if($id=="novo") {  //inclui produto
                $sql = $pdo->prepare(
                    "INSERT INTO produtos 
                    (nome, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja)
                    VALUES
                    ('".$nome."','".$descricao."','".$marca."','".$fornecedor."','".$classificacao."','".$preco_custo."','".$preco_venda."','".$qtde_estoque."','".$qtde_loja."')");
                $sql->execute();

                $id = $pdo->lastInsertId();
                $array['result'] = [
                    'id' => $id
                ];

            } else { // altera produto
                $sql = "UPDATE produtos SET 
                        nome = '".$nome."',
                        descricao = '".$descricao."',
                        marca = '".$marca."',
                        fornecedor = '".$fornecedor."', 
                        classificacao = '".$classificacao."',
                        preco_custo = '".$preco_custo."',
                        preco_venda = '".$preco_venda."',
                        qtde_estoque = '".$qtde_estoque."',
                        qtde_loja = '".$qtde_loja."'";
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