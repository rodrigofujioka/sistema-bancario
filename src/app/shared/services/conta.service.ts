import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Conta } from '../models/Conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  api = `${environment.api}/contas/`;

  constructor(private contaHttp: HttpClient) { }

  cadastrar(novaConta: Conta): Observable<Conta> {
    return this.contaHttp.post<Conta>(
      this.api, novaConta);
  }

  listar(): Observable<Conta[]>{
    return this.contaHttp.get<Conta[]>(this.api);
  }

  listar_paginado(page: number, pageSize: number) : Observable<Conta[]>{
    return this.contaHttp.get<Conta[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }

  deletar(idConta: number): Observable<object> {
    return this.contaHttp.delete(`${this.api}${idConta}`);
  }

  pesquisarPorId(id: number) : Observable<Conta> {
    return this.contaHttp.get<Conta>(`${this.api}${id}`);
  }

  atualizar(conta: Conta): Observable<Conta> {
    return this.contaHttp.put<Conta>(`${this.api}${conta.id}`, conta);
  }

}
