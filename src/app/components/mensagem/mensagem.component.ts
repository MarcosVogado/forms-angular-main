import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  //O @Input fará com que o componente receba dados de outro componente. 
  @Input() mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
