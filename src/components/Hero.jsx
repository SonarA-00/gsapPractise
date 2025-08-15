import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
const Hero = () => {
  useGSAP(() => {
    const splitTitle = new SplitText(".title", {
      type: "chars,words",
    });
    const splitLines = new SplitText(".subtitle", {
      type: "lines",
    });
    splitTitle.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });
    gsap.from(splitTitle.chars, {
      yPercent: 80,
      duration: 2,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(splitLines.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      duration: 1.8,
      stagger: 0.08,
      delay: 1,
    });
    const textDown= gsap.timeline({
      scrollTrigger:{
        trigger:".subtitle",
        start:"top 50%",
        end:"bottom top",
        scrub:true,

      }
    })
    const leafAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    leafAnimation.to(".left-leaf", { y: -300 }, 0);
    leafAnimation.to(".right-leaf", { y: 300 }, 0);
    textDown.to(splitLines.lines,{
        opacity: 0,
      yPercent:300,
      ease: "expo.in",
      stagger: 0.06,

    })
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">Saitama</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="ml-40 space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">view coktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
