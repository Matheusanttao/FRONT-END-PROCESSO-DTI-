let alunos = [];

document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeAluno').value;
    const notas = [
        parseFloat(document.getElementById('nota1').value),
        parseFloat(document.getElementById('nota2').value),
        parseFloat(document.getElementById('nota3').value),
        parseFloat(document.getElementById('nota4').value),
        parseFloat(document.getElementById('nota5').value)
    ];
    const frequencia = parseFloat(document.getElementById('frequencia').value);

    const mediaNotas = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    alunos.push({ nome, notas, frequencia, mediaNotas });

    atualizarTabela();
    calcularResultados();
    this.reset();
});

function atualizarTabela() {
    const tbody = document.getElementById('alunoTableBody');
    tbody.innerHTML = '';
    alunos.forEach(aluno => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${aluno.nome}</td><td>${aluno.mediaNotas.toFixed(2)}</td><td>${aluno.frequencia}%</td>`;
        tbody.appendChild(tr);
    });
}

function calcularResultados() {
    if (alunos.length === 0) return;

    const mediaTurmaPorDisciplina = [0, 0, 0, 0, 0];
    alunos.forEach(aluno => {
        aluno.notas.forEach((nota, index) => {
            mediaTurmaPorDisciplina[index] += nota;
        });
    });
    mediaTurmaPorDisciplina.forEach((total, index) => {
        mediaTurmaPorDisciplina[index] = total / alunos.length;
    });

    const mediaGeralTurma = alunos.reduce((acc, aluno) => acc + aluno.mediaNotas, 0) / alunos.length;
    const alunosAcimaMedia = alunos.filter(aluno => aluno.mediaNotas > mediaGeralTurma).map(aluno => aluno.nome);
    const alunosBaixaFrequencia = alunos.filter(aluno => aluno.frequencia < 75).map(aluno => aluno.nome);

    document.getElementById('mediaTurma').innerHTML = mediaTurmaPorDisciplina.map((media, index) => `<li>Disciplina ${index + 1}: ${media.toFixed(2)}</li>`).join('');
    document.getElementById('alunosAcimaMedia').innerHTML = alunosAcimaMedia.map(nome => `<li>${nome}</li>`).join('');
    document.getElementById('alunosBaixaFrequencia').innerHTML = alunosBaixaFrequencia.map(nome => `<li>${nome}</li>`).join('');
}
