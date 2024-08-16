import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuthorizerComponent } from './new-authorizer.component';

describe('NewAuthorizerComponent', () => {
  let component: NewAuthorizerComponent;
  let fixture: ComponentFixture<NewAuthorizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAuthorizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAuthorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
