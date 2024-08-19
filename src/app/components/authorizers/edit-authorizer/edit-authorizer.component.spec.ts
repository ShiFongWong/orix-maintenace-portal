import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorizerComponent } from './edit-authorizer.component';

describe('EditAuthorizerComponent', () => {
  let component: EditAuthorizerComponent;
  let fixture: ComponentFixture<EditAuthorizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAuthorizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAuthorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
