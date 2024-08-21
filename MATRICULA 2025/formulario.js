alert("está funcionando");
// form-group.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     const listaRespostas = {
//         "email": e.target.elements["email".value],
//         "nome": e.target.elements["nome".value],
//         "turma": e.target.elements["turma".value]
//     }

//     localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
//     window.location.href='./index.html';
// })

const vagas = {
    jardimIM: 0,
    jardimIT: 10,
    preIM:13,
    preIT: 13,
    preIIM: 11,
    preIIT: 11,
    primM: 11,
    primT: 11,
    segM: 14,
    segT: 14,
    terM: 9,
    terT: 9,
    quaM: 10,
    quaT: 10,
    quiM: 8,

};

function subtrairVaga(event) {
    //event.preventDefault(); // Evita o envio do formulário

    const turmaSelect = document.getElementById('turma');
    const turmaSelecionada = turmaSelect.value;

    if (vagas[turmaSelecionada] > 0) {
        vagas[turmaSelecionada]--;
        alert(`Inscrição realizada com sucesso! Vagas restantes para a turma: ${vagas[turmaSelecionada]}`);
        
    } else {
        alert('Não há vagas disponíveis para esta turma.');
    }
}


window.onload = function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', subtrairVaga);
}
