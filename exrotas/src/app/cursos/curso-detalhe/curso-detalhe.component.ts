import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit {
  id: number =0 ;
  inscricao!: Subscription;
  cursos: any;
  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params: any) => {
      console.log(params);
      this.id = params['id'];
      this.cursos = this._cursosService.getCursoPorId(this.id);

      if(this.cursos == null){
        console.log("cursos/curso-nao-encontrado");
        this._router.navigate(['cursos/curso-nao-encontrado']);
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }
}
