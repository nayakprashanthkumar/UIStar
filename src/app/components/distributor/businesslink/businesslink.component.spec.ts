import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesslinkComponent } from './businesslink.component';

describe('BusinesslinkComponent', () => {
  let component: BusinesslinkComponent;
  let fixture: ComponentFixture<BusinesslinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesslinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
