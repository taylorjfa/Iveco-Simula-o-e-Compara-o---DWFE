import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { FooterComponent } from '../../shared/footer/footer.component';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',

  standalone: true,

  imports: [CommonModule, FormsModule, FooterComponent],

  templateUrl: './home.html',

  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router, private http: HttpClient) {}

  menuAberto = false;

  mostrarModalAdmin = false;

  emailAdmin = '';

  senhaAdmin = '';

  mostrarModalCliente = false;

  emailCliente = '';

  senhaCliente = '';

  mostrarConcessionarias = false;

  cep = '';

  endereco: any = null;

  lojasProximas: { nome: string; endereco: string }[] = [];

  abrirMenu(event: MouseEvent): void {
    event.stopPropagation();

    this.menuAberto = true;
  }

  fecharMenu(): void {
    this.menuAberto = false;

    this.fecharModalAdmin();

    this.fecharModalCliente();

    this.fecharConcessionaria();
  }

  abrirModalAdmin(event: MouseEvent): void {
    event.stopPropagation();

    this.menuAberto = false;

    this.mostrarModalAdmin = true;

    this.adicionarDesfoque();
  }

  fecharModalAdmin(): void {
    this.mostrarModalAdmin = false;

    this.removerDesfoque();
  }

  loginAdmin(): void {
    console.log('Login Admin com:', this.emailAdmin, this.senhaAdmin);

    this.router.navigate(['/admin']);
  }

  abrirModalCliente(event: MouseEvent): void {
    event.stopPropagation();

    this.menuAberto = false;

    this.mostrarModalCliente = true;

    this.adicionarDesfoque();
  }

  fecharModalCliente(): void {
    this.mostrarModalCliente = false;

    this.removerDesfoque();
  }

  loginCliente(): void {
    console.log('ENTROU NO LOGIN CLIENTE');

    console.log('Login Cliente com:', this.emailCliente, this.senhaCliente);

    this.router.navigate(['/minhagaragem']);

    this.fecharModalCliente();
  }

  abrirConcessionaria(): void {
    this.menuAberto = false;

    this.mostrarConcessionarias = true;

    this.adicionarDesfoque();
  }

  fecharConcessionaria(): void {
    this.mostrarConcessionarias = false;

    this.removerDesfoque();
  }

  buscarConcessionarias(): void {
    const cepLimpo = this.cep.replace(/\D/g, '');

    if (!cepLimpo || cepLimpo.length < 8) return;

    this.http.get<any>(`https://viacep.com.br/ws/${cepLimpo}/json/`).subscribe((cepData) => {
      const enderecoCompleto = `${cepData.logradouro}, ${cepData.localidade}, ${cepData.uf}, Brasil`;

      this.http

        .get<any[]>(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            enderecoCompleto
          )}`
        )

        .subscribe((geoData) => {
          if (geoData.length === 0) return;

          const userLat = parseFloat(geoData[0].lat);

          const userLon = parseFloat(geoData[0].lon);

          this.http.get<any[]>('assets/concessionarias.json').subscribe((concessionarias) => {
            const distancias = concessionarias.map((loja) => {
              const distancia = this.calcularDistancia(
                userLat,

                userLon,

                loja.latitude,

                loja.longitude
              );

              return { ...loja, distancia };
            });

            distancias.sort((a, b) => a.distancia - b.distancia);

            this.lojasProximas = distancias.slice(0, 2);
          });
        });
    });
  }

  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = this.grausParaRad(lat2 - lat1);

    const dLon = this.grausParaRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.grausParaRad(lat1)) *
        Math.cos(this.grausParaRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  grausParaRad(graus: number): number {
    return graus * (Math.PI / 180);
  }

  adicionarDesfoque(): void {
    const videoContainer = document.querySelector('.video-container');

    if (videoContainer) videoContainer.classList.add('modal-blur');
  }

  removerDesfoque(): void {
    const videoContainer = document.querySelector('.video-container');

    if (videoContainer) videoContainer.classList.remove('modal-blur');
  }

  scrollToContent(): void {
    const target = document.getElementById('cards-veiculos');

    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  navegarPara(veiculo: string): void {
    this.router.navigate(['/' + veiculo]);
  }
}
