import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  titlePage = "Estudios";
  studiesList:object[] = [
      {
      index: 5,
      titleStudio: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
      institution: "Servicio Nacional de Aprendizaje SENA",
      place: "Colombia",
      start: "2019",
      end: "En curso"
    },
    {
      index: 4,
      titleStudio: "Bachiller Académico",
      institution: "ICFES",
      place: "Colombia",
      start: "2016",
      end: "2016"
    },
    {
      index: 3,
      titleStudio: "Profesional en Comunicación Social",
      institution: "Universidad Bolivariana de Venezuela",
      place: "Venezuela",
      start: "2008",
      end: "2013"
    },
    {
      index: 2,
      titleStudio: "Tecnólogo en Producción de Medios",
      institution: "Universidad Bolivariana de Venezuela",
      place: "Venezuela",
      start: "2008",
      end: "2011"
    },
    {
      index: 1,
      titleStudio: "Bachiller en Ciencias, C. A.",
      institution: "Colegio Ciudad Fajardo de Guatire",
      place: "Venezuela",
      start: "1990",
      end: "1995"
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
