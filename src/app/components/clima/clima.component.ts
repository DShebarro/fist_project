import { Component, inject } from '@angular/core';
import { ClimaService} from '../../services/clima.service';
import { ClimaTable} from '../../interfaces/clima';

@Component({
  selector: 'app-clima',
  imports: [],
  standalone: true,
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.scss'
})
export class ClimaComponent {

  private climaService = inject(ClimaService);
  climaData: any;
  date: Date = new Date();
  dataTable: ClimaTable[] =[];

}
