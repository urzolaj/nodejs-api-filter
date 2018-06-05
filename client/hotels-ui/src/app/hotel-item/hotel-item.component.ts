import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  stars: Array<number>;
  amenitiesList = [
    'bathrobes',
    'bathtub',
    'beach-pool-facilities',
    'beach',
    'business-center',
    'children-club',
    'coffe-maker',
    'deep-soaking-bathtub',
    'fitness-center',
    'garden',
    'kitchen-facilities',
    'newspaper',
    'nightclub',
    'restaurant',
    'safety-box',
    'separate-bredroom',
    'sheets'
  ];
  backgroundImageUrl: SafeStyle;
  @Input() hotel;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.stars = new Array(this.hotel.stars);
    this.registerIcons(['search', 'star'], 'assets/icons/filters');
    this.registerIcons(this.amenitiesList, 'assets/icons/amenities');
    this.backgroundImageUrl = this.sanitizer.bypassSecurityTrustStyle(
      `url(assets/images/hotels/${this.hotel.image})`
    );
  }

  registerIcons(icons: string[], path: string) {
    icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${path}/${icon}.svg`)
      );
    });
  }

}
