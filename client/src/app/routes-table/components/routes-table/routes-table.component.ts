import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Route } from '../../models/route.interface';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-routes-table',
  standalone:false,
  templateUrl: './routes-table.component.html',
  styleUrl: './routes-table.component.css',
})
export class RoutesTableComponent implements OnChanges, AfterViewInit {
  @Input() routes: Route[] = [];
  dataSource = new MatTableDataSource<Route>();
  displayedColumns: string[] = ['address', 'gateway', 'interface'];

  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['routes'] && this.routes) {
      this.dataSource.data = this.routes;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'address':
        case 'gateway':
          return this.ipToNumber(item[property]);
        case 'interface':
          return item[property].toLowerCase();
        default:
          return (item as any)[property];
      }
    };

    this.dataSource.sort = this.sort;
  }


  ipToNumber(ip: string): number {
    return ip.split('.')
    .map(p => parseInt(p))
    .reverse()
    .reduce((acc,val,i) => acc+(val*(256**i)),0);
  }
  
  
   compareIpAddresses(ip1: string, ip2: string): number {
    const num1 = this.ipToNumber(ip1);
    const num2 = this.ipToNumber(ip2);
    return num1 - num2;
  }

  
  
}
