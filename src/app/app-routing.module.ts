import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent, HomeComponent } from 'src/pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item/:id', component: HomeComponent },
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
