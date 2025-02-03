import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);
  increment() {
    // this.counterValue = 1; // this won't work as counterValue is 'signal' and therefore can't assign 'number' to it
    this.counterValue.update((val) => val + 1);
  }

  decrement() {
    this.counterValue.update((val) => val - 1);
  }

  reset() {
    this.counterValue.set(0);
  }
}
