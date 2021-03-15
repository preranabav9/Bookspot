import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

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
    path: "recommendation",
    component: RecommendationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }