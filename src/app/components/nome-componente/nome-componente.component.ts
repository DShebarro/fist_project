import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone: true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.scss'
})
export class NomeComponenteComponent {
[x: string]: any;
  nome: string = "Rosivaldo da Fonseca";
  profissao: string = "Desenvolvedor Web";
  hobbies: string [] = ['Leitura', 'Jogar Video Game', 'Assistir Anime', 'Tecnologia'];
}
