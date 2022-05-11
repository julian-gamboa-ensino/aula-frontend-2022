import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaImagensComponent } from './tela-imagens.component';

describe('TelaImagensComponent', () => {
  let component: TelaImagensComponent;
  let fixture: ComponentFixture<TelaImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaImagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
