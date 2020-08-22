import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAdminComponent } from './photo-admin.component';
import { HttpClientModule } from '@angular/common/http';

describe('PhotoAdminComponent', () => {
  let component: PhotoAdminComponent;
  let fixture: ComponentFixture<PhotoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAdminComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
