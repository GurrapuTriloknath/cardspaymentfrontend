import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardspaymentComponent } from './cardspayment.component';

describe('CardspaymentComponent', () => {
  let component: CardspaymentComponent;
  let fixture: ComponentFixture<CardspaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardspaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
