export abstract class AbstractError extends Error {
  private motivo: string;
  private codigo: number;

  constructor(motivo: string, mensagem: string, codigo: number) {
    super(mensagem);
    this.motivo = motivo;
    this.codigo = codigo;
  }

  getError() {
    return {
      motivo: this.motivo,
      mensagem: this.message,
      codigo: this.codigo,
      stack: this.stack,
    };
  }
}
