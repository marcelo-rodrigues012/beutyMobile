import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from './cadastro-list.model';
import { CadastroListService } from './cadastro-list.service';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.scss'],
})
export class CadastroListComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private cadastroService: CadastroListService) { }

    ngOnInit(): void {
      this.gerarForm();
    } 

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      // cpf: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  cadastrarUsuario() {
    const cadastro: Cadastro = this.form.value;
    this.cadastroService.cadastrarUsuario(cadastro)
      .subscribe(
        data => {
          const msg: string = "Cadastro Realizado com Sucesso";
          alert(msg);
          this.router.navigate(['/login']);
        },
        err => {
          console.log(JSON.stringify(err));
          let msg: string = "Tente novamente em instantes";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          alert(msg);
        }
      );
    return false;
  }
          
}
