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
    username: 'dav.sheb',
    nome: 'Davy Shebarro',
    local: 'Portugal - Lisboa',
    idade: 25,
    profissao: 'Engenheiro de Software',
    empresa: 'CREA-AM',
    publicacoes: 50,
    seguidores: 10000.,
    seguindo: 10,
    foto: 'https://imgs.search.brave.com/G-E-r5ehXWLfVaAz-KhQANExCmaQooTvJNFap6FXTxo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNWpEb0x1/YmwwOE1LSDVHci1x/Y3I2YzdTdGt3SXo1/Z2tqS2lUNmtoSlJh/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9kek56WTJo/dmIyeHpMbU52L2JT/OTNNMmx0WVdkbGN5/OWgvZG1GMFlYSXlM/bkJ1Wnc',
  };
}
