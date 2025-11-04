function Pessoa(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

function Triagem (nome, idade, peso, temperatura, pressao){
    Pessoa.call (this, nome, idade, peso);
    this.temperatura = temperatura;
    this.pressao = pressao;
}

function Anamnese (historico, risco) {
    this.historico = historico;
    this.risco = risco;
}

function Paciente (nome, idade, peso, temperatura, pressao, historico, risco, cor){
    Triagem.call (this, nome, idade, peso, temperatura, pressao);
    Anamnese.call (this, historico, risco);
    this.cor = cor;
}

const paciente1 = new Paciente("Lucas", 27, '75kg', '38°', '12/8', 'sem historico', 'Baixo', 'Verde');
const paciente2 = new Paciente ("Maria", 38, '100kg', '40°', '12/8', 'Diabetica', 'Alto risco', 'Laranja');
const paciente3 = new Paciente ("Julia", 38, '48kg', '35°', '12/8', 'Diabetica', 'Sem Risco', 'Verde');


console.log(paciente1);
console.log(paciente2);
console.log(paciente3);

