import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-migration-offcanvas',
  templateUrl: './migration-offcanvas.component.html',
  styleUrls: ['./migration-offcanvas.component.css']
})
export class MigrationOffcanvasComponent implements OnInit {


  ngOnInit(): void {
      
  }
  progress: number = 0;
  isOffcanvasVisible: boolean = true;
  intervalId: any;

  constructor() {
    this.startMigration();
  }

  startMigration() {
    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1
      } else {
        clearInterval(this.intervalId);
        alert('Migration Process Completed');
        this.isOffcanvasVisible = false;
      }
    }, 100); // Progress updates every 100 milliseconds
  }
 
  toggleOffcanvas() {
    this.isOffcanvasVisible = !this.isOffcanvasVisible;
  }
 

}
