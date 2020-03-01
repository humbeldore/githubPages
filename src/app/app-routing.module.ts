import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLandingPageComponent } from './components/landing-page/landing-page.component';
import { AppApplyComponent } from './components/apply/apply.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppLandingPageComponent
    },
    {
        path: 'bewerben',
        component: AppApplyComponent,
        data: { title: 'Jetzt Bewerben' }
    },
    {
        path: '**',
        component: AppLandingPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
