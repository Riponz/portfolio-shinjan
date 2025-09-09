"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Uncial_Antiqua } from "next/font/google";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import CallMadeIcon from '@mui/icons-material/CallMade';

// upperside
// clip-path: polygon(18% 11%, 79% 21%, 100% 100%, 0% 100%);

// lowerside
// clip-path: polygon(0 0, 100% 0, 79% 81%, 19% 87%);

const nameFont = Uncial_Antiqua({
  weight: "400",
})


export default function Home() {

  gsap.registerPlugin(ScrollTrigger, SplitText)

  const quoteRef = useRef()
  const authorRef = useRef()

  useGSAP(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "40% bottom",
        end: "top top",
        scrub: 1
      }
    })

    const quote = new SplitText(".quote", { type: "words,chars", mask: "chars" })
    const author = new SplitText(".author", { type: "words,chars", mask: "chars" })

    timeline.from(quote.chars, {
      y: 40,
      opacity: 0,
      stagger: 1
    })

    timeline.from(author.chars, {
      y: 40,
      opacity: 0,
      stagger: 1
    })

    gsap.to(".home-page", {
      backgroundColor: "#000000",
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "top top",
        scrub: 0.5
      }
    })

    gsap.to(".HeroImage", {
      clipPath: "polygon(0% 0%,100% 0%,100% 59%,0% 79%)",
      scrollTrigger: {
        trigger: ".HeroImage",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.5,
      }
    })

    const cards = gsap.utils.toArray(".projectCard")

    cards.forEach((card) => {

      const project = card.querySelector(".project-title")
      const split = new SplitText(project, { type: "words,chars", mask: "chars", absolute: true })

      gsap.from(split.chars, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: project,
          start: "50% bottom",
          end: "50% 50%",
          scrub: 2
        }
      })


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

    gsap.from(".inner-connect", {
      width: "100vw",
      height: "100vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".connect",
        start: "start bottom",
        end: "top top",
        scrub: true
      }
    })


  })


  return (
    <div className="home-page overflow-hidden">

      <div className="HeroImage w-screen h-screen relative [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
        <Image
          src="/images/shinjan_page-0021.jpg"
          alt="Hero illustration"
          fill
          className="object-cover z-[-1] md:z-0"
        />
        <Image
          src="/images/shinjan_page-0022.jpg"
          alt="Hero illustration"
          fill
          className="object-cover z-0 md:z-[-1]"
        />
        <div className={`w-full flex justify-center mt-20 ${nameFont.className} absolute top-0 left-0 uppercase text-[15vw] md:text-[10vw]`}>
          project
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
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[8vw] md:whitespace-pre text-[5vw] text-[#ECDCC3] project-title">laugh&nbsp;you&nbsp;man</h2>
        </div>

        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0033.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[8vw] md:text-[5vw] text-[#ECDCC3] project-title">Untitled</h2>
        </div>


        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0004.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[8vw] md:text-[5vw] text-[#ECDCC3] project-title">benign&nbsp;violation</h2>
        </div>


        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0031.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[8vw] md:text-[5vw] text-[#ECDCC3] project-title">untitled</h2>
        </div>


        <div className="projectCard [clip-path:polygon(18%_11%,79%_21%,100%_100%,0%_100%)] w-screen h-[120vh] relative">
          <Image
            src="/images/shinjan_page-0012.jpg"
            alt="Hero illustration"
            fill
            className="object-cover"
          />
          <h2 className="w-full h-full absolute top-0 left-0 flex justify-center items-center uppercase text-[8vw] md:text-[5vw] text-[#ECDCC3] project-title">tickle&nbsp;my&nbsp;funny&nbsp;bone</h2>
        </div>

      </div>

      {/* <div id="footer" className="footer relative w-screen h-screen text-white flex flex-col justify-center items-center gap-5 shrink-0 flex-nowrap">
        <div ref={quoteRef} className="quote text-xl">“Every artist dips his brush in his own soul, and paints his own nature into his pictures.”</div>
        <div ref={authorRef} className="author"><i>- Henry Ward Beecher</i></div>
        <div className="credits absolute bottom-0 left-0 w-full h-max flex justify-center items-center p-10 uppercase">
          <div className="designed-by flex flex-col justify-center items-start w-full">
            <div className="text-sm">Development</div>
            <div className="font-semibold">Diganta Biswas</div>
          </div>
          <div className="copyright flex flex-col justify-center items-end w-full">
            <div className="text-sm">Copyright</div>
            <div className="font-semibold">Shinjan Mitra</div>
          </div>
        </div>
      </div> */}

      <div className='connect relative w-screen h-screen flex justify-center items-center text-white'>


        <div className='inner-connect footer w-[85vw] h-[85vh] lg:border-4 lg:rounded-2xl flex flex-col justify-center items-center gap-5'>
          <div className='text-[8vw] lg:text-[20vh]'>
            Let&apos;s Connect!
          </div>
          <div className='button w-[8vh] hover:scale-150 transition-all h-[8vh] border-2 flex justify-center items-center rounded-full'>
            <CallMadeIcon />
          </div>
        </div>

        <div className='credits w-full h-[8vh] absolute bottom-0 left-0 flex justify-center items-center'>
          <div className='w-full h-full dev flex justify-center items-center uppercase lg:font-semibold text-sm lg:text-base'>Development: Diganta Biswas</div>
          <div className='w-full h-full copyright flex justify-center items-center uppercase lg:font-semibold text-sm lg:text-base'>Copyright: Shinjan Mitra</div>
        </div>

      </div>
    </div>
  );
}