import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ];

  selectedRowIndex: number = -1;

  constructor(public dialog: MatDialog) {}

  openPopup(rowIdx: number) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '250px',
      data: { message: `You clicked row ${rowIdx + 1}` },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.selectedRowIndex = -1; // Reset selected row index when popup is closed
    });
  }
}
