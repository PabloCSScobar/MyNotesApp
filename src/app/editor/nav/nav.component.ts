import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
declare var $: any;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  barsIcon = faBars;
  signOutIcon = faSignOutAlt;
  username: Observable<any> = null;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getUsername();
  }
  getUsername() {
    this.username = this.auth.getUsername().pipe(
      map( res => res.user)
    )
  }
  logout() {
    this.auth.logout();
    console.log('logout');
  }
  toggleSidebar() {
    $(".sidebar-wrap").toggleClass("d-flex");
    $("#sidebarToggleTop").toggleClass("d-none");
  }

}
