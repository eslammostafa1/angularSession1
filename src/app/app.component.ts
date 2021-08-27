import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is variable interpolation';

  method(){
    return"this is method "
  }

  isHeader:boolean = false

  MHeaderClasses(){
    return {
      header : this.isHeader,
      header1 : !this.isHeader
    };
  }

  Mstyle(){
    return {
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'green'
    }
 }
    toggleHeader() {
      this.isHeader = !this.isHeader;
    }
 

}
