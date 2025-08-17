import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constant/";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 40%",
        end: "top top",
        scrub: true,
      },
    });
    tl.from(
      "#c-left-leaf",
      {
        x: -100,
        y: 100,
      },
      0
    );
    tl.from("#c-right-leaf", { x: 100, y: 100 }, 0);
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        sizes="2"
        src="/public/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/public/images/cocktail-right-leaf.png"
        alt="left-leaf"
        id="c-right-leaf"
      />
      <div className="list ">
        <div className="popular flex flex-col mx-30">
          <h2 className="">Most popular cocktails</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="space-x-20 ">
                  <h3>{name}</h3>
                  <p className="">
                    {country} |{detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="popular flex flex-col mx-30">
          <h2 className="">Most popular mockTailLists</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="space-x-20 ">
                  <h3>{name}</h3>
                  <p className="">
                    {country} |{detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
