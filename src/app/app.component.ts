import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { HomeComponent } from "./Components/home/home.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { EducationComponent } from "./Components/education/education.component";
import { ContactComponent } from "./Components/contact/contact.component";
import { ProjectsComponent } from "./Components/projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, EducationComponent, ContactComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-Angular';
}
