import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseComponent } from './uppercase.component';

describe('UppercaseComponent', () => {
  let component: UppercaseComponent;
  let fixture: ComponentFixture<UppercaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppercaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
