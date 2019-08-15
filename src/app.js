/** Application entry point. */

import Extension from './extension';
import Content from './content';

class App {
  constructor() {
    const body = document.querySelector('body');
    if (body.id && body.id == 'extension') {
      this.extension = new Extension();
    } else {
      this.content = new Content();
    }
  }
}

window.onload = () => {
  const app = new App();
};
