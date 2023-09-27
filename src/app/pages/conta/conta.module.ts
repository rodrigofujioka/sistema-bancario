import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ListagemContaComponent } from './listagem-conta/listagem-conta.component';
import { SaqueContaComponent } from './saque-conta/saque-conta.component';
import { TransferenciaContaComponent } from './transferencia-conta/transferencia-conta.component';
import { DepositoContaComponent } from './deposito-conta/deposito-conta.component';



@NgModule({
  declarations: [
    CadastroContaComponent,
    ListagemContaComponent,
    SaqueContaComponent,
    TransferenciaContaComponent,
    DepositoContaComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [
    CadastroContaComponent,
    ListagemContaComponent,
    SaqueContaComponent,
    TransferenciaContaComponent,
    DepositoContaComponent
  ]
})
export class ContaModule { }
