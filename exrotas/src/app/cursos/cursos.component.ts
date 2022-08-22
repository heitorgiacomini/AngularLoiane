import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  id: number = 0;
  inscricao!: Subscription;
  pagina: number = 0;

  cursos!: any[];
  constructor(
    private _route: ActivatedRoute,
    private _cursosService: CursosService,
    private _router: Router
  ) {
    // console.log(this.route);
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
    this.inscricao = this._route.queryParams.subscribe((params: any) => {
      this.pagina = params['pagina'];
      console.log(this.pagina);
      console.log(params);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  proximaPagina() { 
    this._router.navigate(['/cursos'],
      {
        queryParams: {
          'pagina': ++this.pagina
        },
      },
    );
  }
}
