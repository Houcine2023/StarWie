import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsPlansComponent } from './lessons-plans.component';

describe('LessonsPlansComponent', () => {
  let component: LessonsPlansComponent;
  let fixture: ComponentFixture<LessonsPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
