import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureBComponent } from './feature-b.component';
import { HelloBComponent } from './hello-b/hello-b.component';
import { MoinBComponent } from './moin-b/moin-b.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureBComponent', () => {
  let component: FeatureBComponent;
  let fixture: ComponentFixture<FeatureBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureBComponent, HelloBComponent, MoinBComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
