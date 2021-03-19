import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenicate: boolean = false;
  userRole: string;
  constructor(private router: Router,
              public dialog: MatDialog,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.checkAuthentication();
    this.userRole = localStorage.getItem('role');
  }
  checkAuthentication() {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token) {
      this.isAuthenicate = true;
      console.log(this.isAuthenicate);
    }
  }
  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
    });
  }
  logout() {
    console.log("in logout");
    localStorage.clear();
    this.isAuthenicate = false;
    console.log("before routing");
    this.router.navigate(['dashboard']);
    console.log("after routing");
    this.toastr.success("Logout Successfully", "See you soon!");
    //window.location.reload();
  }
  routeToFavourite() {
    this.router.navigate(['favourite-book']);
  }
}
