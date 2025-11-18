import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-minha-garagem',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './minha-garagem.component.html',
  styleUrl: './minha-garagem.component.scss',
})
export class MinhaGaragemComponent {
  veiculosCurtidos = [
    {
      modelo: '6x2',
      eixos: '3.170 / 3.450 mm',
      comprimento: '6.848 / 7.156 mm',
      potencia: '480 cv @ 1.400 - 1.900 rpm',
      torque: '2.450 Nm',
      cabine: '3.457 / 3.897 mm',
      peso: '27.200 kg',
      imagem: 'assets/images/sway1.webp',
      logo: 'assets/images/sway-logo.svg',
      tipoVeiculo: 'sway',
    },
    {
      modelo: '6x2',
      eixos: '3.540 mm',
      comprimento: '7.156 mm',
      potencia: '540 cv @ 1.500 - 1.900 rpm',
      torque: '2.550 Nm',
      cabine: '3.434 / 3.900 mm',
      peso: '28.200 kg',
      imagem: 'assets/images/swayCarrossel1.webp',
      logo: 'assets/images/sway-logo.svg',
      tipoVeiculo: 'sway',
    },
    {
      modelo: '30 - 160',
      eixos: '3.520 mm',
      comprimento: '5.153 / 6.072 mm',
      potencia: '160 cv',
      torque: '380 Nm @ 1.600 a 2.900 rpm',
      cabine: 'H2 - 2.779',
      imagem: 'assets/images/daily1.png',
      logo: 'assets/images/daily-logo.svg',
      tipoVeiculo: 'daily',
    },
  ];
}
