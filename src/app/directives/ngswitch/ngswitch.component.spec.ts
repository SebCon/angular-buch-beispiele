import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchComponent } from './ngswitch.component';
import { FormsModule } from '@angular/forms';

describe('NgswitchComponent', () => {
  let component: NgswitchComponent;
  let fixture: ComponentFixture<NgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
