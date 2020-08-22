import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsAdminComponent } from './posts-admin.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostsAdminComponent', () => {
  let component: PostsAdminComponent;
  let fixture: ComponentFixture<PostsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsAdminComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
