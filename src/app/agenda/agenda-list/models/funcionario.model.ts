import { Servico } from './servico.model';

export class Funcionario {
    constructor(
        public id: number,
        public nome: string,
        private _servico: Servico[]
    ) { }
}