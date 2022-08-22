import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private _http: HttpClient) { }

  consultaCEP(cep: string ) {
    cep = cep.replace(/\D/g, '');
    //verifaca se campo tem valor informado
    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        //https://viacep.com.br/ws/"+ cep +"/json/?callback=?
        return this._http
          .get(`https://viacep.com.br/ws/${cep}/json/`);
      }
    }

    return of ({});
  }

  

 

}
