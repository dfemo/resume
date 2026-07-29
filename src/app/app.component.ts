import { Component, HostListener, signal } from '@angular/core';

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  tone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly menuOpen = signal(false);
  readonly currentYear = new Date().getFullYear();

  readonly projects: Project[] = [
    {
      number: '01',
      title: 'Finflow Dashboard',
      description: 'A focused financial workspace that turns complex data into calm, actionable insight.',
      tags: ['Angular', 'TypeScript', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
      url: 'https://github.com/',
      tone: 'mint'
    },
    {
      number: '02',
      title: 'Nomad Travel',
      description: 'A discovery-first travel experience built for curious people planning their next story.',
      tags: ['Angular', 'Firebase', 'Maps API'],
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
      url: 'https://github.com/',
      tone: 'sand'
    },
    {
      number: '03',
      title: 'Pulse Health',
      description: 'A friendly wellness companion that makes healthy habits feel simple and achievable.',
      tags: ['Angular', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
      url: 'https://github.com/',
      tone: 'lavender'
    }
  ];

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:keydown.escape')
  closeMenuOnEscape(): void {
    this.closeMenu();
  }
}
