import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreegridComponent } from './threegrid.component';

describe('ThreegridComponent', () => {
  let component: ThreegridComponent;
  let fixture: ComponentFixture<ThreegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
