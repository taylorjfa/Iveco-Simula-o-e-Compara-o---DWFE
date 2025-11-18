import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-sway',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './sway.component.html',
  styleUrls: ['./sway.component.scss'],
})
export class SwayComponent {
  imagens: string[] = [
    'assets/images/swayCarrossel1.webp',
    'assets/images/swayCarrossel2.webp',
    'assets/images/swayCarrossel3.webp',
    'assets/images/swayCarrossel4.webp',
  ];

  imagemAtual: number = 0;
  caracteristicas: string[] = [
    'Forte e confortável',
    'Conectado e inteligente',
    'Potente e econômico',
    'Seguro como nenhum outro',
  ];

  proximaImagem(): void {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
  }
  imagemAnterior(): void {
    this.imagemAtual = (this.imagemAtual - 1 + this.imagens.length) % this.imagens.length;
  }
}
