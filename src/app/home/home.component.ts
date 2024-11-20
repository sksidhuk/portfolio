import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterOutlet, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    title = 'Front Page';
}
