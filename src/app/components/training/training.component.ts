import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  titlePage = "Formación";
  trainingList:object[] = [
    {
    index: 43,
    titleTraining: "Desarrollador Javascript",
    titleTraining2: "Conviértete en Desarrollador Javascript",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedinlearning-desarrolladorjavaScript.jpg"
  },
  {
    index: 42,
    titleTraining: "D3.js avanzado: Visualización de datos en tiempo real",
    titleTraining2: "D3.js avanzado: Visualización de datos en tiempo real",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-d3jsavanzado-visualizaciondatostiemporeal.jpg"
  },
  {
    index: 41,
    titleTraining: "jQuery Esencial",
    titleTraining2: "jQuery Esencial",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-d3jsavanzado-visualizaciondatostiemporeal.jpg"
  },
  {
    index: 40,
    titleTraining: "JavaScript avanzado: Buenas prácticas",
    titleTraining2: "JavaScript avanzado: Buenas prácticas",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-javascriptavanzado-buenaspracticas.jpg"
  },
  {
    index: 39,
    titleTraining: "JavaScript avanzado: Expresiones regulares",
    titleTraining2: "JavaScript avanzado: Expresiones regulares",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-javascriptavanzado-expresionesregulares.jpg"
  },
  {
    index: 38,
    titleTraining: "Novedades JavaScript versión ES6",
    titleTraining2: "Novedades JavaScript versión ES6",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-novedadesjavascriptes6.jpeg"
  },
  {
    index: 37,
    titleTraining: "JavaScript: Programación Orientada a Objetos",
    titleTraining2: "JavaScript: Programación Orientada a Objetos",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-javaScriptprogramacionorientadaobjetos.jpeg"
  },
  {
    index: 36,
    titleTraining: "JavaScript esencial",
    titleTraining2: "JavaScript esencial",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-javascriptesencial.jpeg"
  },
  {
    index: 35,
    titleTraining: "Fundamentos esenciales de la programación",
    titleTraining2: "Fundamentos esenciales de la programación",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-fundamentosesencialesprogramacion.jpeg"
  },
  {
    index: 34,
    titleTraining: "Fundamentos del desarrollo web: Tecnologías web",
    titleTraining2: "Fundamentos del desarrollo web: Tecnologías web",
    institution: "Linkedin Learning",
    end: "2020",
    imagePath: "../../../assets/img/documents/linkedInlearning-fundamentosdesarrollowebtecnologiasweb.jpeg"
  },
  {
    index: 33,
    titleTraining: "Pug desde cero",
    titleTraining2: "Pug desde cero",
    institution: "EDTeam",
    end: "2020",
    imagePath: "../../../assets/img/documents/edteam-pugdesdecero.jpg"
  },
  {
    index: 32,
    titleTraining: "Fundamentos de Angular",
    titleTraining2: "Fundamentos de Angular",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-fundamentosangular.jpeg"
  },
  {
    index: 31,
    titleTraining: "ReactJs - Introducción desde cero",
    titleTraining2: "ReactJs - Curso de Introducción desde cero y primeros pasos",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-reactjs-introduccion.jpeg"
  },
  {
    index: 30,
    titleTraining: "Angular 8 - Introducción desde cero",
    titleTraining2: "Angular 8 - Curso de Introducción desde cero y primeros pasos",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-angular8-introduccion.jpeg"
  },
  {
    index: 29,
    titleTraining: "VueJs - Introducción desde cero",
    titleTraining2: "VueJs - Curso de Introducción desde cero y primeros pasos",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-vuejs-introduccion.jpeg"
  },
  {
    index: 28,
    titleTraining: "JavaScript ES6",
    titleTraining2: "JavaScript ES6",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-javascriptes6.jpeg"
  },
  {
    index: 27,
    titleTraining: "Introducción a la Programación con Javascript",
    titleTraining2: "Introducción a la Programación con Javascript",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-introduccionprogramaciónjavascript.jpeg"
  },
  {
    index: 26,
    titleTraining: "Animaciones y efectos interactivos con CSS3",
    titleTraining2: "Aprender a crear animaciones y efectos interactivos con CSS3",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-aprenderacrearanimacionesyefectosinteractivosconcss3.jpeg"
  },
  {
    index: 25,
    titleTraining: "CSS Básico + Flexbox + 3 proyectos",
    titleTraining2: "CSS Básico + Flexbox + 3 proyectos",
    institution: "Udemy",
    end: "2020",
    imagePath: "../../../assets/img/documents/udemy-cssbasicoflexbox3proyectos.jpeg"
  },
  {
    index: 24,
    titleTraining: "Finder",
    titleTraining2: "Finder",
    institution: "Fundación Carlos Slim",
    end: "2020",
    imagePath: "../../../assets/img/documents/fundacioncarlosslim-finder.jpeg"
  },
  {
    index: 23,
    titleTraining: "Curador de Datos",
    titleTraining2: "Curador de Datos",
    institution: "Fundación Carlos Slim",
    end: "2020",
    imagePath: "../../../assets/img/documents/fundacioncarlosslim-curadordatos.jpeg"
  },
  {
    index: 22,
    titleTraining: "Master en Javascript (JQuery, Angular 8, NodeJS)",
    titleTraining2: "Master en Javascript (JQuery, Angular 8, NodeJS)",
    institution: "Udemy",
    end: "2019",
    imagePath: "../../../assets/img/documents/udemy-masterjavascript.jpeg"
  },
  {
    index: 21,
    titleTraining: "Introducción a los Frameworks de desarrollo para PHP",
    titleTraining2: "Introducción teórica a los Frameworks de desarrollo para PHP",
    institution: "Udemy",
    end: "2019",
    imagePath: "../../../assets/img/documents/udemy-introduccionteoricaalosframeworksdedesarrolloparaphp.jpeg"
  },
  {
    index: 20,
    titleTraining: "Lenguaje de Programación C++ (Nivel II)",
    titleTraining2: "Módulos, Estructura de Almacenamiento y POO utilizando el Lenguaje de Programación C++ (Nivel II)",
    institution: "SENA",
    end: "2019",
    imagePath: "../../../assets/img/documents/sena-modulosalmacenamientopooencplusplusnovel2.jpeg"
  },
  {
    index: 19,
    titleTraining: "Introducción a Git & Github",
    titleTraining2: "Introducción a Git & Github",
    institution: "Udemy",
    end: "2019",
    imagePath: "../../../assets/img/documents/udemy-introducciongitygithub.jpeg"
  },
  {
    index: 18,
    titleTraining: "Lenguaje de Programación C++ (Nivel I)",
    titleTraining2: "Estructura del Lenguaje de Programación C++ (Nivel I)",
    institution: "SENA",
    end: "2019",
    imagePath: "../../../assets/img/documents/sena-estructuralenguajeprogramacioncplusplusnivel1.jpeg"
  },
  {
    index: 17,
    titleTraining: "Conceptualización del Lenguaje de Programación C++",
    titleTraining2: "Conceptualización del Lenguaje de Programación C++",
    institution: "SENA",
    end: "2019",
    imagePath: "../../../assets/img/documents/sena-conceptualizacionlenguajeprogramaciónCplusplus.jpeg"
  },
  {
    index: 16,
    titleTraining: "Desarrollo Web con PHP",
    titleTraining2: "Desarrollo Web con PHP",
    institution: "SENA",
    end: "2019",
    imagePath: "../../../assets/img/documents/sena-desarrollowebconphp.jpeg"
  },
  {
    index: 15,
    titleTraining: "Curso profesional de Git y GitHub",
    titleTraining2: "Curso profesional de Git y GitHub",
    institution: "Platzi – Apps.co",
    end: "2019",
    imagePath: "../../../assets/img/documents/platzi-cursoprofesionalgitgithub.jpeg"
  },
  {
    index: 14,
    titleTraining: "Metodología Programación de Sistemas Informáticos",
    titleTraining2: "Metodología de la Programación de Sistemas Informáticos",
    institution: "SENA",
    end: "2019",
    imagePath: "../../../assets/img/documents/sena-metodologiaprogramacionsistemasinformaticos.jpeg"
  },
  {
    index: 13,
    titleTraining: "Bases de Datos – Generalidades y Sistemas de Gestión",
    titleTraining2: "Bases de Datos – Generalidades y Sistemas de Gestión",
    institution: "SENA",
    end: "2019",
    imagePath: "../../../assets/img/documents/sena-basesdatos-generalidadessistemasgestion.jpeg"
  },
  {
    index: 12,
    titleTraining: "Informática Básica",
    titleTraining2: "Informática Básica",
    institution: "Instituto Universitario Digital de Antioquia",
    end: "2019",
    imagePath: "../../../assets/img/documents/iudigitalantioquia-informaticabasica.jpeg"
  },
  {
    index: 11,
    titleTraining: "Gestión de la Seguridad Informática",
    titleTraining2: "Gestión de la Seguridad Informática",
    institution: "SENA",
    end: "2019",
    imagePath: "../../../assets/img/documents/sena-gestionseguridadinformatica.jpeg"
  },
  {
    index: 10,
    titleTraining: "Introducción a la Seguridad Informática",
    titleTraining2: "Introducción a la Seguridad Informática",
    institution: "Backtrack Academy",
    end: "2019",
    imagePath: "../../../assets/img/documents/backtrackacademy-introduccionseguridadinformatica.jpeg"
  },
  {
    index: 9,
    titleTraining: "Técnico en Seguridad Informática",
    titleTraining2: "Técnico en Seguridad Informática (Análisis de Riesgos)",
    institution: "Fundación Carlos Slim",
    end: "2019",
    imagePath: "../../../assets/img/documents/fundacioncarlosslim-tecnicoseguridadinformatica.jpeg"
  },
  {
    index: 8,
    titleTraining: "Curso de Programación Básica",
    titleTraining2: "Curso de Programación Básica",
    institution: "Platzi – Apps.co",
    end: "2018",
    imagePath: "../../../assets/img/documents/platzi-cursoprogramacionbasica.jpeg"
  },
  {
    index: 7,
    titleTraining: "Técnico en Informática",
    titleTraining2: "Técnico en Informática",
    institution: "Fundación Carlos Slim",
    end: "2018",
    imagePath: "../../../assets/img/documents/fundacioncarlosslim-tecnicoeninformatica.jpeg"
  },
  {
    index: 6,
    titleTraining: "Curso de Habilidades de Marketing Personal",
    titleTraining2: "Curso de Habilidades de Marketing Personal",
    institution: "Confenalco Antioquia",
    end: "2018",
    imagePath: "../../../assets/img/no-image.png"
  },
  {
    index: 5,
    titleTraining: "Introducción al Desarrollo Web Parte 2",
    titleTraining2: "Curso de Introducción al Desarrollo Web (Parte 2/2) – Google Actívate",
    institution: "Instituto de Economía Internacional – Universidad de Alicante",
    end: "2017",
    imagePath: "../../../assets/img/documents/google-introducciondesarrollowebsegundaparte.jpeg"
  },
  {
    index: 4,
    titleTraining: "Introducción al Desarrollo Web Parte 1",
    titleTraining2: "Curso de Introducción al Desarrollo Web (Parte 1/2) – Google Actívate",
    institution: "Instituto de Economía Internacional – Universidad de Alicante",
    end: "2017",
    imagePath: "../../../assets/img/documents/google-introducciondesarrollowebprimeraparte.jpeg"
  },
  {
    index: 3,
    titleTraining: "Soporte Aba (Internet Banda Ancha)",
    titleTraining2: "Soporte Aba (Internet Banda Ancha)",
    institution: "SEAtento – CANTVNA",
    end: "2010",
    imagePath: "../../../assets/img/no-image.png"
  },
  {
    index: 2,
    titleTraining: "Técnico en Informática",
    titleTraining2: "Técnico en Informática (Windows Server, Office, Redes, Programación VisualBasic",
    institution: "Siefer Asesores",
    end: "2004",
    imagePath: "../../../assets/img/no-image.png"
  },
  {
    index: 1,
    titleTraining: "Operador de Micros",
    titleTraining2: "Operador de Micros MS-DOS 5.0 - WorStar – Lotus 123 – DBase III Plus",
    institution: "Academia Villa Heroica",
    end: "1993",
    imagePath: "../../../assets/img/no-image.png"
  }
]

public loadDataStudies(item) {
  let currentInstitution = item.institution;
  let currentPlace = item.place;
  let currentStart = item.start;
  let currentEnd = item.end;

  let institutionName = document.getElementById('institutionName');
  institutionName.innerHTML = currentInstitution;

  let period = document.getElementById('period');
  let periodText = `Desde: ${currentStart} - Hasta: ${currentEnd}`;
  period.innerHTML = periodText;

  let placeName = document.getElementById('placeName');
  placeName.innerHTML = item.place;
}
  constructor() { }

  ngOnInit(): void {
  }

}
