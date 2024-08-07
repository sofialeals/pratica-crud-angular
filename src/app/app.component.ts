import { Component } from '@angular/core';
import {Boleto} from '../app/shared/modelo/Boleto';
import {Servico} from '../app/shared/modelo/servico/servico';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'pratica-crud-angular';
  private servico:Servico;

  constructor(){
    this.servico = new Servico();
  }

  inserir(pagante: string, valor: Number, data:string){
    return this.servico.inserir(pagante, valor, data);
  }

  remover(codBoleto: Number){
    return this.servico.remover(codBoleto);
  }

  pagarBoleto(codBoleto: Number){
    return this.servico.pagarBoleto(codBoleto);
  }

  listar(): Boleto[] {
    return this.servico.listar();
  }

  buscarPorCodigo(codBoleto: Number): Boleto[] {
    return this.servico.buscarPorCodigo(codBoleto);
  }
}
