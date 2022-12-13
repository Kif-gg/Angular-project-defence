import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRepairComponent } from './request-repair.component';

describe('RequestRepairComponent', () => {
  let component: RequestRepairComponent;
  let fixture: ComponentFixture<RequestRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
