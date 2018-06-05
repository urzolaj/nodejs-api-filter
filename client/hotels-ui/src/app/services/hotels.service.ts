import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Hotel } from '../models/hotel';

@Injectable()
export class HotelsService {

  private updatedFiltersSource = new Subject<Hotel[]>();
  updatedFilters = this.updatedFiltersSource.asObservable();

  constructor(private http: HttpClient) { }

  getHotels(filters) {
    let params = new HttpParams();
    if (filters.name) {
      params = params.append('filter', JSON.stringify(
        {where:{name: {like: filters.name+'.*', options:"i"}}}
      ));
    } else if (filters.stars.includes(true) && !filters.stars[0]) {
      let matchingStars = filters.stars.map((item, index) => {
        if (item) {
          return {stars: index}
        }
      }).filter(item => item);
      let whereObject = {where: {or: matchingStars}};
      params = params.append('filter', JSON.stringify(whereObject));
    }
    this.http.get(environment.apiURL+'/Hotels', {params: params}).subscribe((response: any) => {
      this.updatedFiltersSource.next(response);
    });
  }

  broadcastFilterUpdates(newFilterState) {
    this.getHotels(newFilterState);
  }

}
