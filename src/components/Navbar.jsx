import React from "react";
import { navLinks } from "../../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
  gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "buttom top",
      },
    })
   .fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex  items-center gap-3">
          <img src="././public/images/logo.png" alt="logo" />
          <p>Genoss</p>
        </a>
        <ul className="mr-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
