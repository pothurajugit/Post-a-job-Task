import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostajobComponent } from './postajob/postajob.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [{path:"", redirectTo:'/home', pathMatch:"full"},
                        {path:"home",component:HomeComponent},
                         {path:"joblist",component:ListComponent},
                         {path:"postajob",component:PostajobComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
