import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppLandingPageModule } from './components/landing-page/landing-page.module';
import { AppCoreModule } from './components/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppCoreModule,
    AppLandingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
