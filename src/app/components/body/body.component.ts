import { Component  } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: `./body.component.html`
})

export class BodyComponent{
  show = true;

  sentence : any = {
    message: 'A great power comes with great responsibility',
    author: 'Ben Parker'
  };

  characters: string [] = ['Spiderman', 'Venom', 'Doctor Octupus']
}
