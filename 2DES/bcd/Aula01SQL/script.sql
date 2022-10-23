-- EXCLUI O BANCO SE EXISTIR E CRIAR UM NOVO COM O PADRÃO UTF8 DE CARACTERES
drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
-- cada linha do banco de dados é conhecida como quer

-- DDL Criação da estrutura do Banco de dados
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);
create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table pedidos(
    nmr_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    -- timestamp (para data e hora, tudo junto)
    data timestamp not null,
    valor decimal(8,2) not null, -- (8,2) diz respeito a qtd de números que teremos, e qtd dps da virgula, exemplo: 999999,99 
    descricao varchar (50) not null,
    quantidade integer (4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe telefones;
describe clientes;
describe pedidos;
show tables;

-- DML Alimentar o banco de dados com dados de teste
insert into clientes values
(null, "Jorge", "Silva", "Rua Coisa Bueno - Jaguariúna - SP"),
(null, "vanessa", "Silva", "Rua Amancio Bueno - Jaguariúna - SP"),
(null, "Marcelo", "Oliveira", "Rua Minas Gerais - Jaguariúna - SP"),
(null, "Lucas", "Moura", "Rua Bueno Bueno - Pedreira - SP");

insert into telefones values
(1, "(19)9819-40067"),
(1, "(19)9819-45067"),
(2, "(19)9819-45066"),
(2, "(19)9989-55067"),
(3, "(19)9819-45348");

insert into pedidos values
(null, 1,null, 100, "Pastel", 2),
(null, 1,null, 40, "Chocolate", 2),
(null, 2,null, 10, "Suco de Uva", 2),
(null, 3,null, 150, "Mel", 2),
(null, 1,null, 100, "Pastel", 2);

select * from clientes;
select * from telefones;
select * from pedidos;