
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component'
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CadastroCreateComponent } from './views/cadastro/cadastro-create/cadastro-create.component';
import { CadastroReadComponent } from './views/cadastro/cadastro-read/cadastro-read.component';
import { CadastroTabelaComponent } from './views/cadastro/cadastro-tabela/cadastro-tabela.component';
import { CadastroUpdateComponent } from './views/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './views/cadastro/cadastro-delete/cadastro-delete.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'contato',
    component: ContatoComponent 
  },
  
  {
    path: 'login',
    component: LoginComponent 
  }, 
  {
    path: 'cadastro',
    component: CadastroCreateComponent,
  },
  {
    path: 'cadastro/tabela',
    component: CadastroTabelaComponent,
  },
  
  {
    path: 'cadastro/update/:id',
    component: CadastroUpdateComponent,
  },
  {
    path: 'cadastro/delete/:id',
    component: CadastroDeleteComponent,
  },
  {
    path: 'cadastro/read/:id',
    component: CadastroReadComponent,
  },
  {
    path: 'cadastro/:id',
    component: CadastroComponent,
  },
  
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
