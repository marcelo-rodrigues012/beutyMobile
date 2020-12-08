export class Agendamento{
    constructor(
        public id: number,
        public data: Date,
        public servico: string,
        public valor: number,
        public idFuncionario: number,
        public funcionario: string,
        public usuario: string,
    ){}
}