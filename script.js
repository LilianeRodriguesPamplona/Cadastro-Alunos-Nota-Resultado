const alunos = [];

document.getElementById('btnCadastrar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    const media = (nota1 + nota2) / 2;

    let situacao;
    if (media >= 7) {
        situacao = 'Aprovado';
    } else if (media >= 4) {
        situacao = 'Em Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    alunos.push({ nome: nome, media: media, situacao: situacao });

    atualizarListaAlunos();
});

function atualizarListaAlunos() {
    const listaAlunos = document.getElementById('alunos');
    listaAlunos.innerHTML = '';

    alunos.forEach(function(aluno) {
        const alunoItem = document.createElement('div');
        alunoItem.innerHTML = `<strong>Aluno:</strong> ${aluno.nome}, <strong>Média:</strong> ${aluno.media}, <strong>Situação:</strong> ${aluno.situacao}`;
        listaAlunos.appendChild(alunoItem);
    });
}
