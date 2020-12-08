import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment'
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private readonly PATH: string = 'funcionario';

  constructor(private http: HttpClient) { }

  buscarFuncionarioPorServico(servicoId: String): Observable<any> {
    return this.http.get<Funcionario[]>(env.baseUrl + this.PATH + '/' + servicoId);
  }
}
