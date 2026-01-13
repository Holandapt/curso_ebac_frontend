class aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.Nome = nomeDoAluno;
        this.Nota = notaDoAluno;
    }
}

const alunos = [];

const aluno1 = new aluno ('Joao', 6.5);
const aluno2 = new aluno ('Lucas',5.0);
const aluno3 = new aluno ('Maria', 7.0);
const aluno4 = new aluno ('Mathias', 8.5)
const aluno5 = new aluno ('Rodney', 4);

alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5);

const alunosAprv = alunos.filter((aprv) => aprv.Nota >= 6)
console.log (alunosAprv);


