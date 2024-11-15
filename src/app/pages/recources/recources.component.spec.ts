import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecourcesComponent } from './recources.component';

describe('RecourcesComponent', () => {
  let component: RecourcesComponent;
  let fixture: ComponentFixture<RecourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
