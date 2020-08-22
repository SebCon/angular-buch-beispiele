import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTestComponent } from './component-test.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ComponentTestComponent', () => {
  let component: ComponentTestComponent;
  let fixture: ComponentFixture<ComponentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTestComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text', () => {
    component.text = 'hallo du';
    fixture.detectChanges();
    const textOutput = fixture.debugElement.query(By.css('p'));
    expect(textOutput.nativeElement.textContent).toBe('hallo du');
  });

  it('should set placeholder', () => {
    const inputValue = fixture.debugElement.query(By.css('input'));
    expect(inputValue.nativeElement.placeholder).toBe('schreib was');
  });

  it('should disable button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeTruthy();
  });
});
