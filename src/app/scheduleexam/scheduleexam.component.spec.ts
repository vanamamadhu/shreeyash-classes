import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleexamComponent } from './scheduleexam.component';

describe('ScheduleexamComponent', () => {
  let component: ScheduleexamComponent;
  let fixture: ComponentFixture<ScheduleexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
