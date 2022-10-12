import { AjudaComponent } from './ajuda/ajuda.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { BuscaComponent } from './busca/busca.component';
import { ComprarPassagemComponent } from './comprar-passagem/comprar-passagem.component';
import { SucessoCompraComponent } from './sucesso-compra/sucesso-compra.component';

//local
import { ListarLocalComponent } from './admin/locais/listar-local/listar-local.component';
import { IncluirLocalComponent } from './admin/locais/incluir-local/incluir-local.component';
import { EditarLocalComponent } from './admin/locais/editar-local/editar-local.component';
import { ExcluirLocalComponent } from './admin/locais/excluir-local/excluir-local.component';
//cliente
import { ListarClienteComponent } from './admin/clientes/listar-cliente/listar-cliente.component'
import { IncluirClienteComponent } from './admin/clientes/incluir-cliente/incluir-cliente.component';
import { EditarClienteComponent } from './admin/clientes/editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from './admin/clientes/excluir-cliente/excluir-cliente.component';
//passagem
import { ListarPassagemComponent } from './admin/passagens/listar-passagem/listar-passagem.component';
import { IncluirPassagemComponent } from './admin/passagens/incluir-passagem/incluir-passagem.component';
import { EditarPassagemComponent } from './admin/passagens/editar-passagem/editar-passagem.component';
import { ExcluirPassagemComponent } from './admin/passagens/excluir-passagem/excluir-passagem.component';
//viagem
import { ListarViagemComponent } from './admin/viagens/listar-viagem/listar-viagem.component';
import { IncluirViagemComponent } from './admin/viagens/incluir-viagem/incluir-viagem.component';
import { EditarViagemComponent } from './admin/viagens/editar-viagem/editar-viagem.component';
import { ExcluirViagemComponent } from './admin/viagens/excluir-viagem/excluir-viagem.component';
//usuário
import { ListarUsuarioComponent } from './admin/usuarios/listar-usuario/listar-usuario/listar-usuario.component';
import { IncluirUsuarioComponent } from './admin/usuarios/incluir-usuario/incluir-usuario/incluir-usuario.component';
import { EditarUsuarioComponent } from './admin/usuarios/editar-usuario/editar-usuario.component';
import { ExcluirUsuarioComponent } from './admin/usuarios/excluir-usuario/excluir-usuario/excluir-usuario.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { AuthService as AuthGuard } from './services/auth.service';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  // { path: 'conta', component: ContaComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'comprar', component: ComprarPassagemComponent },
  { path: 'sucesso', component: SucessoCompraComponent },
  { path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    children: [

      //usuários
      { path: 'usuarios', component: ListarUsuarioComponent },
      { path: 'usuarios/incluir', component: IncluirUsuarioComponent },
      { path: 'usuarios/excluir/:codigo', component: ExcluirUsuarioComponent },
      { path: 'usuarios/editar/:codigo', component: EditarUsuarioComponent },
      //clientes
      { path: 'clientes', component: ListarClienteComponent },
      { path: 'clientes/incluir', component: IncluirClienteComponent },
      { path: 'clientes/excluir/:codigo', component: ExcluirClienteComponent },
      { path: 'clientes/editar/:codigo', component: EditarClienteComponent },
      //passagens
      { path: 'passagens', component: ListarPassagemComponent },
      { path: 'passagens/incluir', component: IncluirPassagemComponent },
      { path: 'passagens/excluir/:codigo', component: ExcluirPassagemComponent },
      { path: 'passagens/editar/:codigo', component: EditarPassagemComponent },
      //viagens
      { path: 'viagens', component: ListarViagemComponent },
      { path: 'viagens/incluir', component: IncluirViagemComponent },
      { path: 'viagens/excluir/:codigo', component: ExcluirViagemComponent },
      { path: 'viagens/editar/:codigo', component: EditarViagemComponent },
      //locaisHome
      { path: 'locais', component: ListarLocalComponent },
      { path: 'locais/incluir', component: IncluirLocalComponent },
      { path: 'locais/excluir/:codigo', component: ExcluirLocalComponent },
      { path: 'locais/editar/:codigo', component: EditarLocalComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
