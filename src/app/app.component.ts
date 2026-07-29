import { Component, HostListener, signal } from '@angular/core';

interface SkillGroup {
  title: string;
  items: string[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
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

  readonly profile = {
    name: 'Oluwafemi Adegbesan',
    shortName: 'OA',
    title: 'Software Engineer',
    phone: '07362301445',
    phoneHref: 'tel:+447362301445',
    email: 'femiadegbesan2000@yahoo.com',
    emailHref: 'mailto:femiadegbesan2000@yahoo.com',
    linkedIn: 'https://www.linkedin.com/in/oluwafemi-adegbesan',
    github: 'https://github.com/femiadegbesan',
    location: 'United Kingdom',
    eligibility: 'Eligible to work in the UK — no sponsorship required'
  };

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Languages & Frameworks',
      items: ['C#', '.NET', 'ASP.NET Core', 'Angular', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Frontend',
      items: ['Angular (2+ years)', 'HTML5', 'CSS3', 'React', 'Responsive Design', 'REST API Integration']
    },
    {
      title: 'Backend',
      items: ['REST APIs', 'Web APIs', 'Microservices', 'Distributed Systems']
    },
    {
      title: 'Cloud & DevOps',
      items: ['Microsoft Azure', 'Azure App Services', 'Azure Service Bus', 'Docker', 'GitHub Actions', 'Azure DevOps']
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'Azure SQL', 'PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'Messaging & Monitoring',
      items: ['RabbitMQ', 'Azure Service Bus', 'Datadog', 'SigNoz', 'Kibana', 'Sentry']
    }
  ];

  readonly practices = [
    'SOLID',
    'Clean Architecture',
    'Domain-Driven Design',
    'Agile / Scrum',
    'Unit Testing',
    'TDD'
  ];

  readonly experiences: Experience[] = [
    {
      role: 'Engineering Manager',
      company: 'Flutterwave Technologies',
      period: 'Dec 2023 – Present',
      highlights: [
        'Lead a squad of 8+ engineers delivering mission-critical payment rails and commercial financial applications.',
        'Own financial APIs end-to-end with strict SLAs/SLOs, sustaining 99.99% uptime on high-throughput production services.',
        'Directed crypto and stablecoin payment channels for low-cost borderless settlements.',
        'Partnered on Nuvion multi-currency FX features so enterprises can hold, exchange, and transact in local fiat.',
        'Standardized monitoring and distributed tracing with SigNoz, cutting MTTD for microservice bottlenecks.'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'Flutterwave Technologies',
      period: 'Jun 2022 – Dec 2023',
      highlights: [
        'Delivered multi-currency and localized payment flows across Anglophone and Francophone African markets.',
        'Engineered virtual and physical card issuance systems with white-label ledger processing for enterprise clients.',
        'Built bill-payment infrastructure for merchants and aggregators handling utility, airtime, and recurring billing.',
        'Implemented real-time telemetry with Datadog and SigNoz to improve MTTR and platform health reporting.',
        'Mentored engineers through code reviews, pair programming, and workshops on TDD and .NET Core performance.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Flutterwave Technologies',
      period: 'Feb 2019 – Jun 2022',
      highlights: [
        'Built scalable C# / .NET Core backends for high-concurrency payment processing and financial integrations.',
        'Reduced API response times by 90% via query optimization, async processing, and caching.',
        'Led event-driven patterns with RabbitMQ and Azure Service Bus across services.',
        'Engineered Angular dashboards and portals for real-time transaction monitoring and support workflows.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'GNL Systems',
      period: '2012 – 2019',
      highlights: [
        'Architected enterprise microservices with Java & Spring for high-volume daily transactions.',
        'Built Angular SPAs that improved cross-browser usability and frontend render times.',
        'Designed high-throughput REST APIs connecting legacy enterprise systems.',
        'Cut report generation latency by 70% through SQL and caching optimisation.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'GNL Systems',
      period: '2011 – 2012',
      highlights: [
        'Built responsive client interfaces with JavaScript and AngularJS.',
        'Translated complex business needs into technical specs and interactive product demos.',
        'Worked directly with stakeholders to scope deliverables and accelerate client sign-off.'
      ]
    }
  ];

  readonly projects: Project[] = [
    {
      number: '01',
      title: 'Financial Transaction Platform',
      description:
        'Full-stack fintech solution with an Angular frontend and .NET backend services — responsive UI for transaction monitoring and reporting, backed by real-time APIs for financial data processing.',
      tags: ['Angular', 'C#', '.NET', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85',
      tone: 'mint'
    },
    {
      number: '02',
      title: 'Real-Time Data Processing System',
      description:
        'Distributed microservices built for high-volume financial transactions, using event-driven architecture for scalability, reliability, and resilient cross-service communication.',
      tags: ['Microservices', 'RabbitMQ', 'Azure Service Bus', '.NET'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
      tone: 'sand'
    },
    {
      number: '03',
      title: 'API Gateway & Integration Platform',
      description:
        'Scalable API services connecting multiple third-party systems — improving interoperability, settlement flows, and overall system performance across commercial payment operations.',
      tags: ['Web APIs', 'Azure', 'Integrations', 'SQL'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
      tone: 'lavender'
    }
  ];

  readonly education = [
    {
      degree: 'Postgraduate Degree in Computer Science',
      school: 'University of Pretoria'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Ibadan'
    }
  ];

  readonly certifications = [
    'Microsoft Azure Developer Associate (In Progress)',
    'Microservices Architecture & Distributed Systems',
    'Clean Architecture in .NET'
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
