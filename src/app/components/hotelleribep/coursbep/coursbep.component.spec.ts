import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursbepComponent } from './coursbep.component';

describe('CoursbepComponent', () => {
  let component: CoursbepComponent;
  let fixture: ComponentFixture<CoursbepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursbepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursbepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
