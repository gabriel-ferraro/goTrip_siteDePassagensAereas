import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//Material Components
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { IncluirClienteComponent } from './admin/clientes/incluir-cliente/incluir-cliente.component';
import { ListarClienteComponent } from './admin/clientes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './admin/clientes/editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from './admin/clientes/excluir-cliente/excluir-cliente.component';
import { IncluirLocalComponent } from './admin/locais/incluir-local/incluir-local.component';
import { EditarLocalComponent } from './admin/locais/editar-local/editar-local.component';
import { ListarLocalComponent } from './admin/locais/listar-local/listar-local.component';
import { ExcluirLocalComponent } from './admin/locais/excluir-local/excluir-local.component';
import { IncluirViagemComponent } from './admin/viagens/incluir-viagem/incluir-viagem.component';
import { ListarViagemComponent } from './admin/viagens/listar-viagem/listar-viagem.component';
import { EditarViagemComponent } from './admin/viagens/editar-viagem/editar-viagem.component';
import { ExcluirViagemComponent } from './admin/viagens/excluir-viagem/excluir-viagem.component';
import { ExcluirPassagemComponent } from './admin/passagens/excluir-passagem/excluir-passagem.component';
import { EditarPassagemComponent } from './admin/passagens/editar-passagem/editar-passagem.component';
import { ListarPassagemComponent } from './admin/passagens/listar-passagem/listar-passagem.component';
import { IncluirPassagemComponent } from './admin/passagens/incluir-passagem/incluir-passagem.component';
import { EditarUsuarioComponent } from './admin/usuarios/editar-usuario/editar-usuario.component';
import { ExcluirUsuarioComponent } from './admin/usuarios/excluir-usuario/excluir-usuario/excluir-usuario.component';
import { ListarUsuarioComponent } from './admin/usuarios/listar-usuario/listar-usuario/listar-usuario.component';
import { IncluirUsuarioComponent } from './admin/usuarios/incluir-usuario/incluir-usuario/incluir-usuario.component';

import { BuscaComponent } from './busca/busca.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { ComprarPassagemComponent } from './comprar-passagem/comprar-passagem.component';
import { SucessoCompraComponent } from './sucesso-compra/sucesso-compra.component';
import { Filter } from './pipes/Filter.pipe';
import { OrderPrecoPipe } from './pipes/order-preco.pipe';
import { FormatoRealPipe } from './pipes/formato-real.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AdminComponent,
    LoginComponent,
    PesquisaComponent,
    IncluirClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    ExcluirClienteComponent,
    IncluirLocalComponent,
    EditarLocalComponent,
    ListarLocalComponent,
    ExcluirLocalComponent,
    IncluirViagemComponent,
    ListarViagemComponent,
    EditarViagemComponent,
    ExcluirViagemComponent,
    IncluirPassagemComponent,
    ListarPassagemComponent,
    EditarPassagemComponent,
    ExcluirPassagemComponent,
    ExcluirUsuarioComponent,
    ListarUsuarioComponent,
    IncluirUsuarioComponent,
    EditarUsuarioComponent,
    BuscaComponent,
    FormatoRealPipe,
    Filter,
    AjudaComponent,
    RegistrarComponent,
    ComprarPassagemComponent,
    SucessoCompraComponent,
    OrderPrecoPipe
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }