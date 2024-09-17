import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from "./app.component";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "../pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '', component: AppComponent
  }, // Home route
  {
    path: 'dashboard', component: DashboardComponent
  } // Dashboard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
