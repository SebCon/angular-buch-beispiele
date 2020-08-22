import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementReferenceComponent } from './element-reference.component';

describe('ElementReferenceComponent', () => {
  let component: ElementReferenceComponent;
  let fixture: ComponentFixture<ElementReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
