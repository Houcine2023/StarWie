import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactsComponent } from './impacts.component';

describe('ImpactsComponent', () => {
  let component: ImpactsComponent;
  let fixture: ComponentFixture<ImpactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
