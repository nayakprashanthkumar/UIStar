import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppaccountComponent } from './appaccount.component';

describe('AppaccountComponent', () => {
  let component: AppaccountComponent;
  let fixture: ComponentFixture<AppaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
