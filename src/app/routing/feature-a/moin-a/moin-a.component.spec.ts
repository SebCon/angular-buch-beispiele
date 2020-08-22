import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoinAComponent } from './moin-a.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoinAComponent', () => {
  let component: MoinAComponent;
  let fixture: ComponentFixture<MoinAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoinAComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoinAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
