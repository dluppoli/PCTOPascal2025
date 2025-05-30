# Autenticazione e autorizzazione in Angular (Estratto)

## 1. Creazione del model per contenere il token
```ts
export interface AuthToken {
    token: string;
}
```

## 2. Creazione del service per effettuare le operazioni di login/logout

**NB:** installare il seguente package `npm i @auth0/angular-jwt`

```ts
/*TODO: Aggiungere tutti gli import necessari*/
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper = new JwtHelperService();

  constructor(private http : HttpClient) { }

  login(username:string ,password:string)
  {
    /*TODO: Adattare la chiamata API a quanto previsto dal backend*/
    return this.http.post<AuthToken>(environment.baseBackendUrl + '/auth/login',{ "username":username, "password":password }).pipe(
      tap(t=> this.saveToken(t))
    )
  }

  logout()
  {
    /*TODO: Adattare la chiamata API a quanto previsto dal backend*/
    return this.http.post(environment.baseBackendUrl + '/auth/logout',{}).pipe(
      tap(()=> this.deleteToken())
    )
  }

  private saveToken(token : AuthToken)
  {
    localStorage.setItem('token', token.token);
  }

  private deleteToken()
  {
    localStorage.clear();
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  isLogged()
  {
    var token = localStorage.getItem('token');
    if( !token ) return false;
    return !this.jwtHelper.isTokenExpired(token);
  }

  getFieldFromToken()
  {
    var token = localStorage.getItem('token');
    if( !token || !this.isLogged() ) return 0;

    const decodedToken = this.jwtHelper.decodeToken(token);
    if( decodedToken && decodedToken.field ) return decodedToken.field;
    return 0;
  }
}
```


## 3. Creare la funzione che aggiunge il token ad ogni richiesta http
```ts
/*TODO: Aggiungere tutti gli import necessari*/
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token) {
      const cloned = req.clone({
          headers: req.headers.set("Authorization",
              "Bearer " + token)
      });
      return next(cloned);  }
  else {
      return next(req);    
  }
};
```

## 4. Configurare l'HttpClient per utilizzare la funzione precedente (file app.config.ts)
```ts
/*TODO: Aggiungere tutti gli import necessari*/
providers: [..., provideHttpClient(withInterceptors([authInterceptor])), ... ]
```

## 4. Creare la funzione di redirect in caso di accesso non autorizzato
```ts
/*TODO: Aggiungere tutti gli import necessari*/
export const AuthGuard: CanActivateFn = (route, state) => {  
  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.isLogged())
  {
      /*TODO: Modificare url di login*/
      router.navigate(['/login']);
      return false;
  }
  return true;
};
```

## 5. Inserire la funzione precedente sugli url da mantenere privati (app.routes.ts)
```ts
export const routes: Routes = [
    {path:'login', component:LoginComponent},
    { path:'backend', component:BackendComponent, canActivate:[AuthGuard]},
    { path:'**', component:NotFoundComponent}
];
```

## 6. Creare / Modificare i componenti
- Creare il componente con la maschera di login
- Visualizzare / nascondere le parti di interfaccia secondo il flag isLogged