import { UploadFileService } from './../upload-file.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FilterResponse, UploadProgress } from 'src/app/shared/rxjs-operator/filterResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {


  files!: Set<File>;
  progress = 0;

  constructor(private _uploadService: UploadFileService) { }
  ngOnInit(): void {}

  onChange(event:any){
    console.log(event);
    const selectedFiles = <FileList>event.srcElement.files;
    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('formFileLabel')!.innerHTML = fileNames.join(', ');
    this.progress = 0;
  }

  onUpload(){
    if(this.files && this.files.size > 0){
      this._uploadService.UpLoad(this.files)
      .pipe(
        UploadProgress(fc => this.progress = fc),
        FilterResponse()
      ).subscribe();
    }
  }

  onDownloadExcel(){
    this._uploadService.Download(environment.mediaServer+'DownloadExcel')
    .subscribe((res:any)=> {
      this._uploadService.HandleFile(res);
    });
  }

  onDownloadPDF(){
    this._uploadService.Download(environment.mediaServer+'DownloadPDF')
    .subscribe((res:any)=> {
      this._uploadService.HandleFile(res);
    });
  }





}
