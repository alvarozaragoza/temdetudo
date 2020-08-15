<?php
    //lista_produtos.php
    //devolve um array com todos os produtos (baseado na view vw_produtos)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "get") {  

        $sql = $pdo->query("SELECT * FROM vw_produtos");
        if($sql->rowCount() > 0) {
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
            foreach( $data as $item) {
                $array['result'][] = [
                    'id' => $item['id'],
                    'nome' => $item['nome'],
                    'descricao' => $item['descricao'],
                    'classificacao' => $item['classificacao'],
                    'preco_venda' => $item['preco_venda'],
                    'qtde' => $item['qtde']
                ];
            }
        }
        
    } else {
        $array['error'] = "Requisição indevida.";
    }

    require("return.php");
?>