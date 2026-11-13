import { data } from "browserslist";

class MenuView {
   _openBtn = document.querySelector('.menu-toggle');
   _parentEl = document.querySelector('.header__links');
   _closeBtn = document.querySelector('.menu-remove');

   openHamburgerMenu(){
    this._parentEl.classList.add('is-open');
     this._openBtn.classList.add('hidden');
     this._closeBtn.classList.add('is-open');
   }
   closeHamburgerMenu(){
     this._parentEl.classList.remove('is-open');
     this._closeBtn.classList.remove('is-open');
    this._openBtn.classList.remove('hidden');
  }
   addHandlerMenu(handler){
    this._openBtn.addEventListener('click', handler)
   }
    addHandlerRemoveMenu(handler){
     
    if (this._closeBtn.dataset.expanded === 'false') this._closeBtn.addEventListener('click', handler)
    else console.log('bwess');
    

   }
}
export default new MenuView();