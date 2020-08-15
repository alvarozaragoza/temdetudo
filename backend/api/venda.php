<?php
    //venda.php
    //devolve a venda especificad por id (baseado na view vw_vendas)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "get") {  

        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $sql = $pdo->query("SELECT * FROM vw_vendas WHERE id=".$id);
            if($sql->rowCount() > 0) {
                $item = $sql->fetch(PDO::FETCH_ASSOC);
                $array['result'] = [
                    'id' => $item['id'],
                    'data' => $item['data'],
                    'id_cliente' => $item['id_cliente'],
                    'nome_cliente' => $item['nome_cliente'],
                    'endereco' => $item['endereco'],
                    'telefone' => $item['telefone'],
                    'id_vendedor' => $item['id_vendedor'],
                    'nome_vendedor' => $item['nome_vendedor'],
                    'total_vendido' => $item['total_vendido']
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