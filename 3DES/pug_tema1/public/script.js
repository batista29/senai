function armazenaPaciente(id, nome_completo, nascimento, peso, altura) {
    let paciente = {
        id: id,
        nome_completo: nome_completo,
        nascimento: nascimento,
        peso: peso,
        altura: altura,
    }
    window.localStorage.setItem("paciente", JSON.stringify(paciente))
}