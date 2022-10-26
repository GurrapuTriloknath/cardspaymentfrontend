import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomerdetailsComponent } from './coustomerdetails.component';

describe('CoustomerdetailsComponent', () => {
  let component: CoustomerdetailsComponent;
  let fixture: ComponentFixture<CoustomerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoustomerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
