import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class ModifyrequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const API_KEY = "test002";
    // const modifyRes = request.clone({
    //   setHeaders: {
    //     API_KEY
    //   }
    // })

    const currentTime = new Date().getTime();
    return next.handle(request).pipe(map(event => {
      if(event instanceof HttpResponse){
        const endTime = new Date().getTime();
        const totalTime =  endTime - currentTime;
        console.log(event.url, "succeed in " +  totalTime + " milliseconds")
      }
      return event;
    }));
  }
}
