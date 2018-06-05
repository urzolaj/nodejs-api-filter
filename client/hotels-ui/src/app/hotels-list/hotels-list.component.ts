import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  hotelsList: Array<Hotel> = [];

  constructor(public hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.updatedFilters.subscribe(listFromService => {
      this.hotelsList = listFromService;
    });
  }

}
