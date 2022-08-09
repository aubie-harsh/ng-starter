import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components';
import { LoaderService } from './services';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule],
  providers: [LoaderService],
})
export class SharedModule {}
