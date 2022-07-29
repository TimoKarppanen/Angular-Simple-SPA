import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EtusivuComponent } from './etusivu/etusivu.component';   // EtusivuComponent from etusivu
import { TietoaMeistaComponent } from './tietoa-meista/tietoa-meista.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { YhteystiedotComponent } from './yhteystiedot/yhteystiedot.component';

@NgModule({
  declarations: [
    AppComponent,
    EtusivuComponent,         // EtusivuComponent
    TietoaMeistaComponent,
    PageNotFoundComponent,
    YhteystiedotComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'etusivu', component: EtusivuComponent},
      {path: 'tietoa-meista', component: TietoaMeistaComponent},
      {path: 'yhteystiedot', component: YhteystiedotComponent},
      {path: '', redirectTo: '/etusivu', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

