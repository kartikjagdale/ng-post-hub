import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatGridListModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatGridListModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule {}
