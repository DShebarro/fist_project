import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent {
  nome : string = '';
  perfil = {
    username: 'havymiton77',
    nome: 'Havymilton da Fonseca',
    local: 'Portugal - Lisboa',
    idade: 53,
    profissao: 'Engenheiro Civil',
    empresa: 'CREA-AM',
    publicacoes: 500,
    seguidores: 2889,
    seguindo: 2,
    foto: 'https://tse2.mm.bing.net/th?id=OIP.gbVDipCUIfWARZ69XMdCPgHaE8&pid=Api&P=0&h=180',
  };
}
