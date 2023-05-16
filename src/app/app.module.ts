import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule } from '@angular/common/http';



import { Routes, RouterModule } from '@angular/router';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp.component';
import { EdicionExpComponent } from './componentes/experiencia/edicion-exp.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EdicionEducacionComponent } from './componentes/educacion/edicion-educacion.component';
import { NuevoSkillComponent } from './componentes/skills/nuevo-skill.component';
import { EdicionSkillComponent } from './componentes/skills/edicion-skill.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EdicionProyectoComponent } from './componentes/proyectos/edicion-proyecto.component';
import { EdicionAcercadeComponent } from './componentes/acerca-de/edicion-acercade.component';
import { EdicionEduccompComponent } from './componentes/educacion/edicion-educcomp.component';
import { EdicionHsComponent } from './componentes/skills/edicion-hs.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


const routes:Routes = [

  {path:'', component:HomeComponent},

  {path:'login', component:LoginComponent},

  {path:'edicionabout/:id', component:EdicionAcercadeComponent},

  {path:'edicionexp/:id', component:EdicionExpComponent},

  {path:'edicioneduc/:id', component:EdicionEducacionComponent},

  {path:'edicioneduccomp/:id', component:EdicionEduccompComponent},

  {path:'edicionskill/:id', component:EdicionSkillComponent},

  {path:'edicionhs/:id', component:EdicionHsComponent},

  {path:'edicionproyectos/:id', component:EdicionProyectoComponent},

  {path:'nuevoexp', component:NuevaExpComponent},

  {path:'nuevoeduc', component:NuevaEducacionComponent},

  {path:'nuevoskill', component:NuevoSkillComponent},

  {path:'nuevoproyecto', component:NuevoProyectoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    NuevaExpComponent,
    EdicionExpComponent,
    NuevaEducacionComponent,
    EdicionEducacionComponent,
    NuevoSkillComponent,
    EdicionSkillComponent,
    NuevoProyectoComponent,
    EdicionProyectoComponent,
    EdicionAcercadeComponent,
    EdicionEduccompComponent,
    EdicionHsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
