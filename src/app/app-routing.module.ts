import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {GoalsPageComponent} from "./pages/goals-page/goals-page.component";
import {TransactionComponent} from "./pages/dashboard/components/transactions/transaction.component";

export const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'goals', component: GoalsPageComponent
  },
  {
    path: 'transactions', component: TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
