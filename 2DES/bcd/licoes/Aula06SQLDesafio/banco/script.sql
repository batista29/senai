drop database if exists emprestimo;
create database emprestimo charset=UTF8 collate UTF8_general_ci;
use emprestimo;

create table clientes(
    cpf integer not null primary key,
    pri_nome varchar(30) not null,
    sobrenome varchar(30) not null,
    cep decimal(11) not null,
    complemento varchar(30)
);

create table telefone(
    cpf integer not null,
    tipo varchar(20),
    numero varchar (15),
    foreign key (cpf) references clientes (cpf)
);

create table emprestimos(
    id integer not null primary key auto_increment,
    cpf integer not null,
    data DATETIME not null,
    capital numeric(9,2) not null,
    n_parcelas numeric(3) not null,
    taxa_juros numeric(4) not null,
    impostos numeric (3) not null,
    foreign key (cpf) references clientes(cpf)
);

create table parcelas(
    id integer not null primary key auto_increment,
    vencimento DATETIME not null,
    pagamento DATETIME,
    valor numeric (9,2) not null,
    val_recebido numeric (9,2) not null
);

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/bcd/Aula06SQLDesafio/csv/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/bcd/Aula06SQLDesafio/csv/telefones.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/bcd/Aula06SQLDesafio/csv/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- create view vw_clientes as
-- select c.cpf, c.pri_nome, c.sobrenome, c.cep, c.complemento, t.tipo , t.numero as telefone from clientes c
-- inner join telefone t
-- on c.cpf = t.cpf;