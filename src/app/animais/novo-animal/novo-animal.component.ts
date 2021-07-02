import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {
  formComentario!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formComentario = this.fb.group({
      file: [null, [Validators.maxLength(30)]]
    })
  }

  upload(){}

  gravarArquivo(arquivo: any){
    console.log(arquivo)
  }

}
