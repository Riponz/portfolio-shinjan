"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React from 'react'

function page() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const workCards = gsap.utils.toArray(".workCards")

        workCards.forEach((workCard) => {
            
            const image = workCard.querySelector(".project-image")
            const title = workCard.querySelector(".project-title")

            gsap.from(image, {
                height:"80px",
                opacity: 0,
                scrollTrigger:{
                    trigger: workCard,
                    start: "top 70%",
                    end: "top top",
                    scrub: true,
                    markers: true
                }
            })

            gsap.to(image, {
                opacity: 0,
                height:"80px",
                scrollTrigger:{
                    trigger: workCard,
                    start: "top top",
                    end: "top -200%",
                    scrub: true,
                    markers: true
                }
            })

            gsap.from(title, {
                y:-30,
                opacity:0,
                scrollTrigger:{
                    trigger: workCard,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    markers: true
                }
            })

            gsap.to(title, {
                y: 100,
                opacity: 0,
                height:"80px",
                scrollTrigger:{
                    trigger: workCard,
                    start: "top top",
                    end: "top -100%",
                    scrub: true,
                    markers: true
                }
            })

        })
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
                    // console.log(index)
                    return (
                        <div className='workCards w-screen h-screen relative flex justify-center items-center'>
                            <div className='project-image p-2 relative w-[58%] h-[65%] overflow-hidden rounded-4xl'>
                                <Image
                                    src={`/images/shinjan_page-00${image}.jpg`}
                                    // src={`/images/test-image.jpg`}
                                    alt="Hero illustration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className='project-title absolute top-[50%] left-[10%] text-[7vw] overflow-hidden'>{imageTitle[index]}</div>
                        </div>
                    )
                })
            }


            {/* <div className='w-screen h-screen relative flex justify-center items-center'>
                <div className='image relative w-[58%] h-[65%] overflow-hidden rounded-4xl'>
                    <Image
                        src="/images/shinjan_page-0012.jpg"
                        alt="Hero illustration"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className='project-title absolute top-[50%] left-[10%] text-[7vw]'>Tickling My Funny Bone</div>
            </div> */}

            <div className='w-screen h-screen'>

            </div>
        </div>
    )
}

export default page

// Title image - 2, 5, 7, 9, 11, 13, 16, 18, 20, 21, 24, 26, 27, 28, 29, 30, 31, 32 ,33, 34, 35
{/* <div className='w-full h-[70vh] flex justify-center items-center'>
            <div className='w-full h-full shrink-0 bg-pink-400'></div>
            <div className='w-full h-full shrink-0 bg-cyan-400'></div>
        </div> */}
// Untitled