import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoinBComponent } from './moin-b.component';
import { RouterModule } from '@angular/router';

describe('MoinBComponent', () => {
  let component: MoinBComponent;
  let fixture: ComponentFixture<MoinBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoinBComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoinBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
