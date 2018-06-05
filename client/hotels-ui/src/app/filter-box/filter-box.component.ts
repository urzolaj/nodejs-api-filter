import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {

  filterForm: FormGroup;
  starsList = [
    { selected: false, size: []},
    { selected: false, size: new Array(1)},
    { selected: false, size: new Array(2)},
    { selected: false, size: new Array(3)},
    { selected: false, size: new Array(4)},
    { selected: false, size: new Array(5)}
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private hotelService: HotelsService
  ) {}

  ngOnInit() {
    this.registerIcons(['search', 'star']);
    this.filterForm = this.formBuilder.group({
      'name': [''],
      'stars': new FormArray(this.createStarsControls())
    });
    this.filterForm.get('stars').valueChanges.subscribe(starsFilter => {
      this.hotelService.broadcastFilterUpdates(
        {stars: starsFilter}
      );
    });
  }

  createStarsControls() {
    return this.starsList.map(star => {
      return this.formBuilder.control(star.selected);
    });
  }

  filterHotelsByName() {
    this.hotelService.broadcastFilterUpdates(
      {name: this.filterForm.get('name').value}
    );
  }

  get stars() {
    return this.filterForm.get('stars');
  };

  registerIcons(icons: string[], path: string = 'assets/icons/filters') {
    icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${path}/${icon}.svg`)
      );
    });
  }

}
