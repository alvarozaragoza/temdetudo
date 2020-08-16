-- vw_produtos
create view vw_produtos as SELECT `id`, `nome`, `descricao`, `classificacao`, `preco_venda`, `qtde_estoque` + `qtde_loja` as qtde 
FROM `produtos` WHERE ativo = "S";

-- vw_totais_vendas
create view vw_totais_vendas as SELECT id_venda, sum(preco_venda*qtde) as total_vendido 
FROM vendas_itens
GROUP BY id_venda

-- vw_vendas
create view vw_vendas as SELECT vendas.`id`, vendas.`data`, vendas.`id_cliente`, clientes.nome as nome_cliente, clientes.endereco, clientes.telefone, vendas.`id_vendedor`, vendedores.nome as nome_vendedor, vw_totais_vendas.total_vendido
FROM `vendas` 
LEFT JOIN clientes on vendas.id_cliente = clientes.id
LEFT JOIN vendedores on vendas.id_vendedor = vendedores.id
LEFT JOIN vw_totais_vendas on vendas.id = vw_totais_vendas.id_venda

-- vw_vendas_itens
CREATE VIEW vw_vendas_itens AS 
SELECT vendas_itens.`id`, vendas_itens.`id_venda`, vendas_itens.`id_produto`, produtos.nome as nome_produto, vendas_itens.`preco_venda`, vendas_itens.`qtde` 
FROM `vendas_itens` 
LEFT JOIN produtos ON vendas_itens.id_produto = produtos.id
