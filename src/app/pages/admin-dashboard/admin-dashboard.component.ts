import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgChartsModule } from 'ng2-charts';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, NgChartsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Cofipe', 'DRodonaves', 'Covezi'],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ['#2563eb', '#4a9cce', '#7fe0db'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'S-WAY',
        data: [100, 10, 15, 505, 100, 55],
        borderColor: '#204873',
        backgroundColor: 'rgba(32, 72, 115, 0.2)',
        fill: false,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: '#204873',
        pointBorderColor: '#204873',
      },
      {
        label: 'DAILY',
        data: [10, 20, 45, 30, 60, 20],
        borderColor: '#2f6df6',
        backgroundColor: 'rgba(47, 109, 246, 0.2)',
        fill: false,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: '#2f6df6',
        pointBorderColor: '#2f6df6',
      },
      {
        label: 'TECTOR',
        data: [30, 10, 40, 20, 10, 35],
        borderColor: '#5bcddc',
        backgroundColor: 'rgba(91, 205, 220, 0.2)',
        fill: false,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: '#5bcddc',
        pointBorderColor: '#5bcddc',
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            family: 'Poppins',
            size: 12,
            weight: 'bold',
          },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Poppins',
            size: 11,
            weight: 'bold',
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Poppins',
            size: 11,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        border: {
          display: false,
        },
      },
    },
  };

  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Instagram', 'Facebook', 'Twitter', 'Youtube', 'TikTok'],
    datasets: [
      {
        data: [30, 20, 25, 15, 10],
        backgroundColor: ['#2563eb', '#4a9cce', '#1e3a8a', '#47a4c4', '#7fe0db'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public stackedBarChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Sul', 'Nordeste', 'Norte', 'Sudeste', 'Centro'],
    datasets: [
      {
        data: [10, 12, 15, 20, 10],
        label: 'Sway',
        backgroundColor: '#7fe0db',
        borderWidth: 0,
      },
      {
        data: [5, 8, 10, 15, 15],
        label: 'Tector',
        backgroundColor: '#4a9cce',
        borderWidth: 0,
      },
      {
        data: [2, 5, 5, 10, 12],
        label: 'Daily',
        backgroundColor: '#204873',
        borderWidth: 0,
      },
    ],
  };

  public stackedBarChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['JAN', 'FEV', 'MAR'],
    datasets: [
      {
        data: [45, 60, 80],
        backgroundColor: ['#4a9cce', '#204873', '#2563eb'],
        borderWidth: 0,
        borderRadius: 2,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: '#333',
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  public radarChartData: ChartConfiguration<'radar'>['data'] = {
    labels: ['Engajamento', 'Cliques', 'Sessões', 'Novos', 'Retorno'],
    datasets: [
      {
        data: [65, 59, 90, 81, 56],
        label: 'Mês Atual',
        backgroundColor: 'rgba(59, 130, 246, 0.4)',
        borderColor: '#3b82f6',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
      {
        data: [45, 60, 50, 70, 50],
        label: 'Mês Anterior',
        backgroundColor: 'rgba(30, 58, 138, 0.6)',
        borderColor: '#1e3a8a',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },

      {
        data: [80, 75, 95, 90, 85],
        label: 'Objetivo',
        backgroundColor: 'rgba(34, 197, 94, 0.3)',
        borderColor: '#22c55e',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
        pointLabels: {
          display: false,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        beginAtZero: true,
      },
    },
  };
  public areaChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [
      {
        data: [10, 25, 18, 28, 22, 35, 30],
        label: 'Conversão A',
        backgroundColor: 'rgba(127, 224, 219, 0.7)',
        borderColor: 'transparent',
        pointRadius: 0,
        fill: true,
        tension: 0.4,
      },
      {
        data: [5, 10, 8, 15, 12, 20, 18],
        label: 'Conversão B',
        backgroundColor: 'rgba(74, 156, 206, 0.7)',
        borderColor: 'transparent',
        pointRadius: 0,
        fill: true,
        tension: 0.4,
      },
      {
        data: [3, 8, 5, 12, 10, 15, 12],
        label: 'Conversão C',
        backgroundColor: 'rgba(32, 72, 115, 0.7)',
        borderColor: 'transparent',
        pointRadius: 0,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  public areaChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };
}
