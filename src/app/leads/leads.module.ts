import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridsComponent } from './leads-listing/leads-grids/leads-grids.component';
import { LeadsToolsComponent } from './leads-listing/leads-tools/leads-tools.component';
import { DownloadPdfComponent } from './leads-listing/leads-tools/download-pdf/download-pdf.component';
import { DownloadExcelComponent } from './leads-listing/leads-tools/download-excel/download-excel.component';



@NgModule({
  declarations: [LeadsListingComponent, LeadsGridsComponent, LeadsToolsComponent, DownloadPdfComponent, DownloadExcelComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
