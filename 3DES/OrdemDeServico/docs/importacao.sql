LOAD DATA INFILE "C:/Users/SUPORTE/Desktop/senai/3DES/OrdemDeServico/docs/colaboradores.csv"
INTO TABLE colaborador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/SUPORTE/Desktop/senai/3DES/OrdemDeServico/docs/oss.csv"
INTO TABLE os
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/SUPORTE/Desktop/senai/3DES/OrdemDeServico/docs/comentarios.csv"
INTO TABLE comentario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

update os SET encerramento = NULL WHERE encerramento = '0000-00-00 00:00:00.000'