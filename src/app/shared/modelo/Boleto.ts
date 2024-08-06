class Boleto {
    private codigo:Number;
    private pagante:string;
    private valor:Number;
    private pago:boolean;
    private data:string;

    constructor(codBoleto:Number, paganteBoleto:string, valorBoleto:Number, dataBoleto:string) {
        this.codigo = codBoleto;
        this.pagante = paganteBoleto;
        this.valor = valorBoleto;
        this.data = dataBoleto;
        this.pago = false;
    }

    get codBoleto(){
        return this.codigo;
    }

    get paganteBol(){
        return this.pagante;
    }

    get valorBol(){
        return this.valor;
    }

    get dataBol(){
        return this.data;
    }

    get pagou(){
        return this.pago;
    }

    pagar(){
        this.pago = true;
    }
}