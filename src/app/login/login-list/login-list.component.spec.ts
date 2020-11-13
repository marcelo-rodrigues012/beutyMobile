import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginListComponent } from './login-list.component';

describe('LoginListComponent', () => {
  let component: LoginListComponent;
  let fixture: ComponentFixture<LoginListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
