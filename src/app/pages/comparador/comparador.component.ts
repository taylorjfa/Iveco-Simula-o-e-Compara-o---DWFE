import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface VeiculoSpecs {
  nome: string;
  imagem: string;
  eixo: string;
  distancia: string;
  potencia: string;
  suspensao: string;
  torque: string;
  aplicacao: string;
}

@Component({
  selector: 'app-comparador',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss'],
})
export class ComparadorComponent {
  allVeiculos = new Map<string, VeiculoSpecs>([
    [
      'S-WAY 6x4',
      {
        nome: 'S-WAY 6X4',
        imagem: 'assets/images/s-way-6x4.webp',
        eixo: '3 EIXOS TRASEIROS',
        distancia: '3540 MM',
        potencia: '540 CV (FPT CURSOR 13)',
        suspensao: 'MECÂNICA TIPO "CANTILEVER"',
        torque: '2550 NM @ 1500-1900 RPM',
        aplicacao: 'TRANSPORTE DE LONGAS DISTÂNCIAS',
      },
    ],
    [
      'S-WAY 6x2',
      {
        nome: 'S-WAY 6X2',
        imagem: 'assets/images/s-way-6x2.webp',
        eixo: '2 EIXOS TRASEIROS',
        distancia: '3170 MM / 3450 MM',
        potencia: '480 CV (FPT CURSOR 13)',
        suspensao: 'SEMIELÍPTICA ASSIMÉTRICA',
        torque: '2450 NM @ 1100 RPM',
        aplicacao: 'TRANSPORTE REGIONAL E NACIONAL',
      },
    ],
    [
      'S-WAY 4x2',
      {
        nome: 'S-WAY 4X2',
        imagem: 'assets/images/s-way-4x2.webp',
        eixo: '2 EIXOS',
        distancia: '3000 MM',
        potencia: '460 CV (FPT CURSOR 11)',
        suspensao: 'PNEUMÁTICA INTEGRAL',
        torque: '2150 NM @ 1200 RPM',
        aplicacao: 'DISTRIBUIÇÃO E MÉDIAS DISTÂNCIAS',
      },
    ],
    [
      'Tector 9-15t',
      {
        nome: 'TECTOR 9-15T',
        imagem: 'assets/images/tector-9t.jpg',
        eixo: '2 EIXOS',
        distancia: '3900 MM',
        potencia: '190 CV (FPT NEF 4)',
        suspensao: 'PARABÓLICA DIANTEIRA/TRASEIRA',
        torque: '610 NM @ 1300-1900 RPM',
        aplicacao: 'ENTREGA URBANA',
      },
    ],
    [
      'Tector 17-31t',
      {
        nome: 'TECTOR 17-31T',
        imagem: 'assets/images/tector-17t.png',
        eixo: '3 EIXOS',
        distancia: '4800 MM',
        potencia: '300 CV (FPT CURSOR 9)',
        suspensao: 'MOLAS SEMIELÍPTICAS',
        torque: '1050 NM @ 1250 RPM',
        aplicacao: 'CONSTRUÇÃO CIVIL E RODOVIÁRIO',
      },
    ],
    [
      'DAILY FURGÃO',
      {
        nome: 'DAILY FURGÃO',
        imagem: 'assets/images/daily-furgao.png',
        eixo: '2 EIXOS (TRAÇÃO TRASEIRA)',
        distancia: '3520 MM',
        potencia: '180 CV (FPT F1C)',
        suspensao: 'QUADRILÁTERO DE REAÇÃO',
        torque: '430 NM @ 1500 RPM',
        aplicacao: 'LOGÍSTICA URBANA RÁPIDA',
      },
    ],
    [
      'DAILY CABINE',
      {
        nome: 'DAILY CABINE',
        imagem: 'assets/images/daily-cabine.png',
        eixo: '2 EIXOS (TRAÇÃO TRASEIRA)',
        distancia: '4350 MM',
        potencia: '150 CV (FPT F1C)',
        suspensao: 'PARABÓLICA',
        torque: '350 NM @ 1400 RPM',
        aplicacao: 'TRANSPORTE DE CARGAS DIVERSAS',
      },
    ],
    [
      'EDAILY',
      {
        nome: 'EDAILY',
        imagem: 'assets/images/e-daily.png',
        eixo: '2 EIXOS (TRAÇÃO TRASEIRA)',
        distancia: '3950 MM',
        potencia: '140 CV (ELÉTRICO)',
        suspensao: 'COM MOLA PARABÓLICA',
        torque: '400 NM (IMEDIATO)',
        aplicacao: 'TRANSPORTE URBANO ECOLÓGICO',
      },
    ],
  ]);

  dropdownOptions = [
    { label: 'S-WAY', options: ['S-WAY 6x4', 'S-WAY 6x2', 'S-WAY 4x2'] },
    { label: 'TECTOR', options: ['Tector 9-15t', 'Tector 17-31t'] },
    { label: 'DAILY', options: ['DAILY FURGÃO', 'DAILY CABINE', 'EDAILY'] },
  ];

  selectedVeiculo1: string | null = null;
  selectedVeiculo2: string | null = null;
  veiculo1: VeiculoSpecs | null = null;
  veiculo2: VeiculoSpecs | null = null;
  specRows: { label: string; key: keyof VeiculoSpecs }[] = [
    { label: 'CONFIGURAÇÃO DO EIXO', key: 'eixo' },
    { label: 'DISTÂNCIA ENTRE EIXOS', key: 'distancia' },
    { label: 'POTÊNCIA DO MOTOR', key: 'potencia' },
    { label: 'SUSPENSÃO TRASEIRA', key: 'suspensao' },
    { label: 'TORQUE', key: 'torque' },
    { label: 'APLICAÇÃO TÍPICA', key: 'aplicacao' },
  ];

  constructor() {}

  onVeiculo1Change(modeloKey: string) {
    this.veiculo1 = this.allVeiculos.get(modeloKey) || null;
  }

  onVeiculo2Change(modeloKey: string) {
    this.veiculo2 = this.allVeiculos.get(modeloKey) || null;
  }
}
