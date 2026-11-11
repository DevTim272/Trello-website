 class NavView {
  _megaDropDown = document.querySelector('.drop-down');
  _mainParentElement = document.querySelector('main');
  _parentElement = document.querySelector('.nav');
  _firstChild =  document.querySelector('.first-child');

  
  clear(element){
    element.classList.add('hidden')
  }
  openContent(){
    this._firstChild.classList.remove('hidden');
    this._megaDropDown.classList.add('hidden');
    console.log(this);
    
  }
  changeContent(markup){
    this.clear(this._firstChild);
    this._megaDropDown.classList.remove('hidden');
    this._megaDropDown.innerHTML = markup;
    
    
  }
  addHandlerChangeContent(handler){
  
    this._parentElement.addEventListener('click', e => {
        const attribute = e.target.getAttribute("data-open");
        
        if(attribute === 'true'){
          e.preventDefault();
          this.openContent();
          console.log(this._megaDropDown);
          return;
          
        }
        
        if(e.target.closest("[data-open]")){  
           e.preventDefault();
          document.querySelectorAll('[data-open]').forEach(el => {
            el.setAttribute("data-open", "false") 
            
          })
          
            handler(e.target.href);
            e.target.setAttribute("data-open", "true");
           
            
        }
    })
  } 
}
export default new NavView()