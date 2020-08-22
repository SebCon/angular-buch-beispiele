import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponent } from './custom.component';
import { FormsModule } from '@angular/forms';
import { MyPipePipe } from './my-pipe.pipe';

describe('CustomComponent', () => {
  let component: CustomComponent;
  let fixture: ComponentFixture<CustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomComponent, MyPipePipe ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
