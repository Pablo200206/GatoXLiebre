import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionsPageComponent } from './adoptions/page/adoptions-page/adoptions-page.component';

const routes: Routes = [{
  component: AdoptionsPageComponent,
  path: 'adoptions'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
