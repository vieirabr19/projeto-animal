import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  id!: number;
  animal$!: Observable<Animal>

  constructor(
    private animaisService: AnimaisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.animal$ = this.animaisService.buscaPorId(this.id);
  }

  curtir(){
    this.animaisService.curtir(this.id).subscribe(curtidas => {
      if(curtidas){
        this.animal$ = this.animaisService.buscaPorId(this.id);
      }
    },
    () => alert('Você já curtiu essa foto, rs'))
  }

  excluir(){
    this.animaisService.excluiAnimal(this.id).subscribe(() => {
      this.router.navigateByUrl('animais')
    },
    error => console.log(error))
  }

}
