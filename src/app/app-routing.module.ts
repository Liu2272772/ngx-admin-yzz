import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// pages
import {TableComponent} from './pages/table/table.page';
import {SmartTableComponent} from "./pages/table/smart-table/smart-table.page";
import {TableDetailComponent} from "./pages/table/detail/detail.page";
import {ChartComponent} from "./pages/chart/chart.page";
import {TabPage} from "./pages/tab/tab.page";
const routes: Routes = [
  {
    path: 'table',
    children: [
      {
        path: 'basic_table',  component: TableComponent
      },
      {
        path: 'table_detail', component: TableDetailComponent
      },
      {path: 'smart_table', component: SmartTableComponent}
    ]
  },
  {
    path: 'chart', component: ChartComponent
  },
  {
    path: 'tab', component: TabPage
  },
  { path: '', redirectTo: 'table/basic_table', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
