drop database if exists entregas;
create database entregas charset=UTF8 collate UTF8_general_ci;
use entregas;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    cpf varchar(11) not null,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    cep varchar(9) not null,
    nmr_residencia varchar (5) not null,
    complemento varchar(20)
);

create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key(id_cliente) references clientes(id_cliente)
);

create table entregadores(
    id_entregador integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    veiculo varchar(15) not null,
);

create table pedido(
    id_pedido integer not null primary key auto_increment,
    nomePedido varchar (30) not null,
    preco_uni numeric(6,2) not null
);

create table pedido(
    id_cliente integer not null,
    foreign key(id_cliente) references clientes(id_cliente),
    id_pedido integer not null,
    foreign key(id_pedido) references pedido(id_pedido),
    id_entregador integer not null,
    foreign key(id_entregador) references entregadores(id_entregador),
    date not null,

);