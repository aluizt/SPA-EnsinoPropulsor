
import { Component, OnInit } from '@angular/core';

import { AreasService } from '../servicos/areas.service';
import {Table} from 'primeng/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({  
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 
  public monitoria:any;
  private areaPesquisa:any;
  private area:any;

  constructor(private service: AreasService,
              private router: Router,
              private route : ActivatedRoute) {
                
              }

  ngOnInit() {
    this.monitoria=this.service.monitoria;
    this.areaPesquisa=this.service.areaPesquisa;
    console.log(this.areaPesquisa);
    if (this.areaPesquisa=="Mecanica A"){
        this.area="MECÂNICA A"
    }else  if (this.areaPesquisa=="Mecanica B"){
               this.area="MECÂNICA B"
    }else  if (this.areaPesquisa=="Eletricidade"){
               this.area="ELETRICIDADE E MAGNETISMO"
    }
    else  if (this.areaPesquisa=="Ondas"){
              this.area="ONDAS E ÒPTICA"
    }else if (this.areaPesquisa=="Portugues"){
              this.area="PORTUGUÊS"
    }
  }

  goToSalvar(){
  
    this.service.update(this.monitoria);
    console.log(this.area);
    
    setTimeout(() => {
      this.router.navigate(['monitorias/'+this.area])
   }, 1500);

    

  }
  goToVoltar(){
    this.router.navigate(['monitorias/'+this.area])
  }

}
