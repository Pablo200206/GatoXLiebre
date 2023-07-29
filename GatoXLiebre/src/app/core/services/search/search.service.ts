import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PetInfo } from 'src/app/entities/receive/pet-info';

@Injectable()
export class SearchService {

  constructor(http: HttpClient) { }

  private petInfo = new BehaviorSubject<PetInfo | null>(null);
  searchParams$ = this.petInfo.asObservable();
  

  setSearchParams(params: PetInfo) {
    this.petInfo.next(params);
  }

  getSearchParams() {
    return this.searchParams$;
  }






}
