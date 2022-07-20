export class Usuario {
   public Codigo: number = 0;
   public CodigoIdentificacao: number = 0;
   public Nome: string = "";
   public CodPessoa: number = 0;
   public Senha: string = "";
   public DescontoMax: number = 0;
   public Comissao: number = 0;
   public CadUsuario: boolean = false;
   public BloqueiaCancelaProd: boolean = false;
   public CodigoFuncao: number = 0;
   public CodigoEmpresa: number = 0;
   public CodigoEmpregado: number = 0;
   public MovimentaEstoqueES: boolean = false;
   public VerQuantiaCaixa: boolean = false;
   public devolverProduto: boolean = false;
   public PDV_EstornarRecbto: boolean = false;
   public PDV_CancelarPedido: boolean = false;
   public PDV_PermitirOutrasSaidas: boolean = false;
   public PDV_ModificarDescontoSistema: boolean = false;
   public PDV_PermitirTransfProduto: boolean = false;
   public PDV_CriarOrcamento: boolean = false;
   public Ret_VerCusto: boolean = false;
   public Ret_AlteraTabPreco: boolean = false;
   public AcessaFinanceiro: boolean = false;
   public AlteraProduto: boolean = false;
   public PDV_PermitirVendaClienteComTituloAtrasado: boolean = false;
   public PDV_PermitirVendaClienteSemLimiteCredito: boolean = false;
   public Meta: number = 0;
   public OperadorCaixa: boolean = false;
   public AcessarRetaguarda: boolean = false;
   constructor(
   ) {}


}
