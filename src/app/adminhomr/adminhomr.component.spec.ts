import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomrComponent } from './adminhomr.component';

describe('AdminhomrComponent', () => {
  let component: AdminhomrComponent;
  let fixture: ComponentFixture<AdminhomrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminhomrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
