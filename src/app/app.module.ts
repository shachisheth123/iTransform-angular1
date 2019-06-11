import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './app.route';
import { WelcomeComponent } from './welcome.component';
import { RegistrationModule } from './registration/registration.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CourseModule } from './course/course.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './quiz/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RegistrationModule,
    CourseModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
