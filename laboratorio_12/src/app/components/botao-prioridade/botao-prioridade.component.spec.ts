import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPrioridadeComponent } from './botao-prioridade.component';

describe('BotaoPrioridadeComponent', () => {
  let component: BotaoPrioridadeComponent;
  let fixture: ComponentFixture<BotaoPrioridadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoPrioridadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoPrioridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
