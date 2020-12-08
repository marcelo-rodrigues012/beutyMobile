import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment'
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private readonly PATH: string = 'servico';

  constructor(private http: HttpClient) { }

  listarServico(): Observable<any> {
    return this.http.get<Servico[]>(env.baseUrl + this.PATH);
  }
}
