// Highway
import Highway from 'highway';

// GSAP
import Tween, { TweenMax } from 'gsap';

// Fade
class Fade extends Highway.Transition {
  in(from, to, done) {
    // Remove Old View
    from.remove();

    // Animation
    Tween.fromTo(to, 0.5,
      { opacity: 0 },
      {
        opacity: 1,
        onComplete: done
      }
    );
  }

  out(from, to, done) {
    // Animation
    Tween.fromTo(from, 0.5,
      { opacity: 1 },
      {
        opacity: 0,
        onComplete: done
      }
    );
  }
}

export default Fade;
