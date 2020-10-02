import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserTileComponent,
    UserDetailsComponent,
    UpdateUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
