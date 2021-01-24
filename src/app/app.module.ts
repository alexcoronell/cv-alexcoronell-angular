import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Directive, Input, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { TrainingComponent } from './components/training/training.component';
import { MyworkComponent } from './components/mywork/mywork.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'studies', component: StudiesComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'mywork', component: MyworkComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    StudiesComponent,
    TrainingComponent,
    MyworkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



@Directive({
  selector: '[routerLinkActive]'
})
export class PatchContextRouterLinkActiveDirective implements OnInit {

  @Input("routerLinkActive") context: any;

  constructor(private routerLinkActive: RouterLinkActive) {

  }

  ngOnInit() {
    this.context._routerLinkActive = this.routerLinkActive;
  }
}
