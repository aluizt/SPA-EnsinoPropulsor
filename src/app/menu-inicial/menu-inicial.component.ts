import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToMonitorias(){
    console.log("monitorias");
  }
  goToMecanicaA(){
    this.router.navigate(['monitorias/MECÂNICA A'])
  }
  goToMecanicaB(){
    this.router.navigate(['monitorias/MECÂNICA B'])
  }
  goToEletricidade(){
    this.router.navigate(['monitorias/ELETRICIDADE E MAGNETISMO'])
  }
  goToOndas(){
    this.router.navigate(['monitorias/ONDAS E ÒPTICA'])
  }
  goToPortugues(){
    this.router.navigate(['monitorias/PORTUGUÊS'])
  }
}


