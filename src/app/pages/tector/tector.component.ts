import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-tector',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './tector.component.html',
  styleUrls: ['./tector.component.scss'],
})
export class TectorComponent {
  imagens: string[] = [
    'assets/images/tector1.jpeg',
    'assets/images/TectorCBranco.png',
    'assets/images/tector3.jpeg',
    'assets/images/TectorCAmarelo.png',
  ];

  imagemAtual: number = 0;

  caracteristicas: string[] = [
    'Eficiência que impulsiona resultados',
    'Potente e econômico',
    'Tecnologia a favor do motorista',
    'Potente e resistente',
  ];

  proximaImagem(): void {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
  }

  imagemAnterior(): void {
    this.imagemAtual = (this.imagemAtual - 1 + this.imagens.length) % this.imagens.length;
  }
}
