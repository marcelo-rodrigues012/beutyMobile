import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Cadastro } from './cadastro-list.model';

@Injectable()
export class CadastroListService {

  private readonly PATH: string = 'usuario';

  constructor(private http: HttpClient) { }

  cadastrarUsuario(cadastro: Cadastro): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, cadastro
      ); 
    }
}
