import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretMessageComponent } from './secret-message.component';

describe('SecretMessageComponent', () => {
  let component: SecretMessageComponent;
  let fixture: ComponentFixture<SecretMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretMessageComponent]
    });
    fixture = TestBed.createComponent(SecretMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
