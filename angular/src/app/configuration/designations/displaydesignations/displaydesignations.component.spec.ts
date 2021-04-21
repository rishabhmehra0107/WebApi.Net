import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydesignationsComponent } from './displaydesignations.component';

describe('DisplaydesignationsComponent', () => {
  let component: DisplaydesignationsComponent;
  let fixture: ComponentFixture<DisplaydesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydesignationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
