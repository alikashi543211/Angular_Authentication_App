import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _registerUrl = "http://click_learning.test/api/auth/register"
    constructor(private _httpClient: HttpClient) { }

    registerUser(user) {
        return this._httpClient.post<any>(this._registerUrl, user);
    }
}
