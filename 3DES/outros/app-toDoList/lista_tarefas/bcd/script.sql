drop database if exists tarefas;
create database tarefas charset = UTF8 collate utf8_general_ci;
use tarefas;

create table user(
    id_user integer AUTO_INCREMENT not null primary key,
    nome varchar (20) not null,
    email  varchar (30)  not null,
    senha varchar (20) not null,
);

create table lista_tarefas(
    id_tarefa integer AUTO_INCREMENT not null primary key,
    descricao varchar (100) not null,
    horario_tarefa time not null,
    horario_encerramento time,
    Status_tarefa varchar (10) not null
);

insert into lista_tarefas values (1,'para casa', '22:00:00',null,'Aberto');
insert into lista_tarefas values (2,'para casa', '22:00:00',null,'Finalizada');
insert into lista_tarefas values (3,'para casa', '22:00:00',null,'Cancelada');

insert into lista_tarefas values (4,'para casa', '21:00:00',null,'Aberto');
insert into lista_tarefas values (5,'para casa', '21:00:00',null,'Finalizada');
insert into lista_tarefas values (6,'para casa', '21:00:00',null,'Cancelada');

select * from lista_tarefas;

UPDATE lista_tarefas SET horario_encerramento = '00:00:00', Status_tarefa = 'Cancelada' WHERE id_tarefa = 1;

UPDATE lista_tarefas SET  horario_encerramento = null WHERE Status_tarefa = 'Cancelada';

select * from lista_tarefas where Status_tarefa = 'Aberto';
select * from lista_tarefas where Status_tarefa = 'Finalizada';
select * from lista_tarefas where Status_tarefa = 'Cancelada';