const toReadAll = () => {
    return "SELECT * FROM profissionais ORDER BY id_profissional asc";
}

const toRead = () => {
    return "SELECT * FROM profissionais ORDER BY id_profissional asc";
}

module.exports = {
    toReadAll
}