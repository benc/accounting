import {Component, NgZone, OnInit} from "@angular/core";
import {environment} from "../environments/environment";

@Component({
  selector: "accounting-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  sidebarSmall = false;

  constructor(private ngZone: NgZone) {
    window.onresize = e => {
      ngZone.run(() => {
        this.calculateSidebar();
      });
    };
  }

  ngOnInit() {
    this.calculateSidebar();
  }

  isDevelopment() {
    return !environment.production;
  }

  toggleSideBar() {
    this.sidebarSmall = !this.sidebarSmall;
  }

  calculateSidebar() {
    this.sidebarSmall = window.innerWidth < 1200;
  }
}
