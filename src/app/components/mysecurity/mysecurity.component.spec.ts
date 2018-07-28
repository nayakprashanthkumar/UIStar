import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysecurityComponent } from './mysecurity.component';

describe('MysecurityComponent', () => {
  let component: MysecurityComponent;
  let fixture: ComponentFixture<MysecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
