import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosingUniversityComponent } from './chosing-university.component';

describe('ChosingUniversityComponent', () => {
  let component: ChosingUniversityComponent;
  let fixture: ComponentFixture<ChosingUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChosingUniversityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosingUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
