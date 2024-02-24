import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { ResultsComponent } from './components/results/results.component';
import { HistoricaltrendsComponent } from './components/historicaltrends/historicaltrends.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    ResultsComponent,
    HistoricaltrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
