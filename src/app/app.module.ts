import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './denifition/layout/layout.component';
import { AboutComponent } from './denifition/about/about.component';
import { IntroComponent } from './denifition/intro/intro.component';
import { SkillsComponent } from './denifition/skills/skills.component';
import { ExperienceComponent } from './denifition/experience/experience.component';
import { EducationComponent } from './denifition/education/education.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponent,
    AboutComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
