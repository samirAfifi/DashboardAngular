import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverViewComponent } from './compnonet/over-view/over-view.component';
import { AudienceComponent } from './compnonet/audience/audience.component';
import { ErrorsComponent } from './compnonet/errors/errors.component';
import { JqwidgetsComponent } from './compnonet/jqwidgets/jqwidgets.component';

const routes: Routes = [
  { path: '', redirectTo:'overView', pathMatch:'full' },
  { path:'overView', component:OverViewComponent},
  {path:'audience',component:AudienceComponent},
  {path:'jqwidgets',component:JqwidgetsComponent},
  {path:'**',component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
