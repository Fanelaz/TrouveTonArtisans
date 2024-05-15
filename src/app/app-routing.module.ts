import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { ArtisansComponent } from './artisans/artisans.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artisans', component: ArtisansComponent},
  { path: '**', pathMatch: 'full',  
  component: NoFoundComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
