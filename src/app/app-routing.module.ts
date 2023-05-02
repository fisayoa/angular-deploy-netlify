import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./content/content.module').then((m) => m.ContentModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
