import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [RouterOutlet, FooterComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
    title = 'Portfolio';
}
