class FeatureView{
    _mainParentElement = document.querySelector('.feature-showcase__container')
    _parentElement = document.querySelector('.feature-showcase__image-wrapper');
    _featureCards =  document.querySelectorAll('.feature-card');
  
    changeCardInfo(data){
        const target = [...this._featureCards].find(btn => btn.matches(`[data-position="${data}"]`));
        console.log(target);
      
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML('afterbegin',   `
     <img
          class="feature-showcase__image"
          src="src/img/features-image-${data}.jpeg"
          alt="Preview of Trello's Inbox and Personal Task Board interface"
        />`) 
        console.log(this._parentElement);
        
        
        this._featureCards.forEach(card => card.classList.remove('feature-card--active'));
        target.classList.add('feature-card--active')
    }
    addHandlerchangeCardInfo(handler){
        this._mainParentElement.addEventListener('click', function(e){
           const card = e.target.closest('.feature-card');
           if (!card) return;
           handler(card.dataset.position)
        })      
    }
}
export default new FeatureView;