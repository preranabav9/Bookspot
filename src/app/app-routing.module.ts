import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< src/app/app-routing.module.ts
=======
import { FavoriteBookComponent } from './favorite-book/favorite-book.component';
import { LoginComponent } from './login/login.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { RequestResponseComponent } from './request-response/request-response.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

>>>>>>> src/app/app-routing.module.ts


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recommendation',
    component: RecommendationComponent
  },
  {
    path:'register-success',
    component: RegisterSuccessComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "view-book",
    component: ViewBookComponent
  },
  {
    path: "search",
    component: SearchBookComponent
  },
  {
    path: 'recommendation',
    component: RecommendationComponent
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'request-reset',
    component: RequestResetComponent

  },
  {
    path: 'request-response',
    component: RequestResponseComponent

  },
  {
    path: 'favourite-book',
    component: FavoriteBookComponent

<<<<<<< src/app/app-routing.module.ts

=======

>>>>>>> src/app/app-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }