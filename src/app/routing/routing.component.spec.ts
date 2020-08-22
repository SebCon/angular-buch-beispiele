import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';
import { FeatureAComponent } from './feature-a/feature-a.component';
import { FeatureBComponent } from './feature-b/feature-b.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent, FeatureAComponent, FeatureBComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
