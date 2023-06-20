import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _registerUrl = "http://click_learning.test/api/auth/register"
    private _loginUrl = "http://click_learning.test/api/auth/login"
    constructor(private _httpClient: HttpClient) { }

    registerUser(user) {
        return this._httpClient.post<any>(this._registerUrl, user);
    }

    loginUser(user) {
        return this._httpClient.post<any>(this._loginUrl, user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
