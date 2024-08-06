class Servico {
    private repositorio: Repositorio;

    constructor(){
        this.repositorio = new Repositorio;
    }

    gerarCodBarras(){
        const boletos = this.repositorio.listar();
        const ultBoleto = boletos[boletos.length-1];
        const novoCod = Number(ultBoleto.codBoleto) + 1;

        return novoCod;
    }

    inserir(pagante: string, valor: Number, data:string) {
        const codBoleto = this.gerarCodBarras();

        if(this.buscarPorData(data)[0].dataBol === data && this.buscarPorPagante(pagante)[0].paganteBol){
            throw "O boleto já está cadastrado.";
        }
 
        const boleto = new Boleto(codBoleto, pagante, valor, data);
        this.repositorio.inserir(boleto);
        return boleto;
    }

    remover(codBoleto: Number) {
        return this.repositorio.remover(codBoleto);
    }

    // função de edição
    pagarBoleto(codBoleto: Number){
        const boletoPagar = this.buscarPorCodigo(codBoleto);

        if(boletoPagar[0].pagou){
            throw `O boleto de código ${codBoleto} já foi pago.`;
        }

        boletoPagar[0].pagar();
        return true;
    }
 
    listar(): Boleto[] {
        return this.repositorio.listar();
    }
 
    buscarPorCodigo(codBoleto: Number): Boleto[] {
        return this.repositorio.buscarPorCodigo(codBoleto);
    }

    buscarPorPagante(nome: string): Boleto[] {
        return this.repositorio.buscarPorPagante(nome);
    }

    buscarPorData(data: string): Boleto[] {
        return this.repositorio.buscarPorData(data);
    }
}