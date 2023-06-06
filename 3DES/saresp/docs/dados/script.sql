LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/NataBatistaFernandes/docs/dados/clientes.csv'
INTO TABLE Clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/NataBatistaFernandes/docs/dados/automoveis.csv'
INTO TABLE Automoveis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/NataBatistaFernandes/docs/dados/concessionarias.csv'
INTO TABLE Concessionaria
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/NataBatistaFernandes/docs/dados/alocacao.csv'
INTO TABLE Alocacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;