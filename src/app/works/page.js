"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';

function Works() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const workCards = gsap.utils.toArray(".workCards")

        workCards.forEach((workCard) => {

            const image = workCard.querySelector(".project-image")
            const title = workCard.querySelector(".project-title")


            if (image) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: workCard,
                        start: "top 80%",
                        end: "bottom top",
                        scrub: true
                    }
                })
                    .from(image, { height: "80px", opacity: 0 })
                    .to(image, { height: "80px", opacity: 0 })
            }

            if (title) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: workCard,
                        start: "top bottom",
                        end: "top -100%",
                        scrub: true,
                    }
                })
                    .from(title, { y: -30, opacity: 0 })
                    .to(title, { y: 100, opacity: 0 })
            }

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

        // gsap.from(".dev, .copyright", {
        //     opacity: 0,
        //     scale: 1.3,
        //     delay: 1,
        //     scrollTrigger: {
        //         trigger: ".credits",
        //         start: "top bottom",
        //         end: "bottom bottom",
        //         scrub: true
        //     }
        // })
    })

    const imageNumber = ["02", "05", "07", "09", "11", "13", "16", "18", "20", "21", "24", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"]
    const imageTitle = [

        "Benign Violation",
        "Self Portrait",
        "Laugh You Man",
        "Art Police",
        "Tickle My Funny Bone",
        "Full Life Study",
        "When a Chimp Found a Skull",
        "Portrait Study",
        "Untitled",
        "Untitled",
        "Symphony",
        "Ubermensch",
        "Half Life Study",
        "Institution",
        "Untitled",
        "Untitled",
        "Untitled",
        "Untitled",
        "Untitled",
        "Untitled",
        "Untitled"
    ];
    return (
        <div className='w-screen'>

            {
                imageNumber.map((image, index) => {
                    return (
                        <div key={index} className='workCards w-screen h-screen relative flex justify-center items-center'>
                            <div className='project-image p-2 relative w-[58%] h-[65%] overflow-hidden rounded-4xl'>
                                <Image
                                    src={`/images/shinjan_page-00${image}.jpg`}
                                    alt="Hero illustration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className='project-title absolute top-[50%] left-[10%] text-[6vw] overflow-hidden'>{imageTitle[index]}</div>
                        </div>
                    )
                })
            }
            <div className='connect relative w-screen h-screen flex justify-center items-center'>


                <div className='inner-connect w-[85vw] h-[85vh] border-4 rounded-2xl flex flex-col justify-center items-center gap-5'>
                    <div className='text-[20vh]'>
                        Let&apos;s Connect!
                    </div>
                    <div className='button w-[8vh] hover:scale-150 transition-all h-[8vh] border-2 flex justify-center items-center rounded-full'>
                        <CallMadeIcon />
                    </div>
                </div>

                <div className='credits w-full h-[8vh] absolute bottom-0 left-0 flex justify-center items-center'>
                    <div className='w-full h-full dev flex justify-center items-center uppercase font-semibold'>Development: Diganta Biswas</div>
                    <div className='w-full h-full copyright flex justify-center items-center uppercase font-semibold'>Copyright: Shinjan Mitra</div>
                </div>

            </div>
        </div>
    )
}

export default Works