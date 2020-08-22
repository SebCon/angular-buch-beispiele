import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestsComponent } from './tests.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;
  let submit: DebugElement;
  let login: DebugElement;
  let password: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    submit = fixture.debugElement.query(By.css('button'));
    login = fixture.debugElement.query(By.css('input[type=email]'));
    password = fixture.debugElement.query(By.css('input[type=password]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should be disabled', () => {
    expect(submit.nativeElement.disabled).toBeTruthy();
  });

  it('button should be enabled', () => {
    component.login = 'Horst';
    component.password = '1234';
    fixture.detectChanges();
    expect(submit.nativeElement.disabled).toBeFalsy();
  });
});
