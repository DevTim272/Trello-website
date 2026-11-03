class FeatureView{
    _mainParentElement = document.querySelector('.feature-showcase')
    _parentElement = document.querySelector('.feature-showcase__image-wrapper');
    _featureCards =  document.querySelectorAll('.feature-card');
    _featurerImages = document.querySelectorAll('.feature-showcase__image');
    _featureDots =  document.querySelectorAll('.feature-dot');
    changeImage(image){
      this._featurerImages.forEach((img, i) => {
        img.style.transform = `translateX(-${image * 100}%)`
      })
    }
    changeCardInfo(data){
        const target = [...this._featureCards].find(btn => btn.matches(`[data-position="${data}"]`));
        this._featureCards.forEach(card => card.classList.remove('feature-card--active'));
        target.classList.add('feature-card--active')
    }
    addHandlerchangeCardInfo(handler, changeImage){
        this._mainParentElement.addEventListener('click', function(e){
           const card = e.target.closest('.feature-card');
           const cardBtn = e.target.closest('.feature-dot');
           //if(!cardBtn && !card) return;
           if (cardBtn) {
              changeImage(Number(cardBtn.dataset.position))
               handler(cardBtn.dataset.position)
           }
           if(card) {
                  changeImage(Number(card.dataset.position))
                  handler(card.dataset.position)
           }
          
          
           
           
           
        })      
    }
}
export default new FeatureView;