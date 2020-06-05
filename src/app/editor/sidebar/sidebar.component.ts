import { Component, OnInit } from '@angular/core';
import { faPlus, faBook, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  plusIcon = faPlus;
  bookIcon = faBook;
  arrowIcon = faArrowLeft;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    $(".sidebar-wrap").toggleClass("d-flex");
    $(".sidebar-wrap").toggleClass("position-fixed");
    // $(".sidebar").toggleClass("position-relative");
    $("#sidebarToggleTop").toggleClass("d-none");
  }
}
