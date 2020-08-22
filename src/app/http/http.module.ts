import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PhotoAdminComponent } from './photo-admin/photo-admin.component';
import { ExtendedRoutes } from '../app-routing.module';
import { PostsAdminComponent } from './posts-admin/posts-admin.component';

export const httpRoutes: ExtendedRoutes[] = [
  {
    path: 'http',
    title: 'Serverkommunikation',
    children: [
      {
        path: 'photo-admin',
        title: 'PhotoAdmin',
        component: PhotoAdminComponent
      },
      {
        path: 'posts-admin',
        title: 'PostsAdmin',
        component: PostsAdminComponent
      }
    ] as ExtendedRoutes[]
  }
];

@NgModule({
  declarations: [PhotoAdminComponent, PostsAdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class HttpModule { }
