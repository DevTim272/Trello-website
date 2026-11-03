
class TestimonialView {
  _mainParentElement = document.querySelector('.testimonial-section__container');
  _track = document.querySelector('.testimonial-carousel__track');
  _slides = [...document.querySelectorAll('.testimonial-card')];
  _dots = [...document.querySelectorAll('.testimonial-nav__dot')];
  _currentSlide = 0;

  changeSlide(slide) {
    this._currentSlide = slide;

    this._track.style.transform = `translateX(-${slide * 100}%)`;

    this._slides.forEach((item, i) => {
      const isActive = i === slide;

      item.setAttribute('aria-hidden', String(!isActive));
      item.inert = !isActive;
    });
  }

  changeDot(slide) {
    this._dots.forEach((dot, i) => {
      dot.classList.toggle('testimonial-nav__dot--active', i === slide);
      dot.setAttribute('aria-current', String(i === slide));
    });
  }

  addHandlerNavigation(handler) {
    this._mainParentElement.addEventListener('click', e => {
      const nextBtn = e.target.closest('[data-action="next"]');
      const prevBtn = e.target.closest('[data-action="prev"]');
      const dot = e.target.closest('.testimonial-nav__dot');

      if (nextBtn) handler('next');
      if (prevBtn) handler('prev');

      if (dot) handler('goTo', Number(dot.dataset.position));
    });
  }
}

export default new TestimonialView();
