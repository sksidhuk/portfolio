import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/technical-skills.service';

@Component({
    selector: 'app-skill-sets',
    standalone: true,
    imports: [],
    templateUrl: './skill-set.component.html',
    styleUrl: './skill-set.component.css'
})
export class SkillSetsComponent implements OnInit {
    public users: any[] = [];
    skillFirstRows = ['ReactJS', 'Angular', 'javaScript', 'jQuery', 'HTML', 'CMS'];
    skillSecondRows = ['Bootstrap', 'SCSS', 'CSS', 'Typescript', 'javaScript', 'WordPress'];
    skillThirdRows = ['Photoshop', 'Illustrator', 'InDesign', 'Figma', 'SEO', 'Marketing', 'Google Ads'];
    skillFourthRows = ['GIT', 'Monday', 'JIRA', 'Figma', 'Shopify', 'CSS', 'HTML'];


    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        // Fetch data on component initialization
        this.dataService.getData().subscribe((data: any) => {
            console.log(data);
            this.users = data;  // Store data in the users array
        });
    }
}
