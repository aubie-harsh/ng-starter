import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, ProfileComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
