'use babel'

let TomatoTimerView;

module.exports = TomatoTimerView = (function() {
  function TomatoTimerView(serializedState) {
    let message
    let header
    let message2;
    this.element = document.createElement('div');
    this.element.classList.add('tomato-timer');
    header = document.createElement('h2');
    header.textContent = '🍅 Break Time 🍅';
    message = document.createElement('p');
    message.textContent = 'Time to take a 5 minute break. Your beloved Atom will be released back in to your arms at that time.';
    message2 = document.createElement('p');
    message2.textContent = 'Please take this time to tell someone you love them or go ride a bike or something.';
    message3 = document.createElement('p');
    message3.textContent = 'Start a new timer to do this again. I don\'t know how to loop this yet...🙃';
    this.element.appendChild(header);
    this.element.appendChild(message);
    this.element.appendChild(message2);
    this.element.appendChild(message3);
  };
  TomatoTimerView.prototype.serialize = function() {};
  TomatoTimerView.prototype.destroy = function() {
    return this.element.remove();
  };
  TomatoTimerView.prototype.getElement = function() {
    return this.element;
  };
  return TomatoTimerView;
})();
