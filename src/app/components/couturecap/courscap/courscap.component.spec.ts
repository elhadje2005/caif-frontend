import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourscapComponent } from './courscap.component';

describe('CourscapComponent', () => {
  let component: CourscapComponent;
  let fixture: ComponentFixture<CourscapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourscapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourscapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
