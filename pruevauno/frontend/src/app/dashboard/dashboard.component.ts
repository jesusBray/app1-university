import { Component, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { DashboardService } from "./dashboard.service";
import { Passenger } from "./passenger";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private unsubscribe: Subject<any> = new Subject<any>();
  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.getPassegers();
    // this.showIcons();
    this.createTables();
  }

  public show: string;
  public totalPassenger: any;
  // public show: boolean = false;
  private displayedColumns: string[] = ['ci', 'nit', 'edad', 'nombre', 'celular', 'apellido_materno', 'apellido_paterno'];
  private dataSource: Passenger[];
  
  public showIcons(){
    if (true) {
      this.show = "hola";
    }
  }

  public createTables(){
    this.service.getPassengers().subscribe((foundDatos) => {
      this.totalPassenger = foundDatos;
    })
  }

  public getPassegers() {
    return this.service.getPassengers()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((foundDat: Passenger[]) => this.dataSource = foundDat);
  }

  datoFound: Passenger[];

  public getPasseger(filterValue: any): void{
    const foundPassenger = this.service.getPassengers().subscribe((resp) => {
      // return resp[2].pasajero_data.nombre

      // for (let index = 0; index < resp.length; index++) {
      //   const element = resp[index];
      //   // const var1 = JSON.stringify(element.pasajero_estado);
      //   if (filterValue[index] == element) {
          
      //     // console.log(element.pasajero_data.nombre);
      //     console.log(element);
          
      //   }

        
      // }
   
      if (resp != null) {
        // var res = this.responseText;
        // var converRes = JSON.parse(resp);
        // alert(converRes[1].id);
    }
      // const resultado = JSON.parse(resp.pasajero_data);

    });
    // this.dataSource = foundPassenger;
    // this.service.getPassenger(filterValue)
    // .pipe(takeUntil(this.unsubscribe))
    // .subscribe((foundDat) => this.dataSource = foundPassenger);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
