
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Table } from 'primeng/table'; 
import { AreasService } from '../servicos/areas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-monitorias',
  templateUrl: './monitorias.component.html',
  styleUrls: ['./monitorias.component.css']
})

export class MonitoriasComponent implements OnInit {
 
  private lista = new Array<any>();
  private eventosFisica = new Array<any>();
  private monitoriaFisica = new Array<any>();
  public monitoria = new Array<any>();
  private areaTexto: any;
  private areaPesquisa:any;
  private eventos: any;
  private colunas:any[];
  private exibicao=1;
  private id:number;
  

  constructor(private service: AreasService,
              private router: Router,
              private route : ActivatedRoute ) {
                this.route.params.subscribe(res => this.areaTexto=res.area);
              }

  ngOnInit() {
      
      if (this.areaTexto=="MECÂNICA A"){
          this.areaPesquisa="Mecanica A"
          this.id=1;
      }else if (this.areaTexto=="MECÂNICA B"){
                this.areaPesquisa="Mecanica B"
                this.id=1;
      }else if (this.areaTexto=="ELETRICIDADE E MAGNETISMO"){
                this.areaPesquisa="Eletricidade"
                this.id=1;
      }else if (this.areaTexto=="ONDAS E ÒPTICA"){
                this.areaPesquisa="Ondas"
                this.id=1;
      }else if (this.areaTexto=="PORTUGUÊS"){
                this.areaPesquisa="Portugues"
                this.id=2;
      }

      this.service.listar(1).subscribe(
        data =>{
          const resposta = (data as any); // cast para o tupo any
          this.lista = resposta;
          console.log(this.lista);
          for (var j=0; j < this.lista.length; ++j) {
            if (this.lista[j].id == this.id) {
              this.monitoriaFisica=this.lista[j].monitorias;
              this.eventosFisica=this.lista[j].eventos;
              break;
            }
          }
          for(var i=0; i <this.monitoriaFisica.length; ++i){
            if(this.monitoriaFisica[i].descricao == this.areaPesquisa && this.monitoriaFisica[i].campus==1){
              this.monitoria[0]=this.monitoriaFisica[i];
              
              break;
            }
          }    
       
  
        }
      )
      this.colunas = [{field:'data', header:'Data'},
                      {field:'descricao',header:"Descricao"}
                    ];
      this.eventos={"idArea":1,};
  
  
    }
  
    goToEditar(){
      console.log("monitoria ");
      console.log(this.monitoria[0]);
      this.service.setMsg(this.monitoria[0],this.areaPesquisa);

      this.router.navigate(['editar']);     
    }
    goToEditarTarde(){
      this.router.navigate(['editarTarde']);     
    }
    goToEditarVespertino(){
      this.router.navigate(['editarVespertino']);     
    }
    goToEditarNoite(){
      this.router.navigate(['editarNoite']);     
    }

    goToVoltar(){
      this.router.navigate(['menuInicial'])
    }
}

