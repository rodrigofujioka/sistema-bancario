import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from 'src/app/shared/models/Conta';
import { ContaService } from 'src/app/shared/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.scss']
})
export class CadastroContaComponent implements OnInit{
  editar;
  formGroup: FormGroup;

  constructor(private contaService: ContaService, private router: Router, private route: ActivatedRoute){
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      agencia: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required)
    });
    this.editar = false
  }

  ngOnInit(): void {
    if (this.route.snapshot.params["id"]){
      this.editar = true
      this.contaService.pesquisarPorId(this.route.snapshot.params["id"]).subscribe(
        conta => {
          this.formGroup.patchValue(conta)
        }
      )
    }
  }

  cadastrar() {
    const conta: Conta = this.formGroup.value;
    if (this.editar) {
      this.contaService.atualizar(conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Conta atualizada com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/conta']);
        },
        error: (error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao atualizar a conta!',
          });
        }
      });
    } else {
      // Modo de criação
      this.contaService.cadastrar(conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Conta criada com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/conta']);
        },
        error: (error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao criar Conta!',
          });
        }
      });
    }
  }
}
