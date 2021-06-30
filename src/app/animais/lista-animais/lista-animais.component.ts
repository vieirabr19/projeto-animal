import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.animais = this.route.snapshot.data['animais'];
    })
  }

}
