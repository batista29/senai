drop database if exists clientes;
create database clientes charset=UTF8 collate UTF8_general_ci;
use clientes;

create table infoCliente(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    nascimento date not null,
    sexo varchar(20) not null,
    peso numeric(5,2) not null
);

create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references infoCliente(id_cliente)
);

describe infoCliente;
describe telefones;
show tables;