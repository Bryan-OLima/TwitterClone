import { Component, OnInit } from '@angular/core';

//fontAwesome icons
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  list = [
    {
      name: 'Pagina Inicial',
      icon: faHouseChimneyWindow
    },
    {
      name: 'Explorar',
      icon: faHashtag
    },
    {
      name: 'Notificações',
      icon: faBell
    },
    {
      name: 'Mensagem',
      icon: faEnvelope
    },
    {
      name: 'Itens Salvos',
      icon: faBookmark
    },
    {
      name: 'Listas',
      icon: faListAlt
    },
    {
      name: 'Perfil',
      icon: faUser
    },
    {
      name: 'Mais',
      icon: faEllipsis
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  generic(){
    console.log('clicou em tweetar');
  }
}
