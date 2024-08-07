import {Boleto} from '../Boleto';

export class Repositorio {

    private boletos: Boleto[];
    constructor() {
        this.boletos = [];
    }

    inserir(boleto: Boleto) {
        this.boletos.push(boleto);
    }

    listar(): Boleto[] {
        return this.boletos;
    }

    remover(codigo: Number) {
        const indice = this.boletos.findIndex(boleto => boleto.codBoleto === codigo);

        if (indice >= 0) {
            const boleto = this.boletos[indice];
            this.boletos.splice(indice, 1);
            return boleto;
        }

        return undefined;
    }

    buscarPorCodigo(codigo: Number): Boleto[] {
        return this.boletos.filter(boleto => boleto.codBoleto === codigo);
    }

    buscarPorPagante(nomePagante: string): Boleto[] {
        return this.boletos.filter(boleto => boleto.paganteBol === nomePagante);
    }

    buscarPorData(data: string): Boleto[] {
        return this.boletos.filter(boleto => boleto.dataBol === data);
    }

}