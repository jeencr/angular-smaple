import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { UnsavedGuard } from './unsaved.guard';


const routes : Routes = [
{path:'add-loans',component:AddLoansComponent,canActivate:[AuthGuard]},
{path:'loan-types',component:LoanTypesComponent,},
{path:'user_view/:id',component:UsersComponent},
{path:'clients',component:ClientsComponent},
{path:'search',component:SearchComponent,canDeactivate:[UnsavedGuard]},
{ path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
