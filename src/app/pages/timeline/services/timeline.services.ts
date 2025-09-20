import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, Observable, of, switchMap, tap } from 'rxjs';
import { IData } from '../interfaces';
import { MOCK_API_RESPONSE } from '../constants';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TimelineService {
    readonly error$: BehaviorSubject<HttpErrorResponse | null> =
        new BehaviorSubject<HttpErrorResponse | null>(null);
    readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    private readonly refresh$: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

    data$: Observable<IData | null> = this.refresh$.pipe(
        tap(() => {
            this.error$.next(null);
            this.isLoading$.next(true);
        }),
        delay(800),
        switchMap(() => this.sendApiRequest()),
        tap(() => this.isLoading$.next(false)),
        catchError((error: HttpErrorResponse) => {
            this.error$.next(error);

            return of(null);
        })
    );

    refresh(): void {
        this.refresh$.next();
    }

    sendApiRequest(): Observable<IData> {
        return of(MOCK_API_RESPONSE);
    }
}
