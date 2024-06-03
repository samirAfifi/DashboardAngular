import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {CompactType, GridsterConfig, GridsterItem, GridType,DisplayGrid} from 'angular-gridster2';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import{ Injectable, Renderer2, RendererFactory2 }from'@angular/core';




@Component({
  selector: 'app-jqwidgets',
  templateUrl: './jqwidgets.component.html',
  styleUrls: ['./jqwidgets.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
 
})
export class JqwidgetsComponent implements AfterViewInit, OnInit {
	options: GridsterConfig;
	dashboard: Array<GridsterItem>;
  
    /////////////////////// jqwidgers
  @ViewChild('grid', { static: false }) grid: jqxGridComponent;
  @ViewChild('myWindow')myWindow: jqxGridComponent;
  @ViewChild('id') id: jqxGridComponent;
  @ViewChild('name') name: jqxGridComponent;
  @ViewChild('address') address: jqxGridComponent;
  @ViewChild('email') email: jqxGridComponent;
  @ViewChild('myGrid') myGrid: jqxGridComponent;
  @ViewChild('editrow') editrow: jqxGridComponent;

  

  columns = [
		{text: 'Id', datafield: 'id'},
		{text: 'Name', datafield: 'name'},
		{text: 'Address', datafield: 'address'},
		{text: 'Email', datafield: 'email'},
    {
      text: 'Edit', datafield: 'Edit', columntype: 'button',
      cellsrenderer: (): string => {
          return 'Edit';
      },
      buttonclick: (row: number): void => {
        console.log( row.valueOf);
      
        // let dataRecord = this.myGrid.getrowdata(this.editrow);
        // this.id.row(dataRecord.id);
        // this.lastname.val(dataRecord.lastname);
        // this.product.val(dataRecord.productname);
        
        // // show the popup window.
        // this.myWindow.position({ x: 68, y: 368 });
        // myWindow.open();
        
    }
    
  },
  {text: 'Delete', datafield: 'Delete', columntype: 'button',
  cellsrenderer: (): string => {
      return 'Delete';
  },}
  
  ];
 
  source = new jqx.dataAdapter({
		localData: [
		  {id: 1, name: 'samir', address:'Manteqah Ath Thamenah Nasr City',email:'samir1@gmail.com' ,},
		  {id: 2, name: 'Helium', address:'major city, town, and transport',email:'Nitrogen@gmail.com'},
		  {id: 3, name: 'Lithium', address:'major city, town, and transport',email:'Helium1@gmail.com'},
		  {id: 4, name: 'Beryllium', address:'major city, town, and transport',email:'Lithium@gmail.com'},
		  {id: 5, name: 'Boron', address:'major city, town, and transport',email:'Beryllium@gmail.com'},
		  {id: 6, name: 'Carbon', address:'major city, town, and transport',email:'Boron@gmail.com'},
		  {id: 7, name: 'Nitrogen', address:'major city, town, and transport',email:'Carbon@gmail.com'},
		  {id: 8, name: 'Nitrogen', address:'major city, town, and transport',email:'Nitrogen@gmail.com'},
		  {id: 9, name: 'Fluorine', address:'major city, town, and transport',email:'Fluorine@gmail.com'},
		  {id: 10, name: 'Neon', address:'major city, town, and transport',email:'Neon@gmail.com'},
		  
		]
	 });
	 
 
  ngAfterViewInit() {
	
  }



  ////////////////////// Gridster
  ngOnInit() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 200,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };


    this.dashboard = [
      
      { cols: 12, rows: 11, y: 12, x: 12 },

    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 12, y: 12, cols: 12, rows: 12});
  }

// slider

  slides: string [] = ['./assets/imgs/doge.jpg', './assets/imgs/cat.jpg', './assets/imgs/laika.jpg' ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
//edit here    
  getNext() {
      this.i = this.i===this.slides.length-1 ? this.i : this.i + 1;
  }


  
  
  
 

}
