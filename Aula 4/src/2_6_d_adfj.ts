class Aluno{
    nome:string;
    idade:number;

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    dados():void{
        console.log(`O aluno ${this.nome} que possue ${this.idade} anos de idade`);
    }
}
class Curso extends Aluno{
    nome_curso:string;

    constructor(nome:string,idade:number,nome_curso:string){
        super(nome,idade);
        this.nome_curso = nome_curso;
    }
    exibirCurso():void{
        console.log(`O aluno ${this.nome} está cursando ${this.nome_curso}`)
    }
}
const aluno1 = new Curso("João", 20, "Ciência da Computação");
aluno1.dados();
aluno1.exibirCurso();
