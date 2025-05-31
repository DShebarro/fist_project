// Importações necessárias do Angular e de outros arquivos do projeto
import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service'; // Serviço que busca os dados climáticos
import { ClimaTable } from '../../interfaces/clima'; // Interface que define o formato dos dados da tabela
import { response } from 'express'; // (Importação desnecessária neste contexto, pode ser removida)

// Decorador que define este componente Angular
@Component({
  selector: 'app-clima', // Nome do seletor HTML para usar este componente
  imports: [],            // Sem módulos importados diretamente aqui
  standalone: true,       // Componente standalone (não depende de um módulo Angular)
  templateUrl: './clima.component.html', // Template HTML associado ao componente
  styleUrl: './clima.component.scss'     // Estilo (CSS/SCSS) associado ao componente
})
export class ClimaComponent {

  // Injeta o serviço ClimaService usando a API de injeção de dependência
  private climaService = inject(ClimaService);
  // Variáveis para armazenar dados do clima
  climaData: any;                 // Dados completos retornados pela API
  date: Date = new Date();        // Data atual (será atualizada com base na API)
  dataTable: ClimaTable[] = [];   // Tabela com os dados de hora, temperatura, umidade e vento

  // Função auxiliar para subtrair 4 horas de uma data recebida em formato string
  subtrair4horas(dataEmString: string) {
    let novaData = new Date(dataEmString);         // Converte a string em objeto Date
    novaData.setHours(novaData.getHours() - 4);    // Subtrai 4 horas (ex: ajuste de fuso horário)
    return novaData;                               // Retorna a nova data ajustada
  }

  // Método de ciclo de vida do Angular: é chamado automaticamente ao iniciar o componente
  ngOnInit() {
    // Chama o método getClima do serviço para obter os dados da API
    this.climaService.getClima()
      .subscribe((response: any) => { // Se inscreve para receber os dados quando a resposta chegar
        this.climaData = response;    // Armazena os dados completos em climaData

        // Ajusta a data atual com base na hora informada em "current.time", subtraindo 4h
        this.date = this.subtrair4horas(response.current.time);

        // Cria a tabela de dados processando os arrays de tempo e valores meteorológicos
        this.dataTable = response.hourly.time.map((t: string, i: number) => ({
          time: this.subtrair4horas(t),                                // Ajusta a hora de cada item
          temperature: response.hourly.temperature_2m[i],             // Temperatura no índice correspondente
          humidity: response.hourly.relative_humidity_2m[i],          // Umidade relativa
          windSpeed: response.hourly.wind_speed_10m[i]                // Velocidade do vento
        }));
      });
  }
}
