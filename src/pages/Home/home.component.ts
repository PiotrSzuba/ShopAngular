import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/services/itemService';
import { IItem } from 'src/Types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  public items: IItem[] = [];
  public itemsLoading = true;

  ngOnInit(): void {
    this.getItems();
  }

  private getItems = () => {
    this.itemService.getAllItem().subscribe(res => {
      this.items = res;
      this.itemsLoading = false;
    });
  };
}
