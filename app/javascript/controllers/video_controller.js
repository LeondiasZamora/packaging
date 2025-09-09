import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="video"
// export default class extends Controller {
//   static targets = [ "button", "frame"]

//   play(){
//     this.buttonTarget.style.display = "none";
//     this.frameTarget.style.display = "block";
//     this.frameTarget.setAttribute("autoplay", "true")
//     this.frameTarget.setAttribute("controls", "true")
//     this.frameTarget.muted = false;
//     this.frameTarget.currentTime = 0;

//     this.frameTarget.play().then(() => {
//       if (this.frameTarget.requestFullscreen) {
//         this.frameTarget.requestFullscreen()
//       } else if (this.frameTarget.webkitEnterFullscreen) {
//         this.frameTarget.webkitEnterFullscreen()
//       }
//     })
// }

//   connect() {
//     this.buttonTarget.addEventListener( "click", () => this.play() );
//   }
// }

export default class extends Controller {
  static targets = ["button", "frame"]

  play() {
    this.buttonTarget.style.display = "none";
    this.frameTarget.style.display = "block";

    this.frameTarget.controls = true;
    this.frameTarget.muted = false;
    this.frameTarget.currentTime = 0;

    // this.frameTarget.play().catch(err => {
    //   console.log("Playback prevented:", err);
    // });
        this.frameTarget.play().then(() => {
      if (this.frameTarget.requestFullscreen) {
        this.frameTarget.requestFullscreen()
      } else if (this.frameTarget.webkitEnterFullscreen) {
        this.frameTarget.webkitEnterFullscreen()
      }
    })
  }

  connect() {
    this.buttonTarget.addEventListener("click", () => this.play());
  }
}
