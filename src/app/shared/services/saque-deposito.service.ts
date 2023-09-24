import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaqueDepositoService {

  api = `${environment.api}/contas/id/deposito/`;


  constructor(private contaHttp: HttpClient) { }

  depositar(valor: number){
    
  }
}
