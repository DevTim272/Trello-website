class VideoView {
    _parentElement = document.querySelector('.video-overlay');
    _openBtn = document.querySelector('.video-btn');
    _closeBtn = document.querySelector('.video-close');
    _video = document.querySelector('.video-modal-video');
    openVideo(){
       this._parentElement.classList.remove('hidden');
       this._parentElement.removeAttribute('inert')
    }
    closeVideo(){
       this._video.pause();
       this._video.currentTime = 0;
       this._parentElement.classList.add('hidden');
       this._parentElement.addAttribute('inert');
    }
    addHandlerOpenVideo(handler){
        this._openBtn.addEventListener('click', handler)
    }
    addHandlerCloseVideo(handler){
        this._closeBtn.addEventListener('click', handler)
        this._parentElement.addEventListener('click', handler)
    }

}
export default new VideoView()