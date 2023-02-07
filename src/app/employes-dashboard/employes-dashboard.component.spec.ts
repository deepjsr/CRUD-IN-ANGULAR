import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesDashboardComponent } from './employes-dashboard.component';

describe('EmployesDashboardComponent', () => {
  let component: EmployesDashboardComponent;
  let fixture: ComponentFixture<EmployesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
