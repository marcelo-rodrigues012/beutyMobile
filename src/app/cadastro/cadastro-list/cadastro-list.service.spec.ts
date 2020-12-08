import { TestBed } from '@angular/core/testing';

import { CadastroListService } from './cadastro-list.service';

describe('CadastroListService', () => {
  let service: CadastroListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
