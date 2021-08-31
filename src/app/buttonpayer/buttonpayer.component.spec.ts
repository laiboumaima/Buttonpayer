import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonpayerComponent } from './buttonpayer.component';

describe('ButtonpayerComponent', () => {
  let component: ButtonpayerComponent;
  let fixture: ComponentFixture<ButtonpayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonpayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonpayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
