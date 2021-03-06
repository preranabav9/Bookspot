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
    localStorage.clear();
    this.isAuthenicate = false;
    this.router.navigate(['dashboard']);
    this.toastr.success("Logout Successfully", "See you soon!");

  }
  routeToViewUser() {
    this.router.navigate(['view-users']);
  }
  routeToFavourite() {
    this.router.navigate(['favourite-book']);
  }
  getUserRole(){
    return (localStorage.getItem('role'));
  }
}
