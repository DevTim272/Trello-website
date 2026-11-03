
import { createIcons, Menu, Search, Play, ArrowRight, ArrowDown, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide';

import menuView from './menuView.js';
import videoView from './videoView.js';
import featureView from './featureView.js';
import testimonialView from './testimonialView.js';

createIcons({
  icons: {
    Menu,
    Search,
    Play,
    ArrowRight,
    ArrowDown,
    ChevronDown,
    X,
    ChevronRight,
    ChevronLeft
  }
});

let currentSlide = 0;

const controlTestimonial = function (action, position) {
  const slideCount = testimonialView._slides.length;

  if (action === 'next') currentSlide++;
  if (action === 'prev') currentSlide--;
  if (action === 'goTo') currentSlide = position;

  // Keep the index within the available slides.
  currentSlide = (currentSlide + slideCount) % slideCount;

  testimonialView.changeSlide(currentSlide);
  testimonialView.changeDot(currentSlide);
};

const init = function () {
  menuView.addHandlerMenu(menuView.openHamburgerMenu.bind(menuView));
  menuView.addHandlerRemoveMenu(menuView.closeHamburgerMenu.bind(menuView));

  videoView.addHandlerOpenVideo(videoView.openVideo.bind(videoView));
  videoView.addHandlerCloseVideo(videoView.closeVideo.bind(videoView));

  featureView.addHandlerchangeCardInfo(
    featureView.changeCardInfo.bind(featureView),
    featureView.changeImage.bind(featureView)
  );

  testimonialView.addHandlerNavigation(controlTestimonial);

  // Set the initial slide.
  testimonialView.changeSlide(currentSlide);
  testimonialView.changeDot(currentSlide);
};

init();
