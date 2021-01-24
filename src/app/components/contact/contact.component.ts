import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  tittlePage = "Contacto";

  emailTitle = "Correo Electrónico";
  emailUrl = "mailto:alexcoronell@gmail.com";
  emailUrlTitle = "alexcoronell@gmail.com";
  linkedinTitle = "Linkedin"
  linkedinUrl = "http://linkedin.com/in/alex-coronell/";
  linkedinUrlTitle = "linkedin.com/alex-coronell";
  githubTitle = "Github";
  githubUrlTitle = "github.com/alexcoronell";
  githubUrl = "http://github.com/alexcoronell";
  gitLabTitle = "GitLab";
  gitLabUrlTitle = "gitlab.com/alexcoronell";
  gitLabUrl = "https://gitlab.com/alexcoronell";

  constructor() { }

  ngOnInit(): void {
  }

}
