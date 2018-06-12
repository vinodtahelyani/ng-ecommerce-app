import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }
	@Input() headerColor:string;
	@Input() logo:string;
	imageUrl:string;
	showColor:boolean = false;
  ngOnInit() {
	  if(this.logo === 'orcaso-c') {
		  this.imageUrl = '../../../assets/svg/orcaso-c.svg';
	  } else {
		  this.imageUrl = '../../../assets/svg/g-logo.svg';
	  }
	  console.log(this.headerColor);
	  if(this.headerColor === 'true-blue') {
		  this.showColor = true;
	  }
  }

}
