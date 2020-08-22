import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenComponent } from './template-driven.component';
import { FormsModule } from '@angular/forms';

describe('TemplateDrivenComponent', () => {
  let component: TemplateDrivenComponent;
  let fixture: ComponentFixture<TemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
