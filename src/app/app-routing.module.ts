import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'find-assessment',
    loadChildren: () => import('./find-assessment/find-assessment.module').then(m => m.FindAssessmentPageModule)
  },
  {
    path: 'atd-form/:id',
    loadChildren: () => import('./atd-form/atd-form.module').then(m => m.AtdFormPageModule)
  },
  {
    path: 'atd-upload',
    loadChildren: () => import('./atd-upload/atd-upload.module').then(m => m.AtdUploadPageModule)
  },
  {
    path: 'atd-form-two',
    loadChildren: () => import('./atd-form-two/atd-form-two.module').then(m => m.AtdFormTwoPageModule)
  },
  {
    path: 'atd-all',
    loadChildren: () => import('./atd-all/atd-all.module').then(m => m.AtdAllPageModule)
  },
  {
    path: 'atd-info/:atdid',
    loadChildren: () => import('./atd-info/atd-info.module').then(m => m.AtdInfoPageModule)
  },
  {
    path: 'imageview',
    loadChildren: () => import('./imageview/imageview.module').then( m => m.ImageviewPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
