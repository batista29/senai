const toReadAbertas = () => {
    return "select * from lista_tarefas where Status_tarefa = 'Aberto'"
}

const toReadFinalizada = () => {
    return "select * from lista_tarefas where Status_tarefa = 'Finalizada'"
}

const toReadCancelada = () => {
    return "select * from lista_tarefas where Status_tarefa = 'Cancelada'"
}

const toCreate = (model) => {
    return `insert into lista_tarefas values (null,'${model.descricao}', '${model.horario_tarefa}','${model.horario_encerramento}','${model.Status_tarefa}');`
}

const toUpdateCancelada = (model) => {
    return `UPDATE lista_tarefas SET horario_encerramento = curtime(), Status_tarefa = 'Cancelada' WHERE id_tarefa = ${model.id_tarefa};`
}


const toUpdateFinalizada = (model) => {
    return `UPDATE lista_tarefas SET horario_encerramento = curtime(), Status_tarefa = 'Finalizada' WHERE id_tarefa = ${model.id_tarefa};`
}

module.exports = {
    toReadAbertas,
    toReadFinalizada,
    toReadCancelada,
    toCreate,
    toUpdateCancelada,
    toUpdateFinalizada
};