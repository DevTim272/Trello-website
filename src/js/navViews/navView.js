 class NavView {
  _megaDropDown = document.querySelector('.drop-down');
  _mainParentElement = document.querySelector('main');
  _parentElement = document.querySelector('.nav');
  _firstChild =  document.querySelector('.first-child');
  _headerLinksMobile = document.querySelector('.header__links')
  _footer = document.querySelector('.footer');
  _closeBtn = document.querySelector('.menu-remove');
  clearInMobile(element){
    element.id = "hidden";
  }
  openInMobile(element){
    element.id = "open";
    
  }
  clear(element){
    element.classList.add('hidden')
  }
  openContent(){
    this._firstChild.classList.remove('hidden');
    this._megaDropDown.classList.add('hidden');
    
    
  }
  changeContent(markup){
    this.clear(this._firstChild);
    this._megaDropDown.classList.remove('hidden');
    this._megaDropDown.innerHTML = markup;
  }
  
  addHandlerChangeContent(handler){
  
    this._parentElement.addEventListener('click', e => {
        const attribute = e.target.getAttribute("data-open");
        const isMobile = window.matchMedia("(max-width: 800px)");
        const isDesktop = window.matchMedia("(min-width: 801px)");
        const target = e.target.closest("[data-open]");
        if(!target){
          return
          
        }
        if (isMobile.matches) {
          e.preventDefault();
          this.clearInMobile(this._headerLinksMobile);
          this.clearInMobile(this._footer);
          handler(e.target.href);
          this._closeBtn.dataset.expanded = 'true' ;
          if (this._closeBtn.dataset.expanded === 'true') 
             this._closeBtn.addEventListener('click', (e) => {
             this.clear
             this.openInMobile(this._headerLinksMobile);
             this.openInMobile(this._footer);
             this.openContent()
           
            }  )
          
          return;
        }

        if(attribute === 'true'){
          e.preventDefault();
          this.openContent();
          e.target.setAttribute("data-open", "false");
          this.clearInMobile(this._megaDropDown)
          this.openInMobile(this._headerLinksMobile);
          this.openInMobile(this._footer);
             return;
        }
        
        if(e.target.closest("[data-open]") && isDesktop.matches){  
           e.preventDefault();
          document.querySelectorAll('[data-open]').forEach(el => {
            el.setAttribute("data-open", "false") 
            
          })
          
            handler(target.href);
            target.setAttribute("data-open", "true");
           
            
        }
    })
  } 
}
export default new NavView()