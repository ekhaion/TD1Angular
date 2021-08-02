import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenudosComponent } from './bienvenudos/bienvenudos.component';
import { CapardComponent } from './capard/capard.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'capard', component: CapardComponent },
  { path: 'bienvenudos', component: BienvenudosComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
