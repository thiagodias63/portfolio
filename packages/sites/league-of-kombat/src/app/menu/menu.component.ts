import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: `./menu.component.html`,
  styleUrls: ['menu.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MenuComponent {
  menuOptions = [
    {
      name: 'Batalha de equipes',
      href: 'escolha-de-equipe',
    },
    {
      name: 'Duelo',
    },
  ];

  @ViewChild('menuContainer', {static: true}) menuContainer!: ElementRef<HTMLDivElement>;

  onMouseHover(index: number): void {
    this.menuContainer.nativeElement.dataset['activeIndex'] = index.toString();
  }
}
