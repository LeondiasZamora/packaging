import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="video"
export default class extends Controller {
  static targets = [ "button", "frame"]

  play(){
    this.buttonTarget.style.display = "none";
    this.frameTarget.style.display = "block";
    this.frameTarget.setAttribute("autoplay", "true")
    this.frameTarget.setAttribute("controls", "true")
    this.frameTarget.muted = false;
    this.frameTarget.currentTime = 0;

    this.playerTarget.play().then(() => {
      if (this.playerTarget.requestFullscreen) {
        this.playerTarget.requestFullscreen()
      } else if (this.playerTarget.webkitEnterFullscreen) {
        this.playerTarget.webkitEnterFullscreen()
      }
    })
  }

  connect() {
    this.buttonTarget.addEventListener( "click", () => this.play() );
  }
}
