import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewBookComponent } from './view-book/view-book.component';


const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }