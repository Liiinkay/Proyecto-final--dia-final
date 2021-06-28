import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTicketsComponent } from './mostrar-tickets.component';

describe('MostrarTicketsComponent', () => {
  let component: MostrarTicketsComponent;
  let fixture: ComponentFixture<MostrarTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
