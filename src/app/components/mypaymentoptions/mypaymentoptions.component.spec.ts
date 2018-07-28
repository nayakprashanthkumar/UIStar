import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypaymentoptionsComponent } from './mypaymentoptions.component';

describe('MypaymentoptionsComponent', () => {
  let component: MypaymentoptionsComponent;
  let fixture: ComponentFixture<MypaymentoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypaymentoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypaymentoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
