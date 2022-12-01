// const toCreate = (data) => {
//     return `INSERT INTO alunos VALUES(DEFAULT, '${data.nome}', '${data.data_nasc}')`;
// }

// const toReadAll = () => {
//     return "SELECT * FROM alunos";
// }

// const toRead = (data) => {
//     return `SELECT a.nome, a.data_nasc as "DATA", cr.curso, c.data_curso
//     FROM alunos a INNER JOIN cursados c on a.id_aluno = c.id_aluno
//     INNER JOIN cursos cr on c.id_curso = cr.id_curso where a.id_aluno = ${data.id_aluno};`;
// }

// const toDel = (data) => {
//     return `DELETE FROM alunos WHERE id_aluno = ${data.id_aluno}`;
// }

// const toUpdate = (data) => {
//     return `UPDATE ALUNOS SET nome = '${data.nome}', data_nasc = '${data.data_nasc}' WHERE id_aluno = ${data.id_aluno}`
// }

// module.exports = {
//     toCreate,
//     toReadAll,
//     toRead,
//     toDel,
//     toUpdate
// }

class Alunos {
    constructor(data) {
        this.id = data.id_aluno;
        this.nome = data.nome;
        this.data_nasc = data.data_nasc;
    }

    static toReadAll() {
        return "SELECT * FROM alunos";
    }
    static toCreate(data) {
        return `INSERT INTO alunos VALUES(DEFAULT, '${data.nome}', '${data.data_nasc}')`;
    }

    static toDel(data) {
        return `DELETE FROM alunos WHERE id_aluno = ${data.id_aluno}`;
    }
    static toUpdate = (data) => {
        return `UPDATE ALUNOS SET nome = '${data.nome}', data_nasc = '${data.data_nasc}' WHERE id_aluno = ${data.id_aluno}`
    }
    static toRead = (data) => {
        return `SELECT a.nome, a.data_nasc as "DATA", cr.curso, c.data_curso
        FROM alunos a INNER JOIN cursados c on a.id_aluno = c.id_aluno
         INNER JOIN cursos cr on c.id_curso = cr.id_curso where a.id_aluno = ${data.id_aluno};`;
    }
}

module.exports = Alunos;