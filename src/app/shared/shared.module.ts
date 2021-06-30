import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MensagemModule } from '../componentes/mensagem/mensagem.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemModule,
  ],
  exports: [
    ReactiveFormsModule,
    MensagemModule,
  ]
})
export class SharedModule { }
