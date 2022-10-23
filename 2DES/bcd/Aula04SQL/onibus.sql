drop database if exists onibus;
create database onibus charset=UTF8 collate UTF8_general_ci;
use onibus;

create table motoristas(
    cpf integer (11) not null primary key,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null
);

create table telefones(
    cpf integer not null,
    telefone varchar(15) not null,
    foreign key (cpf) references motoristas(cpf)
);

create table linhas(
    id_linha integer not null primary key,
    descricao varchar(100) not null
);

create table horarios(
    id_linha integer not null,
    horario time not null,
    foreign key (id_linha) references linhas(id_linha)
);

create table motoristaLinha(
    cpf integer not null,
    id_linha integer not null,
    data timestamp not null,
    foreign key (cpf) references motoristas(cpf),
    foreign key (id_linha) references linhas(id_linha)
);

describe motoristas;
describe telefones;
describe linhas;
describe horarios;
describe motoristaLinha;

show tables;