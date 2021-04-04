import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocButtonComponent } from './geo-loc-button.component';

describe('GeoLocButtonComponent', () => {
  let component: GeoLocButtonComponent;
  let fixture: ComponentFixture<GeoLocButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoLocButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
