import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAComponent } from './feature-a.component';
import { HelloAComponent } from './hello-a/hello-a.component';
import { MoinAComponent } from './moin-a/moin-a.component';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureAComponent', () => {
  let component: FeatureAComponent;
  let fixture: ComponentFixture<FeatureAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAComponent, HelloAComponent, MoinAComponent ],
      imports: [RouterTestingModule],
      providers: [Location]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
