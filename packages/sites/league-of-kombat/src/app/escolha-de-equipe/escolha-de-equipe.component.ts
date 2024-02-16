import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ImagemMembroDirective} from './imagem-membro.directive';

@Component({
  selector: 'escolha-de-equipe-component',
  templateUrl: './escolha-de-equipe.component.html',
  styleUrls: ['./escolha-de-equipe.component.css'],
  standalone: true,
  imports: [CommonModule, ImagemMembroDirective],
})
export class EscolhaDeEquipeComponent {
  equipeActive = 0;
  equipe1 = [
    {
      nome: 'Darius',
      imagem: 'darius.jpg',
    },
    {
      nome: 'Gwen',
      imagem: 'gwen.jpg',
    },
    {
      nome: 'ziggs',
      imagem: 'ziggs.jpg',
    },
    {
      nome: 'Samira',
      imagem: 'samira.jpg',
    },
    {
      nome: 'Lulu',
      imagem: 'lulu.jpg',
    },
  ];
  equipe2 = [
    {
      nome: 'Malphite',
      imagem: 'malphite.jpg',
    },
    {
      nome: 'gragas',
      imagem: 'gragas.jpg',
    },
    {
      nome: 'Senna',
      imagem: 'senna.jpg',
    },
    {
      nome: 'Twitch',
      imagem: 'twitch.jpg',
    },
    {
      nome: 'Leona',
      imagem: 'leona.jpg',
    },
  ];
  equipes = [
    {
      status: 'active',
      membros: this.equipe1,
    },
    {
      status: 'after',
      membros: this.equipe2,
    },
    {
      status: 'after',
      membros: this.equipe1,
    },
    {
      status: 'after',
      membros: this.equipe2,
    },
  ];

  previusTeam() {
    const nextIndex: number = this.equipeActive - 1 >= 0 ? this.equipeActive - 1 : this.equipes.length - 1;

    const currentEquipe = this.equipes[this.equipeActive];

    const nextEquipe = this.equipes[nextIndex];

    currentEquipe.status = 'before';

    nextEquipe.status = 'becoming-active-from-after';

    setTimeout(() => {
      nextEquipe.status = 'active';
      this.equipeActive = nextIndex;
    });
  }

  selectTeam() {}

  nextTeam() {
    const nextIndex = this.equipeActive + 1 <= this.equipes.length - 1 ? this.equipeActive + 1 : 0;

    // const currentGroup: HTMLElement | null = document.querySelector(`[data-index="${this.equipeActive}"]`);
    const currentEquipe = this.equipes[this.equipeActive];
    // const nextGroup: HTMLElement | null = document.querySelector(`[data-index="${nextIndex}"]`);
    const nextEquipe = this.equipes[nextIndex];
    // if (currentGroup) currentGroup.dataset['status'] = 'after';
    currentEquipe.status = 'after';
    // if (nextGroup) nextGroup.dataset['status'] = 'becoming-active-from-before';
    nextEquipe.status = 'becoming-active-from-before';
    setTimeout(() => {
      nextEquipe.status = 'active';
      this.equipeActive = nextIndex;
    });
  }
}

// activeIndex = 0;

//   groups = document.getElementsByClassName("card-group");

//   handleLoveClick () {
//     const nextIndex =
//       activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

//     const currentGroup = document.querySelector(
//         `[data-index="${activeIndex}"]`
//       ),
//       nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

//     currentGroup.dataset.status = "after";

//     nextGroup.dataset.status = "becoming-active-from-before";

//     setTimeout(() => {
//       nextGroup.dataset.status = "active";
//       activeIndex = nextIndex;
//     });
//   };

//   const handleHateClick = () => {
//     const nextIndex =
//       activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

//     const currentGroup = document.querySelector(
//         `[data-index="${activeIndex}"]`
//       ),
//       nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

//     currentGroup.dataset.status = "before";

//     nextGroup.dataset.status = "becoming-active-from-after";

//     setTimeout(() => {
//       nextGroup.dataset.status = "active";
//       activeIndex = nextIndex;
//     });
//   };
