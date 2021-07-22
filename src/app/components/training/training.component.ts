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
      index: 129,
      titleTraining: "Universidad Javascript",
      titleTraining2: "Universidad Javascript - De Cero a Master en Javascript",
      institution: "Udemy",
      end: "2021",
      imagePath: "../../../assets/img/documents/udemyuniversidadjavascript2021deceroamaster.jpeg"
    },
    {
      index: 128,
      titleTraining: "React desde cero",
      titleTraining2: "React desde cero",
      institution: "Udemy",
      end: "2021",
      imagePath: "../../../assets/img/documents/udemyreactdesdecero.jpg"
    },
    {
      index: 127,
      titleTraining: "Lógica de programación",
      titleTraining2: "Lógica de programación: Aprende a programar en cualquier lenguaje",
      institution: "Udemy",
      end: "2021",
      imagePath: "../../../assets/img/documents/udemylogicadeprogramacion.jpeg"
    },
    {
      index: 126,
      titleTraining: "Python: Mejora tu desarrollo",
      titleTraining2: "Python: Mejora tu desarrollo",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningpythonmejoratudesarrollo.jpeg"
    },
    {
      index: 125,
      titleTraining: "Python avanzado",
      titleTraining2: "Python avanzado",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningpythonavanzado.jpeg"
    },
    {
      index: 124,
      titleTraining: "Python esencial",
      titleTraining2: "Python esencial",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningpythonesencial.jpeg"
    },
    {
      index: 123,
      titleTraining: "Docker esencial",
      titleTraining2: "Docker esencial",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningdockeresencial.jpeg"
    },
    {
      index: 122,
      titleTraining: "Amplía tus conocimientos como desarrollador front-end",
      titleTraining2: "Amplía tus conocimientos como desarrollador front-end: HTML y CSS",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningampliatusconocimientoscomodesarrolladorwebfrontendhtmlycss.jpeg"
    },
    {
      index: 121,
      titleTraining: "CSS práctico: Maquetación de landing page",
      titleTraining2: "CSS práctico: Maquetación de landing page",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningCSSpracticomaquetaciondelandingpage.jpeg"
    },
    {
      index: 120,
      titleTraining: "CSS3: Animación, transformaciones y transiciones",
      titleTraining2: "CSS3: Animación, transformaciones y transiciones",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningCSS3animaciontransformacionesytransiciones.jpeg"
    },
    {
      index: 119,
      titleTraining: "HTML5 y CSS3 práctico: Formularios de login y registro",
      titleTraining2: "HTML5 y CSS3 práctico: Formularios de login y registro",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearninghtml5ycss3practicoformulariosdeloginyregistro.jpeg"
    },
    {
      index: 118,
      titleTraining: "HTML5: Animación e interactividad con canvas",
      titleTraining2: "HTML5: Animación e interactividad con canvas",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearninghtml5animacioneinteractividadconcanvas.jpeg"
    },
    {
      index: 117,
      titleTraining: "HTML5 práctico: Agenda",
      titleTraining2: "HTML5 práctico: Agenda",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearninghtml5practicoagenda.jpeg"
    },
    {
      index: 116,
      titleTraining: "HTML5 práctico: Visualización de datos",
      titleTraining2: "HTML5 práctico: Visualización de datos",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearninghtml5practicovisualizaciondedatos.jpeg"
    },
    {
      index: 115,
      titleTraining: "HTML5 práctico: Scroll y presentación de contenidos",
      titleTraining2: "HTML5 práctico: Scroll y presentación de contenidos",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearninghtml5practicoscrollypresentaciondecontenidos.jpeg"
    },
    {
      index: 114,
      titleTraining: "Conviértete en desarrollador WordPress",
      titleTraining2: "Conviértete en desarrollador WordPress",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningconvierteteendesarrolladorwordpress.jpeg"
    },
    {
      index: 113,
      titleTraining: "WordPress: 25 plugins imprescindibles",
      titleTraining2: "WordPress: 25 plugins imprescindibles",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningwordpress25pluginsimprescindibles.jpeg"
    },
    {
      index: 112,
      titleTraining: "WordPress práctico: Sitios Multilingües",
      titleTraining2: "WordPress práctico: Sitios Multilingües",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningwordpresspracticositiosmultilingues.jpeg"
    },
    {
      index: 111,
      titleTraining: "WordPress práctico: SEO",
      titleTraining2: "WordPress práctico: SEO",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningwordpressavanzadoseo.jpeg"
    },
    {
      index: 110,
      titleTraining: "WordPress: Seguridad",
      titleTraining2: "WordPress: Seguridad",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningwordpressseguridad.jpeg"
    },
    {
      index: 109,
      titleTraining: "WordPress con Sass y Gulp",
      titleTraining2: "WordPress con Sass y Gulp",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningwordpressconsassygulp.jpeg"
    },
    {
      index: 108,
      titleTraining: "jQuery para Diseñadores",
      titleTraining2: "jQuery para Diseñadores",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningsqlserver2016basesdedatosenlapractica.jpeg"
    },
    {
      index: 107,
      titleTraining: "SQL Server: Desarrollo de Bases de Datos",
      titleTraining2: "SQL Server: Desarrollo de Bases de Datos",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedinlearningsqlserver2016desarrollodebasesdedatos.jpeg"
    },
    {
      index: 106,
      titleTraining: "SQL Server: Bases de Datos en la práctica",
      titleTraining2: "SQL Server: Bases de Datos en la práctica",
      institution: "Linkedin Learning",
      end: "2021",
      imagePath: "../../../assets/img/documents/linkedInlearningjqueryparadisenadores.jpeg"
    },
    {
      index: 105,
      titleTraining: "WordPress Catalogo con WooCommerce",
      titleTraining2: "WordPress Catalogo con WooCommerce",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningwordpresscatalogoconwoocommerce.jpeg"
    },
    {
      index: 104,
      titleTraining: "Fundamentos del comercio electronico WooCommerce en WordPress",
      titleTraining2: "Fundamentos del comercio electronico WooCommerce en WordPress",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningfundamentosdelcomercioelectronicowoocommerceenwordPress.jpeg"
    },
    {
      index: 103,
      titleTraining: "WordPress Práctico: Creación Avanzada de Temas",
      titleTraining2: "WordPress Práctico: Creación Avanzada de Temas",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningwordPresspracticocreacionavanzadadetemas.jpeg"
    },
    {
      index: 102,
      titleTraining: "WordPress Práctico: Creación Básica de Temas",
      titleTraining2: "WordPress Práctico: Creación Básica de Temas",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningwordPresspracticocreacionbasicadetemas.jpeg"
    },
    {
      index: 101,
      titleTraining: "WordPress 5 esencial",
      titleTraining2: "WordPress 5 esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningwordPress5esencial.jpeg"
    },
    {
      index: 100,
      titleTraining: "WordPress 4 esencial",
      titleTraining2: "WordPress 4 esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningwordPress4esencial.jpeg"
    },
    {
      index: 99,
      titleTraining: "Fundamentos de los CMS",
      titleTraining2: "Fundamentos de los CMS",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningfundamentosdeloscms.jpeg"
    },
    {
      index: 98,
      titleTraining: "Desarrollos Web y de Aplicaciones Móviles",
      titleTraining2: "Desarrollos Web y de Aplicaciones Móviles en entornos Front-end",
      institution: "University Everis - Sena",
      end: "2020",
      imagePath: "../../../assets/img/documents/senaeverisdesarrollowebydeaplicacionesmovilesenentornosfrontend.jpeg"
    },
    {
      index: 97,
      titleTraining: "Aplicación de Metodologías Devops",
      titleTraining2: "Aplicación de Metodologías Devops para el Desarrollo de Software",
      institution: "University Everis - Sena",
      end: "2020",
      imagePath: "../../../assets/img/documents/senaeverisaplicacióndemetodologíasdevopsparaeldesarrollodecoftware.jpeg"
    },
    {
      index: 96,
      titleTraining: "Domina CSS",
      titleTraining2: "Domina CSS",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningdominacss.jpeg"
    },
    {
      index: 95,
      titleTraining: "CSS avanzado: 12 trucos",
      titleTraining2: "CSS avanzado: 12 trucos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcssavanzado12trucos.jpeg"
    },
    {
      index: 94,
      titleTraining: "CSS: Diseño web responsive",
      titleTraining2: "CSS: Diseño web responsive",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcsscisenowebresponsive.jpeg"
    },
    {
      index: 93,
      titleTraining: "CSS: Degradados",
      titleTraining2: "CSS: Degradados",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcssdegradados.jpeg"
    },
    {
      index: 92,
      titleTraining: "CSS: 50 trucos",
      titleTraining2: "CSS: 50 trucos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcss50trucos.jpeg"
    },
    {
      index: 91,
      titleTraining: "Conviértete en desarrollador PHP",
      titleTraining2: "Conviértete en desarrollador PHP",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedinlearningconvierteteendesarrolladorphp.jpeg"
    },
    {
      index: 90,
      titleTraining: "PHP: Frameworks MVC para aplicaciones web",
      titleTraining2: "PHP: Frameworks MVC para aplicaciones web",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningphpframeworksmvcparaaplicacionesweb.jpeg"
    },
    {
      index: 89,
      titleTraining: "Pensamiento Computacional",
      titleTraining2: "Pensamiento Computacional",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningpensamientocomputacional.jpeg"
    },
    {
      index: 88,
      titleTraining: "PHP: Gestión de datos",
      titleTraining2: "PHP: Gestión de datos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedinlearningphpysqlestiondedatos.jpeg"
    },
    {
      index: 87,
      titleTraining: "PHP: Seguridad",
      titleTraining2: "PHP: Seguridad",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedinlearningphpseguridad.jpeg"
    },
    {
      index: 86,
      titleTraining: "Diseño de interfaz (UI) esencial",
      titleTraining2: "Diseño de interfaz (UI) esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearning-disenodeinterfazuiesencial.jpeg"
    },
    {
      index: 85,
      titleTraining: "Creación documentos PDF en PHP",
      titleTraining2: "Creación documentos PDF en PHP",
      institution: "Udemy",
      end: "2020",
      imagePath: "../../../assets/img/documents/udemy-creaciondocumentospdfenphp.jpeg"
    },
    {
      index: 84,
      titleTraining: "Aprende MongoDB: Bases de datos NoSQL",
      titleTraining2: "Aprende MongoDB: Bases de datos NoSQL",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearning-aprendemongodb.jpeg"
    },
    {
      index: 83,
      titleTraining: "Desarrollo web front-end esencial",
      titleTraining2: "Desarrollo web front-end esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningdesarrollowebfrontendesencial.jpeg"
    },
    {
      index: 82,
      titleTraining: "JavaScript Avanzado 1",
      titleTraining2: "JavaScript Avanzado 1",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningjavaScriptavanzado1.jpeg"
    },
    {
      index: 81,
      titleTraining: "NodeJS práctico: Sitio web",
      titleTraining2: "NodeJS práctico: Sitio web",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningnodejspracticositioweb.jpeg"
    },
    {
      index: 80,
      titleTraining: "NodeJS Esencial",
      titleTraining2: "NodeJS Esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningnodejsesencial.jpeg"
    },
    {
      index: 79,
      titleTraining: "Aprende JSON",
      titleTraining2: "Aprende JSON",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearning-aprendejson.jpeg"
    },
    {
      index: 78,
      titleTraining: "PHP: CodeIgniter",
      titleTraining2: "PHP: CodeIgniter",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningphpcodeIgniter.jpeg"
    },
    {
      index: 77,
      titleTraining: "Novedades PHP 7",
      titleTraining2: "Novedades PHP 7",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningnovedadesphp7.jpeg"
    },
    {
      index: 76,
      titleTraining: "PHP orientado a objetos",
      titleTraining2: "PHP orientado a objetos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningphporientadoaobjetos.jpeg"
    },
    {
      index: 75,
      titleTraining: "PHP avanzado: Herramientas profesionales",
      titleTraining2: "PHP avanzado: Herramientas profesionales",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningphpavanzadoherramientasprofesionales.jpeg"
    },
    {
      index: 74,
      titleTraining: "Aprende PHP",
      titleTraining2: "Aprende PHP",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningaprendephp.jpeg"
    },
    {
      index: 73,
      titleTraining: "Aprende Visual Studio Code",
      titleTraining2: "Aprende Visual Studio Code",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningaprendephp.jpeg"
    },
    {
      index: 72,
      titleTraining: "Laravel esencial",
      titleTraining2: "Laravel esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearninglaravelesencial.jpeg"
    },
    {
      index: 71,
      titleTraining: "MySQL esencial",
      titleTraining2: "MySQL esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningmysqlesencial.jpeg"
    },
    {
      index: 70,
      titleTraining: "SQL Server 2016: Administración y configuración",
      titleTraining2: "SQL Server 2016: Administración y configuración",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningsqlserver2016administracionyconfiguracion.jpeg"
    },
    {
      index: 69,
      titleTraining: "SQL esencial",
      titleTraining2: "SQL esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningsqlesencial.jpeg"
    },
    {
      index: 68,
      titleTraining: "Aprende diseño de base de datos relacionales",
      titleTraining2: "Aprende diseño de base de datos relacionales",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearning-aprendedisenodebasededatosrelacionales.jpeg"
    },
    {
      index: 67,
      titleTraining: "Fundamentos de la programación: Bases de datos",
      titleTraining2: "Fundamentos de la programación: Bases de datos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningfundamentosdelaprogramacionbasesdedatos.jpeg"
    },
    {
      index: 66,
      titleTraining: "Angular práctico: Aplicación web para gestión deportiva",
      titleTraining2: "Angular práctico: Desarrolla una aplicación web para gestión deportiva",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningangularpracticodesarrollaunaaplicacionwebparagestiondeportiva.jpeg"
    },
    {
      index: 65,
      titleTraining: "Conviértete en desarrollador Angular",
      titleTraining2: "Conviértete en desarrollador Angular",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearning-convierteteendesarrolladorangular.jpeg"
    },
    {
      index: 64,
      titleTraining: "Angular: Trucos",
      titleTraining2: "Angular: Trucos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningangulartrucos.jpeg"
    },
    {
      index: 63,
      titleTraining: "Angular Avanzado",
      titleTraining2: "Angular Avanzado",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningangularavanzado.jpeg"
    },
    {
      index: 62,
      titleTraining: "GitHub para programadores",
      titleTraining2: "GitHub para programadores",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearninggitHubparaprogramadores.jpeg"
    },
    {
      index: 61,
      titleTraining: "Desarrollo full-stack: Configuración de proyectos",
      titleTraining2: "Desarrollo full-stack práctico: Configuración profesional de proyectos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningdesarrollofullstackpracticoconfiguracionprofesionaldeproyectos.jpeg"
    },
    {
      index: 60,
      titleTraining: "Fundamentos del desarrollo web: Full Stack o Front-end",
      titleTraining2: "Fundamentos del desarrollo web: Full Stack o Front-end",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningfundamentosdeldesarrollowebfullstackofrontend.jpeg"
    },
    {
      index: 59,
      titleTraining: "Conviértete en desarrollador web front-end",
      titleTraining2: "Conviértete en desarrollador web front-end",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningconvierteteendesarrolladorwebfrontend.jpeg"
    },
    {
      index: 58,
      titleTraining: "Fundamentos del teletrabajo",
      titleTraining2: "Fundamentos del teletrabajo",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningfundamentosdelteletrabajo.jpeg"
    },
    {
      index: 57,
      titleTraining: "Getting Things Done. Organízate con eficacia",
      titleTraining2: "Getting Things Done. Organízate con eficacia",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearninggettingthingsdone.jpeg"
    },
    {
      index: 56,
      titleTraining: "SCRUM: Roles",
      titleTraining2: "SCRUM: Roles",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningscrum roles.jpeg"
    },
    {
      index: 55,
      titleTraining: "Aprende SCRUM",
      titleTraining2: "Aprende SCRUM",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningaprendeSCRUM.jpeg"
    },
    {
      index: 54,
      titleTraining: "VueJS Esencial",
      titleTraining2: "VueJS Esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningvuejsesencial.jpeg"
    },
    {
      index: 53,
      titleTraining: "Typescript 2 Esencial",
      titleTraining2: "Typescript 2 Esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningtypescript2esencial.jpeg"
    },
    {
      index: 52,
      titleTraining: "Angular Esencial",
      titleTraining2: "Angular Esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningangularesencial.jpeg"
    },
    {
      index: 51,
      titleTraining: "React Esencial",
      titleTraining2: "React Esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningreactesencial.jpeg"
    },
    {
      index: 50,
      titleTraining: "CSS con SASS esencial",
      titleTraining2: "CSS con SASS esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcssconsassesencial.jpeg"
    },
    {
      index: 49,
      titleTraining: "CSS Avanzado",
      titleTraining2: "CSS Avanzado",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcssavanzado.jpeg"
    },
    {
      index: 48,
      titleTraining: "CSS Esencial",
      titleTraining2: "CSS Esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcssconsassesencial.jpeg"
    },
    {
      index: 47,
      titleTraining: "Aprende semántica web",
      titleTraining2: "Aprende semántica web",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearningcssesencial.jpeg"
    },
    {
      index: 46,
      titleTraining: "HTML Avanzado",
      titleTraining2: "HTML Avanzado",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearninghtmlavanzado.jpeg"
    },
    {
      index: 45,
      titleTraining: "HTML Esencial",
      titleTraining2: "HTML Esencial",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearninghtmlesencial.jpeg"
    },
    {
      index: 44,
      titleTraining: "Fundamentos Programación: Diseño orientado a objetos",
      titleTraining2: "Fundamentos de la programación: Diseño orientado a objetos",
      institution: "Linkedin Learning",
      end: "2020",
      imagePath: "../../../assets/img/documents/linkedInlearning-fundamentosprogramaciondisenoorientadoobjetos.jpeg"
    },
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
    imagePath: "../../../assets/img/documents/confenalco-cursohabilidadesmarketingpersonal.jpeg"
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
    institution: "Atento – CANTV",
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
