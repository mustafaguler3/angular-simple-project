import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TablesHomeComponent } from './tables/tables-home/tables-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"placeholders", loadChildren:() =>
    import("./placeholders/placeholders.module").then(m=>m.PlaceholdersModule)
  },
  {path:"tables", loadChildren:() =>
    import("./tables/tables.module").then(m=>m.TablesModule)
  },
  {path:"",component:HomeComponent},
  {path:"",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
