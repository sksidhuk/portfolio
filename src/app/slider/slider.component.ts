import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-slider',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.css'
})
export class SliderComponent {
    title = 'Slider';
}
