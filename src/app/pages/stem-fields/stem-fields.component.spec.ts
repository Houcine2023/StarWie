import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemFieldsComponent } from './stem-fields.component';

describe('StemFieldsComponent', () => {
  let component: StemFieldsComponent;
  let fixture: ComponentFixture<StemFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StemFieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StemFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
