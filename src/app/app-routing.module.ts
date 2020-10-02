import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';

const routes: Routes = [
  {path: '', component: UserTileComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'details/:id', component: UserDetailsComponent},
  {path: 'update/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
