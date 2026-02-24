import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

@Injectable({ providedIn: 'root' })
export class ContactService {
  submit(payload: ContactPayload): Observable<boolean> {
    return of(payload).pipe(
      delay(220),
      map(() => true),
    );
  }
}
