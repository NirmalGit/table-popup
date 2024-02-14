import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatDialogModule, MatButtonModule],
  declarations: [AppComponent, TableComponent, PopUpComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
