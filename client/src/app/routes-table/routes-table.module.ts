import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesTableRoutingModule } from './routes-table-routing.module';
import { TableComponent } from './pages/table/table.component';
import { RoutesTableComponent } from './components/routes-table/routes-table.component';
import {  provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from '../app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    TableComponent,
    RoutesTableComponent 
  ],
  imports: [
    CommonModule,
    RoutesTableRoutingModule,
    MatTableModule,
    MatSortModule
  ],providers: [

    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
    ),]
})
export class RoutesTableModule { }
