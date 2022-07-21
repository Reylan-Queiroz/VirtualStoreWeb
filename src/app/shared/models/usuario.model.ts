import { Funcoes } from "./funcoes.model";

export class Usuario {
   public codigo: number = 0;
   public codigoIdentificacao: number = 0;
   public nome: string = "";
   public codPessoa: number = 0;
   public senha: string = "";
   public descontoMax: number = 0;
   public comissao: number = 0;
   public cadUsuario: boolean = false;
   public bloqueiaCancelaProd: boolean = false;
   public codigoFuncao: number = 0;
   public funcao: Funcoes | undefined = undefined;
   public codigoEmpresa: number = 0;
   public codigoEmpregado: number = 0;
   public movimentaEstoqueES: boolean = false;
   public verQuantiaCaixa: boolean = false;
   public devolverProduto: boolean = false;
   public pDV_EstornarRecbto: boolean = false;
   public pDV_CancelarPedido: boolean = false;
   public pDV_PermitirOutrasSaidas: boolean = false;
   public pDV_ModificarDescontoSistema: boolean = false;
   public pDV_PermitirTransfProduto: boolean = false;
   public pDV_CriarOrcamento: boolean = false;
   public ret_VerCusto: boolean = false;
   public ret_AlteraTabPreco: boolean = false;
   public acessaFinanceiro: boolean = false;
   public alteraProduto: boolean = false;
   public pDV_PermitirVendaClienteComTituloAtrasado: boolean = false;
   public pDV_PermitirVendaClienteSemLimiteCredito: boolean = false;
   public meta: number = 0;
   public operadorCaixa: boolean = false;
   public acessarRetaguarda: boolean = false;
   public excluido: boolean = false;
   constructor(
   ) {}


}
