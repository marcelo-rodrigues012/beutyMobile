import { Component, OnInit } from '@angular/core';
import { DataService, Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.scss'],
})
export class ServicoListComponent implements OnInit {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ngOnInit() {}
}
