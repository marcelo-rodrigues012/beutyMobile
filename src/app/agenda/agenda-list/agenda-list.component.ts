import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';
import { Funcionario } from './models/funcionario.model';
import { Servico } from './models/servico.model';
import { FuncionariosService } from './servico/funcionarios.service';
import { ServicosService } from './servico/servicos.service';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss'],
})
export class AgendaListComponent implements OnInit {
  servicos: Servico[];
  funcionarios: Funcionario[];
  @ViewChild(IonSelect) IonSelect: IonSelect;
  funcionarioId: String;
  selected_value: String;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  constructor(private service: ServicosService,
    private router: Router,
    private funcionario: FuncionariosService) {
  }

  ngOnInit(): void {
    this.listarServico();
  }

  listarServico() {
    this.service.listarServico()
      .subscribe(
        data => {
          this.servicos = data
        },
        err => {
          let msg: string = "Não foi possivel obter serviços";
          this.router.navigate(['/home']);
          alert(msg);
        }
      );
  }

  obterFuncionario() {
    console.log(this.selected_value);
  }

  // cadastrarAgendamento() {
  //   const agenda: Agendamento = this.form.value;
  //   this.ag.cadastrarUsuario(cadastro)
  //     .subscribe(
  //       data => {
  //         const msg: string = "Cadastro Realizado com Sucesso";
  //         alert(msg);
  //         this.router.navigate(['/login']);
  //       },
  //       err => {
  //         console.log(JSON.stringify(err));
  //         let msg: string = "Tente novamente em instantes";
  //         if (err.status == 400) {
  //           msg = err.error.errors.join(' ');
  //         }
  //         alert(msg);
  //       }
  //     );
  //   return false;
  // }


}
