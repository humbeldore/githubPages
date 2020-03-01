import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLandingPageComponent } from './components/landing-page/landing-page.component';
import { AppApplyComponent } from './components/apply/apply.component';
import { SuccessComponent } from './components/success/success.component';


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
        path: 'erfolgreich',
        component: SuccessComponent,
        data: { title: 'Erfolgreich' }
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
