import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatCardModule
]
@NgModule({
  imports: [MaterialComponents, 
            MatButtonModule,
            MatCardModule
  ],
  exports: [MaterialComponents,
            MatButtonModule,
            MatCardModule
  ]
})
export class MaterialModule { }
