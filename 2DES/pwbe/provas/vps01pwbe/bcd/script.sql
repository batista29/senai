drop database if exists solicitacoes;
create database solicitacoes charset=utf8 collate utf8_general_ci;
use solicitacoes;
-- SQL - DDL
Create table Funcionarios(
	Cod_Func numeric(4) not null,   
	Nome_Func varchar(50) not null,
	Sexo char(1) not null,            
	Cidade varchar(30),
	Estado varchar(2),
	constraint pk_func_1 primary key(Cod_Func)
);

Create table Departamentos(
	Cod_Depto numeric(4) not null,
	Nome_Depto varchar(50) not null,
	constraint pk_dep_1 primary key(Cod_Depto)
); 

Create table Produtos(
	Cod_Produto numeric(4) not null,  
	Nome_produto varchar(50) not null,
	constraint pk_prod_1 primary key(Cod_Produto)
);

Create table Solicitacoes(
	Num_Sol numeric(4) not null,     
	Data_sol date null,
	Cod_Depto numeric(4) not null,           
	Cod_Func  numeric(4) not null,
	constraint pk_sol_1 primary key(Num_Sol),
	constraint fk_sol_dep_1 Foreign Key(Cod_Depto) references Departamentos(Cod_Depto),
	constraint fk_sol_fun_1 Foreign Key(Cod_Func) references Funcionarios(Cod_Func)
);

Create table Itens_Solicitacao(
	Num_Sol numeric(4) not null,
	Cod_Produto numeric(4) not null,
	Qtde numeric(4) not null,
	Valor numeric(12,2) not null,
	constraint pk_itens_sol primary key(Num_Sol, cod_produto),
	constraint fk_itens_sol_1 foreign Key(Num_Sol) references Solicitacoes(Num_Sol),
	constraint fk_itens_prod_1 Foreign Key(Cod_Produto) references Produtos(Cod_Produto)
);

-- OBS Na tabela Itens_Solicitacao a chave primária é uma chave "COMPOSTA" por (Num_Sol, cod_produto)

-- SQL - DML
insert into Departamentos values
(1000,"Vendas"),
(2000,"Compras"),
(2001,"Recursos Humanos");
insert into Funcionarios values
(100,"Jose Pedro","M","Sumare","SP"),
(150,"Ana Pereira","F","Nova Odessa","SP"),
(200,"Maria da Silva","F","Londrina","PR"),
(300,"Joao Antonio","M","Campinas","SP");
insert into Produtos values
(125,"Parafuso"),
(135,"Arruela"),
(145,"Difusor"),
(155,"Paralama");
insert into Solicitacoes values
(1000,"2018/12/01",1000,100),
(1001,"2018/03/13",2001,200),
(1005,"2018/02/10",2001,150),
(1010,"2019/02/22",2000,100),
(1020,"2019/03/23",1000,200),
(1040,"2019/03/24",2001,300);
(1050,"2019/12/24",2001,300);
insert into Itens_Solicitacao values
(1000,125,2,4.36),
(1000,145,1,85),
(1001,135,3,2.12),
(1001,155,2,522),
(1010,145,2,170),
(1010,135,2,1.06),
(1020,125,1,2.18),
(1020,145,2,170),
(1040,155,3,783),
(1005,125,1,50),
(1005,145,3,54.5);
(1050,145,3,54.5);
-- Coluna Valor representa o valor total do item (Não é necessário multiplicar pela quantidade)

-- SQL - DQL
select * from Departamentos;
select * from Funcionarios;
select * from Produtos;
select * from Solicitacoes;
select * from Itens_Solicitacao;
select max(valor) from Itens_Solicitacao;
Select Year(curdate()) as ano;
Select month(curdate()) as mes;


--apenas produtos de feveiro de 2018
select p.nome_produto from produtos p 
inner join Itens_Solicitacao it on p.cod_produto = it.cod_produto
inner join solicitacoes s on s.Num_Sol = it.Num_Sol
where s.Data_sol between "2018/02/01" and "2018/02/29";

--Crie um procedimento armazenado chamado solicita_um_item(n_sol,depto,func,prod,qtd,total) que receba estes valores e cadastre uma solicitação e um item na data atual.
create procedure solicita_um_item(n_sol varchar,depto numeric,func numeric,prod numeric,qtd numeric,total numeric)
 begin 
 	insert into solicitacoes values(default, curdate(),default,100);
end $

delimiter ;


-- Faça uma consulta que mostre os nomes dos
-- departamentos e nomes dos produtos que requisitaram
-- Parafuso e Difusor.

select dep.Nome_Depto, p.nome_produto from Departamentos dep
inner join solicitacoes s on dep.Cod_Depto = s.Cod_Depto
inner join Itens_Solicitacao it on it.Num_Sol = s.Num_Sol
inner join produtos p on p.cod_produto = it.cod_produto
where p.nome_produto = "Difusor" or "Parafuso";


--view
-- Crie uma view(visão) que mostre os seguintes campos: Num_Sol, Data_sol,
--  Cod_Depto, Nome_Depto , Cod_Func, Nome_Func, Cod_Produto, Nome_produto, 
--  Qtde, valor e ordene por num_sol decrescente;

drop view if exists vw_visao;
create view vw_visao as
select it.num_sol, s.data_sol, dep.Cod_Depto, dep.Nome_Depto, s.Cod_Func, fc.Nome_Func, p.cod_produto, p.nome_produto, it.qtde, it.valor
from Departamentos dep
inner join solicitacoes s on dep.Cod_Depto = s.Cod_Depto
inner join Itens_Solicitacao it on it.Num_Sol = s.Num_Sol
inner join produtos p on p.cod_produto = it.cod_produto
inner join Funcionarios fc on fc.Cod_Func = s.Cod_Func
ORDER BY it.Num_Sol desc;

select * from vw_visao;

-- Faça uma query que mostre o nome do 
-- funcionário que mais fez solicitações (em Reais), 
-- O SELECT deve mostrar o nome do 
-- funcionário e seu respectivo valor total.

select fc.Nome_Func, sum(it.qtde * it.valor)
from Funcionarios fc
inner join solicitacoes s on fc.Cod_Func = s.Cod_Func
inner join Itens_Solicitacao it on it.Num_Sol = s.Num_Sol
order by it.valor desc
limit 1;

-- mais - JOse entonio
-- menos - ana pereira






--Prova BAck
select dep.Nome_Depto, p.nome_produto from Departamentos dep 
inner join solicitacoes s on dep.Cod_Depto = s.Cod_Depto 
inner join Itens_Solicitacao it on it.Num_Sol = s.Num_Sol 
inner join produtos p on p.cod_produto = it.cod_produto 
where p.nome_produto = '';


select p.nome_produto, s.Data_sol from produtos p 
inner join Itens_Solicitacao it on p.cod_produto = it.cod_produto
inner join solicitacoes s on s.Num_Sol = it.Num_Sol
where month(Data_sol) = '12' and Year (Data_sol) = '2019';


select * from solicitacoes where month(Data_sol) = '12';

drop procedure if exists solicitacoesProva;

delimiter $
create procedure solicitacoesProva(n_sol varchar, D_sol date, C_Dep numeric, C_Func numeric)

begin 
 	insert into solicitacoes values(default, curdate(),default,100);
end $

delimiter ;