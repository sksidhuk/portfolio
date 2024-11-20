import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [RouterOutlet, FooterComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    title = 'Contact';
}