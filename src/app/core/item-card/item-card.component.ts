import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  itemImage: string;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemWished: boolean;
  itemCarted: boolean;

  constructor() { }

  ngOnInit() {
    this.itemCarted = false;
    this.itemWished = false;
  }

  toggleWishlist(){
    this.itemWished = !this.itemWished;
  }

  toggleCarted(){
    this.itemCarted = !this.itemCarted;
  }

}
