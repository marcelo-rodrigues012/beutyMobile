import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  description: string;
  pay: number;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Alisamento',
      description: 'Passar os produtos de alisamento e alisar os cabelos.',
      id: 0,
      pay: 30,
      read: false
    },
    {
      fromName: 'Manicure',
      description: 'Long time no chat',
      id: 1,
      pay: 30,
      read: false
    },
    {
      fromName: 'Pedecure',
      description: 'Report Results',
      id: 2,
      pay: 30,
      read: false
    },
    {
      fromName: 'Moicano',
      description: 'The situation',
      id: 3,
      pay: 30,
      read: false
    },
    {
      fromName: 'Cabelo Blindado',
      description: 'Updated invitation: Swim lessons',
      id: 4,
      pay: 30,
      read: false
    },
    {
      fromName: 'Corte Social',
      description: 'Last minute ask',
      id: 5,
      pay: 30,
      read: false
    },
    {
      fromName: 'Corte Tradicional',
      description: 'Family Calendar - Version 1',
      id: 6,
      pay: 30,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      description: 'Placeholder Headhots',
      id: 7,
      pay: 30,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
