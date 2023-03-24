import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './home/button/button.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { SectionTitleComponent } from './home/section-title/section-title.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
