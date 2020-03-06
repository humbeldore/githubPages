import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppLandingPageModule } from './components/landing-page/landing-page.module';
import { AppCoreModule } from './components/core.module';
import { AppFooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppCoreModule,
    AppLandingPageModule,
    AppFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
