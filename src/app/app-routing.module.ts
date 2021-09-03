import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { SuggestionbugtrackerComponent } from './suggestionbugtracker/suggestionbugtracker.component';
import { SuggestionbugtrackeradminComponent } from './suggestionbugtracker/suggestionbugtrackeradmin/suggestionbugtrackeradmin.component';
import { SuggestionbugtrackeradmindetailsComponent } from './suggestionbugtracker/suggestionbugtrackeradmin/suggestionbugtrackeradmindetails/suggestionbugtrackeradmindetails.component';
import { UsersListeComponent } from './users-liste/users-liste.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersListeComponent ,canActivate: [AuthGuard]},
  { path: 'suggestionbugtracker', component: SuggestionbugtrackerComponent}, // TODO : Route à supprimer avant release
  { path: 'suggestionbugtrackeradmin', component: SuggestionbugtrackeradminComponent,canActivate: [AuthGuard]}, // TODO : authguard admin
  { path: 'suggestionbugtrackeradmindetails/:id', component: SuggestionbugtrackeradmindetailsComponent,canActivate: [AuthGuard]}, // TODO : authguard admin
  { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
