import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recommendation',
    component: RecommendationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
