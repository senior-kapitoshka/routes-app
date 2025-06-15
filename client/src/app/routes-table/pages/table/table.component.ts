import { Component, OnInit } from '@angular/core';
import { RoutesTableService } from '../../service/routes-table.service';
import { Route } from '../../models/route.interface';


@Component({
  selector: 'app-table',
  standalone:false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  routes: Route[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private routesService: RoutesTableService) {}

  ngOnInit(): void {
    this.routesService.getRoutes().subscribe({
      next: (data) => {
        this.routes = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load routes';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
