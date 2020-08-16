<?php
    //lista_vendas_itens.php
    //devolve um array com todos os itens da venda
    //com parametro id_venda (baseado na table vendas_itens)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "get") {  

        if(isset($_GET['id_venda'])) {
            $id_venda = $_GET['id_venda'];
            $sql = $pdo->query("SELECT * FROM vw_vendas_itens WHERE id_venda = ".$id_venda);
            if($sql->rowCount() > 0) {
                $data = $sql->fetchAll(PDO::FETCH_ASSOC);
                foreach( $data as $item) {
                    $array['result'][] = [
                        'id' => $item['id'],
                        'id_venda' => $item['id_venda'],
                        'id_produto' => $item['produto'],
                        'nome_produto' => $item['nome_produto'],
                        'qtde' => $item['qtde'],
                        'preco_venda' => $item['preco_venda']
                    ];
                }
            }
        } else {
            $array['error'] = "ID da venda não informada.";    
        }
        
    } else {
        $array['error'] = "Requisição indevida.";
    }

    require("return.php");
?>