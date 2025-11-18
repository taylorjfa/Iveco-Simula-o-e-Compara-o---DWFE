import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-precificador',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './precificador.component.html',
  styleUrls: ['./precificador.component.scss'],
})
export class PrecificadorComponent {
  modelo = '';
  anoModelo: number | null = null;
  versao = '';
  revisoes = 'sim';
  km: number | null = null;
  combustivel = 'diesel';
  placa = '';
  condicao = 'boa';

  opcoesVersao: any = {
    Daily: ['Daily Cabine', 'Edaily', 'Daily Furgão'],
    Sway: ['Sway 4X2', 'Sway 6X2', 'Sway 6x4'],
    Tector: ['Tector 17-31t', 'Tector 9-1'],
  };
  faixasKm: { min: number; max: number; label: string }[] = [
    { min: 0, max: 15000, label: '0 - 15.000 km' },
    { min: 15001, max: 50000, label: '15.001 - 50.000 km' },
    { min: 50001, max: 100000, label: '50.001 - 100.000 km' },
    { min: 100001, max: 250000, label: '100.001 - 250.000 km' },
    { min: 250001, max: 500000, label: 'Acima de 250.001 km' },
  ];

  versoesDisponiveis: string[] = [];
  valoresCalculados = false;
  valoresConcessionarias: { nome: string; valor: number }[] = [];

  atualizarVersoes() {
    this.versao = '';
    this.versoesDisponiveis = this.opcoesVersao[this.modelo] || [];
    const anoAtual = new Date().getFullYear();
    if (this.modelo === 'Sway' && this.anoModelo !== null && this.anoModelo < 2023) {
      alert('O modelo S-Way deve ser a partir de 2023.');
      this.anoModelo = null;
    } else if (this.modelo === 'Tector' && this.anoModelo !== null && this.anoModelo < 2011) {
      alert('O modelo Tector deve ser a partir de 2011.');
      this.anoModelo = null;
    }
  }

  calcularValor() {
    this.valoresCalculados = true;
    let valorBase = 0;
    switch (this.modelo) {
      case 'Daily':
        valorBase = 350000;
        break;
      case 'Sway':
        valorBase = 550000;
        break;
      case 'Tector':
        valorBase = 400000;
        break;
      default:
        valorBase = 300000;
    }

    let fatorAjuste = 1.0;
    const [minKmStr, maxKmStr] = ((this.km as unknown as string) || '0-0').split('-');
    const minKm = Number(minKmStr);

    if (minKm >= 250001) fatorAjuste -= 0.15;
    else if (minKm >= 100001) fatorAjuste -= 0.1;
    else if (minKm >= 50001) fatorAjuste -= 0.05;

    if (this.revisoes === 'nao') fatorAjuste -= 0.04;

    if (this.condicao === 'media') fatorAjuste -= 0.08;
    else if (this.condicao === 'ruim') fatorAjuste -= 0.18;

    if (this.anoModelo !== null) {
      const anoAtual = new Date().getFullYear();
      const anosDeUso = anoAtual - this.anoModelo;
      fatorAjuste -= anosDeUso * 0.015;
    }

    if (fatorAjuste < 0.6) fatorAjuste = 0.6;
    if (fatorAjuste > 1.05) fatorAjuste = 1.05;

    const valorFinal = valorBase * fatorAjuste;

    this.valoresConcessionarias = [
      { nome: 'DEVA Betim', valor: valorFinal },
      { nome: 'Torino Sinop', valor: valorFinal * 0.97 },
      { nome: 'Possoli Criciúma', valor: valorFinal * 1.015 },
      { nome: 'DEVA Juiz de Fora', valor: valorFinal * 1.03 },
      { nome: 'Cofipe São Paulo', valor: valorFinal * 0.96 },
      { nome: 'Carboni Videira', valor: valorFinal * 0.99 },
      { nome: 'Covezi Goiânia', valor: valorFinal * 1.005 },
    ];
  }
}
