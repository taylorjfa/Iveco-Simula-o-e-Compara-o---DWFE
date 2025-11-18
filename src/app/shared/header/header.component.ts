import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  menuAberto = false;

  constructor(private router: Router) {}

  abrirMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuAberto = true;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  voltarParaHome(): void {
    this.menuAberto = false;
    this.router.navigate(['/']);
  }
}
