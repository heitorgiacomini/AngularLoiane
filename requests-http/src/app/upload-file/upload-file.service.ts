import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private readonly mediaServerAddress = `${environment.mediaServer}upload`;
  constructor(private _http: HttpClient) { }

  UpLoad(files: Set<File> ){

    const formData = new FormData();
    files.forEach(element => {
      formData.append('file', element, element.name);
    });
    // const request  = new HttpRequest('POST', this.mediaServerAddress, formData);
    // return this._http.request(request);

    return this._http.post(this.mediaServerAddress, formData,{
      observe: 'events',
      reportProgress: true
    });
  }

  Download(url:string){
    return this._http.get(url, {
      responseType: 'blob' as 'json'
    });
  }



HandleFile(res:any){
  const file = new Blob([res], { type: res.type});
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);
}


}
