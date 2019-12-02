import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitrecapComponent } from './chapitrecap.component';

describe('ChapitrecapComponent', () => {
  let component: ChapitrecapComponent;
  let fixture: ComponentFixture<ChapitrecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapitrecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitrecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
