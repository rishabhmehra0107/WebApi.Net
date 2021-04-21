import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayofficeComponent } from './displayoffice.component';

describe('DisplayofficeComponent', () => {
  let component: DisplayofficeComponent;
  let fixture: ComponentFixture<DisplayofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
