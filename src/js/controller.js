import { createIcons, Menu, Search, Play, ArrowRight, ArrowDown, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide'
import menuView  from './menuView.js';
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
 
  
}
init()