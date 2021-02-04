import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ExerciseLibraryComponent } from './exercise-library/exercise-library.component';
import { ExerciseListComponent } from './exercise-library/exercise-list/exercise-list.component';
import { ExerciseComponent } from './exercise-library/exercise-list/exercise/exercise.component';
import { ExerciseService } from './services/exercise.service';

const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercise-library', component: ExerciseLibraryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ExerciseLibraryComponent,
    ExerciseListComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
