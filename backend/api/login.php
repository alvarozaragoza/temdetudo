<?php
    //lista_produtos.php
    //devolve um array com todos os produtos (baseado na view vw_produtos)

    require("config.php");

    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if($method === "post") {  

        $email = filter_input( INPUT_POST, 'email');
        $password = filter_input( INPUT_POST, 'password');

        if(!($email && $password)) {
            //verifica se vieram em JSON
            //print_r( file_get_contents('php://input') );
            //die;

            $json_str = file_get_contents('php://input');
            $json_obj = json_decode($json_str);
            $email = $json_obj->email;
            $password = $json_obj->password;
        }
        
        if($email && $password) {
            $sql = $pdo->query("SELECT * FROM users WHERE email='".$email."' and password = '".$password."'");
            if($sql->rowCount() > 0) {
                $data = $sql->fetchAll(PDO::FETCH_ASSOC);
                foreach( $data as $item) {
                    $array['result'][] = [
                        'token' => $item['token'],
                        'email' => $item['email']
                    ];
                }
            } else {
                $array['error'] = "Acesso não permitido.";
            }
        } else {
            $array['error'] = "Campos não enviados";
        }
        
    } else {
        $array['error'] = "Acesso não permitido.";
    }

    require("return.php");
?>