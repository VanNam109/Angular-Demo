import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSWitchComponent } from './ng-switch.component';

describe('NgSWitchComponent', () => {
  let component: NgSWitchComponent;
  let fixture: ComponentFixture<NgSWitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSWitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSWitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
