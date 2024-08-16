import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRulesComponent } from './approval-rules.component';

describe('ApprovalRulesComponent', () => {
  let component: ApprovalRulesComponent;
  let fixture: ComponentFixture<ApprovalRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
