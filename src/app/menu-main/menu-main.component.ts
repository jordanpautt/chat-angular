import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';

@Component({
  selector: 'app-menu-main',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
})
export class MenuMainComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
    'Jordan',
    'Jossie',
    'cristian',
    'Arturo',
    'frederick',
    'Sharon',
    'Pedro',
  ];
}
