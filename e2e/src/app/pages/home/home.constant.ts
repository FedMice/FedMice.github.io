export const HomeConstant = {
    ANIMATION:`
    import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
      
      @NgModule({
          imports: [
              BrowserModule,
              BrowserAnimationsModule,
              ...
          ],
          ...
      })
      export class AppModule { }
  `,
  ASSETS:`
  "assets": [
    {
     "glob": "**/*" ,
     "input": "node_modules/blazing/src/lib/assets",
     "output": "/assets/"
    }
  ]
  `,
  STYLES: `"styles": [
     "node_modules/blazing/src/lib/theme/fedkit/theme.scss"
    ]
  `,
  THEME: `
  @import 'node_modules/blazing/src/lib/theme/_mixins.scss';

@include setThemes();
 `,
  
  }
  
  
  