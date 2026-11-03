import { createIcons, Menu, Search, Play, ArrowRight, ArrowDown, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide'
import menuView  from './menuView.js';
import videoView from './videoView.js';
import featureView from './featureView.js';
createIcons({
  icons: {
    Menu,
    Search,
    Play,
    ArrowRight,
    ArrowDown,
    ChevronDown,
    X,
    ChevronRight
  }
});


const init = function () {
  menuView.addHandlerMenu(menuView.openHamburgerMenu.bind(menuView));
  menuView.addHandlerRemoveMenu(menuView.closeHamburgerMenu.bind(menuView));
  videoView.addHandlerOpenVideo(videoView.openVideo.bind(videoView));
  videoView.addHandlerCloseVideo(videoView.closeVideo.bind(videoView));
  featureView.addHandlerchangeCardInfo(featureView.changeCardInfo.bind(featureView), featureView.changeImage.bind(featureView))
  
}
init()