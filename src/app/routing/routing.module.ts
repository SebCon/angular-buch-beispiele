import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureAComponent } from "./feature-a/feature-a.component";
import { FeatureBComponent } from "./feature-b/feature-b.component";
import { HelloBComponent } from "./feature-b/hello-b/hello-b.component";
import { MoinBComponent } from "./feature-b/moin-b/moin-b.component";
import { MoinAComponent } from "./feature-a/moin-a/moin-a.component";
import { HelloAComponent } from "./feature-a/hello-a/hello-a.component";
import { RoutingComponent } from "./routing.component";
import { ExtendedRoutes } from '../app-routing.module';
import { RouterModule, Route, RouterLinkWithHref } from '@angular/router';

export const exampleLinkRoutes: Route[] = [
  {
    path: "example-routing",
    children: [
      {
        path: '',
        component: RoutingComponent
      },
      {
        path: "feature-a",
        children: [
          {
            path: '',
            component: FeatureAComponent
          },
          {
            path: "moin-a",
            component: MoinAComponent
          },
          {
            path: "hello-a",
            component: HelloAComponent
          }
        ]
      },
      {
        path: "feature-b",
        children: [
          {
            path: '',
            component: FeatureBComponent
          },
          {
            path: "moin-b",
            component: MoinBComponent
          },
          {
            path: "hello-b",
            component: HelloBComponent
          }
        ]
      }
    ]
  }
];

export const exampleRoutingRoutes: ExtendedRoutes[] = [
  {
    path: "example-routing",
    component: RoutingComponent,
    title: 'Example Routing'
  }
];

@NgModule({
  declarations: [
    FeatureAComponent,
    FeatureBComponent,
    HelloBComponent,
    MoinBComponent,
    MoinAComponent,
    HelloAComponent,
    RoutingComponent
  ],
  imports: [CommonModule, RouterModule.forChild(exampleLinkRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {}
