drop database if exists provaBack;

create database provaBack charset = UTF8 collate UTF8_general_ci;

use provaBack;

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(30) not null,
    data_nasc date not null
);

create table cursos(
    id_curso integer not null primary key auto_increment,
    curso varchar(30) not null,
    duracao time not null
);

create table cursados(
    id_aluno integer not null,
    id_curso integer not null,
    data_curso DATE not null,
    foreign key (id_curso) references cursos(id_curso) on delete cascade,
    foreign key (id_aluno) references alunos(id_aluno) on delete cascade
);

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/ProvaBack/docs/alunos.csv' 
INTO TABLE alunos
 FIELDS TERMINATED BY ';' 
 ENCLOSED BY '"' 
 LINES TERMINATED BY '\r\n' 
 IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/ProvaBack/docs/cursos.csv' 
INTO TABLE cursos FIELDS TERMINATED BY ';' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/ProvaBack/docs/cursados.csv'
INTO TABLE cursados FIELDS TERMINATED BY ';'
ENCLOSED BY '"' LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

drop view if exists vw_alunos;
CREATE VIEW vw_alunos AS
SELECT a.nome, a.data_nasc as "DATA", cr.curso, c.data_curso
FROM alunos a INNER JOIN cursados c on a.id_aluno = c.id_aluno
INNER JOIN cursos cr on c.id_curso = cr.id_curso;
select * from vw_alunos;


SELECT a.nome, a.data_nasc as "DATA", cr.curso, c.data_curso
FROM alunos a INNER JOIN cursados c on a.id_aluno = c.id_aluno
INNER JOIN cursos cr on c.id_curso = cr.id_curso where a.id_aluno = 1;