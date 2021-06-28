import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrioridadComponent } from './listar-prioridad.component';

describe('ListarPrioridadComponent', () => {
  let component: ListarPrioridadComponent;
  let fixture: ComponentFixture<ListarPrioridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrioridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
