import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CanvasTAsk';
  isMigrationStarted: boolean = false;
  startMigration() {
    this.isMigrationStarted = true;
    console.log("Migration started");
    // You can put your migration logic here.
    this.runMigrationProcess();
  }

  runMigrationProcess() {
    // Add your migration logic here.
    // Example:
    setTimeout(() => {
      console.log("Migration in progress...");
    }, 1000);
  }
}
