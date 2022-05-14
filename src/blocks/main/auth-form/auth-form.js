import './auth-form.css'

class AuthForm {
  constructor(element, next) {
    this.element = element;
    this.closeButton = element.querySelector('.auth-form__close');
    this.closeButton.addEventListener('click', () => { this.close() });
    this.form = element.querySelector('.auth-form');
    this.next = document.querySelector(next);
    this.nextStep = element.querySelector('.auth-form__other-action-click');
    this.nextStep.addEventListener('click', () => { this.openNext() });
    // stub for the submit form, add to constructor later
    // this.submit = submitFunction;

  }

  open() {
    this.element.classList.remove('auth-form__wrapper_hide');
    document.body.classList.add('scroll-lock');
  }

  close() {
    document.body.classList.remove('scroll-lock');
    this.element.classList.add('auth-form__wrapper_hide');
  }

  openNext() {
    this.element.classList.add('auth-form__wrapper_hide');
    this.next.classList.remove('auth-form__wrapper_hide');
  }
}

export const loginForm = new AuthForm(
  document.querySelector('#login-form'),
  '#signup-form',
  () => { console.log('login-ok') },
);

export const signupForm = new AuthForm(
  document.querySelector('#signup-form'),
  '#login-form',
  () => { console.log('signup-form-ok') },
);

export const regComplete = new AuthForm(
  document.querySelector('#signup-ok'),
  '#login-form',
  () => { console.log('signup-action-ok') },
);
