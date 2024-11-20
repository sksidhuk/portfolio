import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SkillSetsComponent } from '../skill-set/skill-set.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [RouterOutlet, FooterComponent, SkillSetsComponent, SliderComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
    title = 'About Me';
    subheading = 'I am a IT professional who has 8+ years of experince.';
    description = 'I am expertise in Angular, React, CMS, WordPress, HTML, CSS, SCSS, and JavaScript. I have coordinated large-scale projects, leading strong technical teams to meet key business deliverables, always focused on execution of operational excellence. A skilled communicator, I can help others understand complex concepts in a simple and efficient manner, and have introduced strategies that resulted in high production, cost reduction, and revenue growth. People enjoy working with me because of my professional and positive attitude, my collaborative leadership style, and my ability to communicate with all levels of the organization.';
    keypoints = [
        {
            keypoint_title: 'ABC',
            keypoint_description: 'We are crafting a digital method that subsists life across all mediums.'
        },
        {
            keypoint_title: 'harworking',
            keypoint_description: 'We are crafting a digital method that subsists life across all mediums.'
        },
        {
            keypoint_title: 'harworking',
            keypoint_description: 'We are crafting a digital method that subsists life across all mediums.'
        }
    ]
}
