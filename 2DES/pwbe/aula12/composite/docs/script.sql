drop database if exists computadores;
create database computadores charset = UTF8 collate = utf8_general_ci;
use computadores;

create table computadores(
    id int not null auto_increment primary key,
    produto varchar(100) not null,
    preco decimal(8,2) not null
);