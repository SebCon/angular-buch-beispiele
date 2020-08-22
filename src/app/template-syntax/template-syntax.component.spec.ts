import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxComponent } from './template-syntax.component';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('TemplateSyntaxComponent', () => {
  let component: TemplateSyntaxComponent;
  let fixture: ComponentFixture<TemplateSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSyntaxComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
