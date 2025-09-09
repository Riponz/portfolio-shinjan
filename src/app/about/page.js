"use client"

import Image from 'next/image'
import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';


function About() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
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

        const lines1 = new SplitText(".desc-text1", { type: "lines", mask: "lines", absolute: true })
        const lines2 = new SplitText(".desc-text2", { type: "lines", mask: "lines", absolute: true })

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".desc",
        //         start: "top 50%"
        //     }
        // })
        gsap.from(".about-me", {
            y: -40,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".desc",
                start: "top 60%"
            }
        })
        gsap.from(lines1.lines, {
            y: -40,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".desc-text1",
                start: "top 60%"
            }
        })
        gsap.from(lines2.lines, {
            y: -40,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".desc-text2",
                start: "top 60%"
            }
        })
    })

    return (
        <>
            <div className='w-screen flex flex-col justify-center items-center'>


                <div className='self-image w-[95vw] h-[90vh] relative rounded-[50px] my-12 overflow-hidden'>
                    <Image
                        src="/images/image-shinjan.png"
                        alt="photo of Shinjan Mitra"
                        fill
                        className="object-cover" />
                    <div className='name text-[10vw] absolute bottom-0 right-0 p-2 leading-15 md:leading-20 bg-green-700 lg:bg-transparent lg:leading-45 text-[#ECDCC3] z-20'>SHINJAN</div>
                </div>

                <div className='w-[95vw] border-1 my-30'></div>

                <div className='desc text-[6vw] md:text-[2vw] leading-10 flex flex-col md:flex-row justify-center items-center gap-10 p-8 mb-10 w-[95vw]'>
                    <div className='about-me flex-1/3 py-5 px-8 w-full h-full flex justify-start items-start'>About Me</div>
                    <div className='flex flex-2/3 flex-col justify-center items-center gap-10'>

                        <p className='desc-text1 text-wrap'>
                            Hello, my name is Shinjan Mitra. I&apos;m an artist focusing on sculpture and painting, exploring how form, texture, and color can express emotion and tell stories. My work blends traditional techniques with experimentation, drawing inspiration from nature, human expression, and everyday life.</p>

                        <p className='desc-text2 text-wrap'>Outside the studio, I enjoy visiting galleries, studying artistic movements, and experimenting with new materials to bring fresh perspectives into my art. For me, creativity is both expression and discovery, a way to capture what words often cannot.</p>
                    </div>
                </div>

                {/* <div className='w-[95vw] border-1 my-30'></div */}


            </div>
            <div className='connect relative w-screen h-screen flex justify-center items-center'>


        <div className='inner-connect footer w-[85vw] h-[85vh] lg:border-4 lg:rounded-2xl flex flex-col justify-center items-center gap-5'>
          <div className='text-[8vw] lg:text-[20vh]'>
            Let&apos;s Connect!
          </div>
          <div className='button w-[8vh] hover:scale-150 transition-all h-[8vh] border-2 flex justify-center items-center rounded-full'>
            <CallMadeIcon />
          </div>
        </div>

        <div className='credits w-full h-[8vh] absolute bottom-0 left-0 flex justify-center items-center'>
          <div className='w-full h-full dev flex justify-center items-center uppercase lg:font-semibold text-xs lg:text-base'>Development: Diganta Biswas</div>
          <div className='w-full h-full copyright flex justify-center items-center uppercase lg:font-semibold text-sm lg:text-base'>Copyright: Shinjan Mitra</div>
        </div>

      </div>

        </>
    )
}

export default About