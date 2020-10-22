import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Coffee} from '../domain/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private total: number;
  private totalSubject = new Subject();

  TotalChanged = this.totalSubject.asObservable();

  constructor(
    private  http: HttpClient,
    @Inject('apiUrl') private apiUrl
  ) {
  }

  getCoffee(): Observable<Coffee[]> {
    // @ts-ignore
    return this.http.get(this.apiUrl);
  }

  // tslint:disable-next-line:typedef
  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next();
  }
}
