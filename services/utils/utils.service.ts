import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  validaSenha(senha: string): any {
    const regExp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*#?!@$%^&*-])[0-9a-zA-Z$*#?!@$%^&*-]{8,}$/;

    const res = {
      status: '',
      message: ''
    };

    if (regExp1.test(senha)) {
      res.status = 'sucesso';
      res.message = 'Senha válida';
    } else {
      res.status = 'erro';
      res.message = 'Senha inválida, verifique as regras abaixo:';
    }

    return res;
  }

  public real(valor: number) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }
}
