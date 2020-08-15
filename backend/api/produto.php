<?php
    //produto.php
    //devolve o produto especificado por id (baseado na table produtos)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "get") {  

        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $sql = $pdo->query("SELECT * FROM produtos WHERE id=".$id);
            if($sql->rowCount() > 0) {
                $item = $sql->fetch(PDO::FETCH_ASSOC);
                $array['result'] = [
                    'id' => $item['id'],
                    'nome' => $item['nome'],
                    'descricao' => $item['descricao'],
                    'marca' => $item['marca'],
                    'fornecedor' => $item['fornecedor'],
                    'classificacao' => $item['classificacao'],
                    'preco_custo' => $item['preco_custo'],
                    'preco_venda' => $item['preco_venda'],
                    'qtde_estoque' => $item['qtde_estoque'],
                    'qtde_loja' => $item['qtde_loja'],
                    'ativo' => $item['ativo']
                ];
            } else {
                $array['error'] = "Produto não encontrado.";
            }
        } else {
            $array['error'] = "ID do produto não fornecido.";    
        }
        
    } else {
        $array['error'] = "Requisição indevida.";
    }

    require("return.php");
?>