import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitrebepComponent } from './chapitrebep.component';

describe('ChapitrebepComponent', () => {
  let component: ChapitrebepComponent;
  let fixture: ComponentFixture<ChapitrebepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapitrebepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitrebepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
