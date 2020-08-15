<?php
    //lista_clientes.php
    //devolve um array com todos os clientes em ordem alfabética (baseado na tabela clientes)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "get") {  

        $sql = $pdo->query("SELECT * FROM clientes ORDER BY nome");
        if($sql->rowCount() > 0) {
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
            foreach( $data as $item) {
                $array['result'][] = [
                    'id' => $item['id'],
                    'nome' => $item['nome'],
                    'endereco' => $item['endereco'],
                    'telefone' => $item['telefone']
                ];
            }
        }
        
    } else {
        $array['error'] = "Requisição indevida.";
    }

    require("return.php");
?>