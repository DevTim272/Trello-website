class NavView {
  _mainParentElement = document.querySelector('main');
  _parentElement = document.querySelector('.nav');
  clear(element){
    element.innerHTML ='';
  }
  render(markup){
    this.clear(this._mainParentElement)   
    this._mainParentElement.insertAdjacentHTML("afterbegin", markup );
  }
  
}
export default new NavView()