<?php
    //lista_vendedores.php
    //devolve um array com todos os vendedores em ordem alfabética (baseado na tabela vendedores)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "get") {  
        $sql = $pdo->query("SELECT * FROM vendedores ORDER BY nome");
        if($sql->rowCount() > 0) {
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
            foreach( $data as $item) {
                $array['result'][] = [
                    'id' => $item['id'],
                    'nome' => $item['nome']
                ];
            }
        }
        
    } else {
        $array['error'] = "Requisição indevida.";
    }

    require("return.php");
?>