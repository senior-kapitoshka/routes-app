import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "routes",
        pathMatch: "full",
      },
      {
        path: "routes",
        loadChildren: () =>
        import("./routes-table/routes-table.module").then((m) => m.RoutesTableModule),
    
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}