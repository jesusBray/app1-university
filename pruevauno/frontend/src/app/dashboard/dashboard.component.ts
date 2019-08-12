import { Component, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  }

  displayedColumns: string[] = ['ci', 'nit', 'edad', 'nombre', 'celular', 'apellido_materno', 'apellido_paterno'];
  dataSource: Passenger[];
  
  public getPassegers(){
    return this.service.getPassengers()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((foundDat: Passenger[]) => this.dataSource = foundDat);
  }

  public getPasseger(filterValue: string) {
    console.log(filterValue);
    
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
