import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  titlePage = "Experiencias";
  experiencesList:object[] = [
    {
      index: 1,
      business: "Micropoint, S. A. S.",
      position: "Analista de Soporte en Sitio",
      place: "Medellín - Antioquia",
      start: "18/09/2018",
      end: "Actualmente",
      functions: [
        "Servicio Técnico a Impresoras Láser, Computadores de escritorio y portátiles.",
        "Atención al cliente.",
        "Soporte en la implementación del Centro de Servicios Digitales de Sura.",
        "Mesa de ayuda y soporte en sitio en Grupo Uribe",
        "Soporte Totto Antioquia"
      ]
    },
    {
      index: 2,
      business: "Alianza Gráfica S. A. S.",
      position: "Diseñador Gráfico - Soporte Técnico Konica Minolta",
      place: "Medellín - Antioquia",
      start: "01/02/2017",
      end: "23/12/2017",
      functions: [
        "Preparación y montaje de diseños para el proceso de impresión digital.",
        "Manejor de Adobe Illustrator, Adobe InDesign, Adobe Acrobat, Adobe Photoshop, Enfocus PitStop Pro, Kodak Preps 5.3.",
        "Operador de equipos de impresión Konica Minolta Bizhub Press C6000 y Konica Minolta Bizhub Press C1085.",
        "Operador de Controlador Konika Job Centro y Fiery Command Workstation.",
        "Mantenimiento preventivo y correctivo de impresoras Konica Minolta Bizhub Press C6000 y Konica Minolta Bizhub Press C1085."
      ]
    },
    {
      index: 3,
      business: "Gloditec S. A. S.",
      position: "Técnico en Reparación y Mantenimiento de Impresoras",
      place: "Medellín - Antioquia",
      start: "01/03/2016",
      end: "31/01/2017",
      functions: []
    },
    {
      index: 4,
      business: "Inversiones Propc Computer 2011, C. A.",
      position: "Director de Soporte Técnico",
      place: "Caracas - Venezuela",
      start: "2014",
      end: "2016",
      functions: []
    },
    {
      index: 5,
      business: "ATB Constructores, C. A.",
      position: "Coordinador de Sistemas",
      place: "Caracas - Venezuela",
      start: "2011",
      end: "2014",
      functions: []
    },
    {
      index: 6,
      business: "Fundación Ávila TV",
      position: "Practicante - Asistente de Producción",
      place: "Caracas - Venezuela",
      start: "2011",
      end: "2011",
      functions: []
    },
    {
      index: 7,
      business: "Radio Electro Telvis, C. A.",
      position: "Asistente de Sistemas",
      place: "Caracas - Venezuela",
      start: "2002",
      end: "2009",
      functions: []
    },
    {
      index: 8,
      business: "Tecnocorsa, C. A.",
      position: "Técnico en Informática y Sistemas",
      place: "Caracas - Venezuela",
      start: "1998",
      end: "2001",
      functions: []
    },
    {
      index: 9,
      business: "Hydroclima, S. A.",
      position: "Transcriptor de Datos y Asistente de Contabilidad",
      place: "Caracas - Venezuela",
      start: "1997",
      end: "1997",
      functions: []
    }
  ]


public currentIndex:number;
  public loadData(item){
    let currentIndex = item.index;
    let currentBusiness = item.business;
    let currentPosition = item.position;
    let currentStart = item.start;
    let currentEnd = item.end;
    let currentFunctions = item.functions;
    console.log(currentFunctions.length);
    //console.log(currentFunctions);
    let positionName = document.getElementById('positionName');
    positionName.innerHTML = currentPosition;
    let placeName = document.getElementById('placeName');
    placeName.innerHTML = item.place;
    let period = document.getElementById('period');
    let periodText = `Desde: ${currentStart} - Hasta: ${currentEnd}`;
    period.innerHTML = periodText;
    

    let functionPlace = document.getElementById('functionPlace');
    functionPlace.innerHTML = '';
    if (currentFunctions.length > 0) {
      for (let current in currentFunctions) {
        var linew= document.createElement("li");
        var content = document.createTextNode(currentFunctions[current]);
        functionPlace.appendChild(linew);
        linew.appendChild(content);
      }
    } else {
      console.log('No lo imprimas');
    }
    console.log(currentFunctions);
    console.log(item.functions);

    //currentFunctions = [];
    

 } 


  constructor(
  ) { }

  ngOnInit(): void {

  }
}