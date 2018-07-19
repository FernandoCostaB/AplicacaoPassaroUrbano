import { Component, OnInit } from '@angular/core';
import { OrdemCompraService} from '../ordem-compra.service'


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  //variaveis
  public endereco: string = ' '
  public numero: string = ''
  public complemento: string = ''
  public formaDePagamento: string = ''

  //variaveis de controle e validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaDePagamentoValido: boolean

  //variavel de estado primitivos
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true
  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    this.ordemCompraService.efetivarCompra();
  }

  public  atualizaEndereco(endereco: string): void{
    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

    if(this.endereco.length > 3){
      this.enderecoValido = true
    }else{
      this.enderecoValido = false
    }
    // console.log(this.endereco)
    this.habilitaForm()
  }

  public atualizaNumero(numero: string): void{
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    if(this.numero.length > 0){
      this.numeroValido = true
    }else{
      this.numeroValido = false
    }

    // console.log(this.numero)
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string): void{
    this.complemento = complemento
    this.complementoEstadoPrimitivo = false

    if(this.complemento.length > 0){
      this.complementoValido =true
    }
    // console.log(this.complemento)
    this.habilitaForm()
  }

  public atualizaFormaDePagamento(formaDePagameno: string): void{
    this.formaDePagamento = formaDePagameno
    
    this.formaPagamentoEstadoPrimitivo = false

    if(this.formaDePagamento == 'dinheiro' || this.formaDePagamento == 'debito'){
      this.formaDePagamentoValido = true
    }else{
      this.formaDePagamentoValido = false
    }
    // console.log(this.formaDePagamento)
    this.habilitaForm()
  }

    public habilitaForm(): void{
     if( this.enderecoValido === true && this.numeroValido === true && this.formaDePagamentoValido === true ){
          this.formEstado = ''
     }else {
       this.formEstado = 'disable'
     }
    }
}

