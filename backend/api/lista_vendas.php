<?php
    //lista_produtos.php
    //devolve um array com todos os produtos (baseado na view vw_produtos)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "get") {  

        $filtro = "";
        if(isset($_GET['dtini'])) {
            $filtro = " WHERE data>='".$_GET['dtini']."' ";
        }

        if(isset($_GET['dtfim'])) {
            if(isset($_GET['dtini'])) {
                $filtro .= " AND data<='".$_GET['dtfim']."' ";
            } else {
                $filtro = " WHERE data<='".$_GET['dtfim']."' ";
            }
        }

        $sql = $pdo->query("SELECT * FROM vw_vendas ".$filtro." ORDER BY data DESC");

        if($sql->rowCount() > 0) {
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
            foreach( $data as $item) {
                $array['result'][] = [
                    'id' => $item['id'],
                    'data' => $item['data'],
                    'id_cliente' => $item['id_cliente'],
                    'nome_cliente' => $item['nome_cliente'],
                    'endereco' => $item['endereco'],
                    'telefone' => $item['telefone'],
                    'id_vendedor' => $item['id_vendedor'],
                    'nome_vendedor' => $item['nome_vendedor'],
                    'total_vendido' => $item['total_vendido'],
                    'total_custo' => $item['total_custo']
                ];
            }
        }
        
    } else {
        $array['error'] = "Requisição indevida.";
    }

    require("return.php");
?>