import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContentRoutingModule } from './content.routing.module';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    ContentComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [CommonModule, ContentRoutingModule],
  providers: [],
})
export class ContentModule {}
