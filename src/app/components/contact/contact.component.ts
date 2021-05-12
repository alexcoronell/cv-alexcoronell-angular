import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  tittlePage = "Contacto";
  form: FormGroup;

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

  Success:boolean = false;
  ErrorSend:boolean = false;
  urlMail:string = '../../../assets/php/mail.php';

  data = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
     ) {
    this.buildForm();
  }

  ngOnInit(): void {
    
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]]
    })
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const value = this.form.value;
      const optionsMail = {
        method: "POST",
        dataType: "json",
        data: this.form.value
      }
      console.log(value);
      fetch(this.urlMail, optionsMail)
        .then(res => {
          this.Success = true;
          setTimeout(() => {
            this.Success = false;
            this.data.name = '';
            this.data.phone = '';
            this.data.email = '';
            this.data.message = '';
            this.form.markAsUntouched();
          }, 3000);
        })
        .catch(error => {
          this.ErrorSend = true;
          setTimeout(() => {
            this.ErrorSend = false;
          }, 3500);
        })
    }
  }

}


