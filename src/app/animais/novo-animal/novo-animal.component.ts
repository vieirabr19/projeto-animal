import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AnimaisService } from '../animais.service';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private animaisService: AnimaisService
    ) { }

  ngOnInit(): void {
    this.formComentario = this.fb.group({
      file: [null, [Validators.required]],
      description: [null, [Validators.maxLength(300)]],
      allowComments: [null],
    })
  }

  upload(){
    const allowComments = this.formComentario.get('allowComments')?.value ?? false;
    const description = this.formComentario.get('description')?.value ?? '';

    this.animaisService.upload(description, allowComments, this.file)
    .pipe(finalize(() => this.router.navigateByUrl('/animais')))
    .subscribe(
      (event: HttpEvent<any>) => {
        if(event.type === HttpEventType.UploadProgress){
          const total = event.total ?? 1;
          this.percentualConcluido = Math.round(100 * (event.loaded / total))
        }
      },
      error => console.log(error)
    );
  }

  gravarArquivo(arquivo: any){
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
