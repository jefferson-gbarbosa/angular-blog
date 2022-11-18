import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AppRountinModule } from './app-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { LogoComponent } from './components/logo/logo.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRountinModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent,LogoComponent, MenuTitleComponent, BigCardComponent,SmallCardComponent,ContentComponent, PostsComponent, FooterSectionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
