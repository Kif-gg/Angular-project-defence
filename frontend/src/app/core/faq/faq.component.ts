import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  constructor() { }

  showAnswer(event: Event) {
    const question = (event.target as HTMLElement).parentElement;

    question?.classList.toggle('active')

    const elsiblings = Array.from(document.getElementsByClassName('question'));
    
    for (let sibling of elsiblings) {
      if (question?.tagName !== 'SECTION') {
        const answer = question?.nextElementSibling as HTMLElement;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = '';
        } else {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    }
  }

}
