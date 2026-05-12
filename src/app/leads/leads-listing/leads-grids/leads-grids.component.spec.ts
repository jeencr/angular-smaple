import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsGridsComponent } from './leads-grids.component';

describe('LeadsGridsComponent', () => {
  let component: LeadsGridsComponent;
  let fixture: ComponentFixture<LeadsGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsGridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
