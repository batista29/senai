drop database if exists generico;
create database generico charset = UTF8 collate = utf8_general_ci;
use generico;

create table usuarios(
    login varchar(15) primary key not null,
    nome varchar(50) not null,
    nascimento date not null,
    telefone varchar(15) not null,
    avatar mediumblob
);

load data infile 'C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/pwbe/aula11/docs/db/clientes.csv'
into table usuarios
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows
set avatar=null;

select * from usuarios;

update usuarios set avatar=to_base64(LOAD_FILE("C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/pwbe/aula11/repositorio/avatar.jpg")) where login = "lucasmarques";
update usuarios set avatar=to_base64(LOAD_FILE("C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/pwbe/aula11/repositorio/avatar.jpg")) where login = "lucasslaoq";

insert into usuarios values
("adrianalemos","Adriana Batista Lemos","2005-03-25","(19)98787-7778",to_base64(LOAD_FILE("C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/pwbe/aula11/repositorio/avatar.jpg"))),
("mauricioduarte","Mauricio Duarte","1998-01-20","(19)98787-33333",to_base64(LOAD_FILE("C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/pwbe/aula11/repositorio/avatar2.jpg"))),
("anamello","Ana Maria Mello","2008-08-22","(19)98888-7661",to_base64(LOAD_FILE("C:/Users/SUPORTE/Desktop/SENAI-2022/2DES/pwbe/aula11/repositorio/avatar3.jpg")));

select login, nome, nascimento, telefone, avatar from usuarios;