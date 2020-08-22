import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBComponent } from './hello-b.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HelloBComponent', () => {
  let component: HelloBComponent;
  let fixture: ComponentFixture<HelloBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloBComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
