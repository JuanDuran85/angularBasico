import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasDoblesComponent } from './barras-dobles.component';

describe('BarrasDoblesComponent', () => {
  let component: BarrasDoblesComponent;
  let fixture: ComponentFixture<BarrasDoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasDoblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasDoblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
