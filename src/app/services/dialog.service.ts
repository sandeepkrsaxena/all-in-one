import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  subjectbehavior = new BehaviorSubject<any>(null)

  constructor() { }
}
