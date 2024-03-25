import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ChuckNorrisService {
    constructor(private readonly httpClient: HttpClient) {}

    gimmeJokes() {
        // return this.httpClient.get('https://api/chucknorris.io/jokes/random')
        // return this.httpClient.get(' https://random-data-api.com/api/v2/' + 'users/random_user')
        return this.httpClient.get('https://random-data-api.com/api/v2/' + 'users');
    }
}
