"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Uncial_Antiqua } from "next/font/google";

// upperside
// clip-path: polygon(18% 11%, 79% 21%, 100% 100%, 0% 100%);

// lowerside
// clip-path: polygon(0 0, 100% 0, 79% 81%, 19% 87%);

const nameFont = Uncial_Antiqua({
  weight: "400",
})


export default function Home() {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {

    gsap.to(".home-page",{
      backgroundColor: "#000000",
      scrollTrigger:{
        trigger: ".footer",
        start: "top bottom",
        end: "top top",
        scrub: 0.5
      }
    })

    gsap.to(".HeroImage",{
      clipPath: "polygon(0% 0%,100% 0%,100% 59%,0% 79%)",
      scrollTrigger:{
        trigger: ".HeroImage",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.5,
      }
    })

    const cards = gsap.utils.toArray(".projectCard")

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          clipPath: "polygon(18% 11%, 79% 21%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top top",
            scrub: 2,
          },
        }
      )

      gsap.fromTo(
        card,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 79% 81%, 19% 87%)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      )

    })


  })


  return (
    <div className="home-page overflow-hidden">
      <div className="HeroImage w-screen h-screen relative [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
        <Image
          src="/images/shinjan_page-0021.jpg"
          alt="Hero illustration"
          fill
        />
        <div className={`w-full flex justify-center mt-20 ${nameFont.className} absolute top-0 left-0 uppercase text-[10vw]`}>
          shinjan
        </div>
      </div>

      <div id="SelectedWorks" className="">

        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0007.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[5vw] text-[#ECDCC3]">laugh you man</h2>
        </div>

        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0033.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[5vw] text-[#ECDCC3]">Untitled</h2>
        </div>


        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0004.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[5vw] text-[#ECDCC3]">benign violation</h2>
        </div>


        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0031.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[5vw] text-[#ECDCC3]">untitled</h2>
        </div>


        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0012.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[5vw] text-[#ECDCC3]">tickle my funny bone</h2>
        </div>

      </div>

      <div id="footer" className="footer w-screen h-screen">

      </div>
    </div>
  );
}
