

document.addEventListener('DOMContentLoaded', function () {
    loadMarcacoes();
    
    const marcacaoForm = document.getElementById('marcacao-form');
    marcacaoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const descricao = document.getElementById('descricao').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;
        const nome_profissional = document.getElementById('nome_profissional').value;
        const nome_aluno = document.getElementById('nome_aluno').value;
        const id_horario = document.getElementById('id_horario').value;
        const id_sala = document.getElementById('id_sala').value;
        const id_status = document.getElementById('id_status').value;

        addMarcacao(descricao, data, horario, nome_profissional, nome_aluno, id_horario, id_sala, id_status);
    });
});

function loadMarcacoes() {
    fetch('http://localhost:3000/consultas')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#tabela-semanal tbody');
            tableBody.innerHTML = ''; 
            data.forEach(marcacao => {
                const tr = document.createElement('tr');

                const tdDescricao = document.createElement('td');
                tdDescricao.textContent = marcacao.observacao;
                tr.appendChild(tdDescricao);

                const tdData = document.createElement('td');
                tdData.textContent = new Date(marcacao.data).toLocaleDateString();
                tr.appendChild(tdData);

                const tdHorario = document.createElement('td');
                tdHorario.textContent = new Date(marcacao.data).toLocaleTimeString();
                tr.appendChild(tdHorario);

                const tdProfissional = document.createElement('td');
                tdProfissional.textContent = marcacao.nome_profissional;
                tr.appendChild(tdProfissional);

                const tdAluno = document.createElement('td');
                tdAluno.textContent = marcacao.nome_aluno;
                tr.appendChild(tdAluno);

                const tdHorarioID = document.createElement('td');
                tdHorarioID.textContent = marcacao.id_horario;
                tr.appendChild(tdHorarioID);

                const tdSala = document.createElement('td');
                tdSala.textContent = marcacao.id_sala;
                tr.appendChild(tdSala);

                const tdStatus = document.createElement('td');
                tdStatus.textContent = marcacao.id_status;
                tr.appendChild(tdStatus);

                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao carregar marcações:', error));
}

function addMarcacao(descricao, data, horario, nome_profissional, nome_aluno, id_horario, id_sala, id_status) {
    fetch('http://localhost:3000/consultas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ observacao: descricao, data: `${data}T${horario}:00`, nome_profissional, nome_aluno, id_horario, id_sala, id_status })
    })
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#tabela-semanal tbody');
        const tr = document.createElement('tr');

        const tdDescricao = document.createElement('td');
        tdDescricao.textContent = data.observacao;
        tr.appendChild(tdDescricao);

        const tdData = document.createElement('td');
        tdData.textContent = new Date(data.data).toLocaleDateString();
        tr.appendChild(tdData);

        const tdHorario = document.createElement('td');
        tdHorario.textContent = new Date(data.data).toLocaleTimeString();
        tr.appendChild(tdHorario);

        const tdProfissional = document.createElement('td');
        tdProfissional.textContent = data.nome_profissional;
        tr.appendChild(tdProfissional);

        const tdAluno = document.createElement('td');
        tdAluno.textContent = data.nome_aluno;
        tr.appendChild(tdAluno);

        const tdHorarioID = document.createElement('td');
        tdHorarioID.textContent = data.id_horario;
        tr.appendChild(tdHorarioID);

        const tdSala = document.createElement('td');
        tdSala.textContent = data.id_sala;
        tr.appendChild(tdSala);

        const tdStatus = document.createElement('td');
        tdStatus.textContent = data.id_status;
        tr.appendChild(tdStatus);

        tableBody.appendChild(tr);

        document.getElementById('marcacao-form').reset();
        fecharAbaAdicionarMarcacao();
    })
    .catch(error => console.error('Erro ao adicionar marcação:', error));
}

function abrirOpcoes() {
    const opcoes = document.getElementById('opcoes');
    opcoes.style.display = opcoes.style.display === 'block' ? 'none' : 'block';
}

function abrirAbaAdicionarMarcacao() {
    const aba = document.getElementById('aba-adicionar-marcacao');
    aba.style.display = 'block';
}

function fecharAbaAdicionarMarcacao() {
    const aba = document.getElementById('aba-adicionar-marcacao');
    aba.style.display = 'none';
}
