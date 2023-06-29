import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContinueComponent } from './continue/continue.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    CardComponent,
    FormComponent,
    ContinueComponent,
    ContainerComponent,
  ],
  exports: [
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class InteractiveCardModule { }
