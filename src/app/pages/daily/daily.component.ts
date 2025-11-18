import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-daily',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent {
  imagens: string[] = [
    'assets/images/Daily1C.png',
    'assets/images/Daily2C.png',
    'assets/images/Daily3C.png',
    'assets/images/Daily4C.png',
  ];

  imagemAtual: number = 0;
  caracteristicas: string[] = [
    'Ágil e versátil',
    'Controle de estabilidade (ESP)',
    'Robusta para o trabalho pesado',
    'Eficiente em qualquer trajeto',
  ];

  proximaImagem(): void {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
  }
  imagemAnterior(): void {
    this.imagemAtual = (this.imagemAtual - 1 + this.imagens.length) % this.imagens.length;
  }
}
