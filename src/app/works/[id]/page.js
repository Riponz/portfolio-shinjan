"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image';

function WorkDetail() {

    const artworks = {
        1: {
            pictures: ["shinjan_page-0001", "shinjan_page-0002", "shinjan_page-0003", "shinjan_page-0004"],
            medium: ["Bronze"],
            size: '14"x5"x5.5"'
        },
        2: {
            pictures: ["shinjan_page-0005", "shinjan_page-0006"],
            medium: ["Terracota", "plaster"],
            size: '15"x7"x7"'
        },
        3: {
            pictures: ["shinjan_page-0007", "shinjan_page-0008"],
            medium: ["Terracota"],
            size: '19"x11"x10"'
        },
        4: {
            pictures: ["shinjan_page-0009", "shinjan_page-0010"],
            medium: ["wood", "paint"],
            size: '25"x5.5"x5"'
        },
        5: {
            pictures: ["shinjan_page-0011", "shinjan_page-0012"],
            medium: ["chicken bones", "cigarette packs", "glass jar"],
            size: '14"x5"x5.5"'
        },
        6: {
            pictures: ["shinjan_page-0013", "shinjan_page-0014", "shinjan_page-0015"],
            medium: ["clay"],
            size: '34"x32"35"'
        },
        7: {
            pictures: ["shinjan_page-0016", "shinjan_page-0017"],
            medium: ["terracotta"],
            size: '26"x13"x12"'
        },
        8: {
            pictures: ["shinjan_page-0018", "shinjan_page-0019"],
            medium: ["clay"],
            size: '17"x11"x10"'
        },
        9: {
            pictures: ["shinjan_page-0020"],
            medium: ["wood"],
            size: '71"x8"x7"'
        },
        10: {
            pictures: ["shinjan_page-0021", "shinjan_page-0022", "shinjan_page-0023"],
            medium: ["ceramic stoneware"],
            size: '36"x12"x6.5"'
        },
        11: {
            pictures: ["shinjan_page-0024", "shinjan_page-0025"],
            medium: ["wood assemblage"],
            size: '33"x12"x14"'
        },
        12: {
            pictures: ["shinjan_page-0026"],
            medium: ["fibreglass"],
            size: '29"x7"x6"'
        },
        13: {
            pictures: ["shinjan_page-0027"],
            medium: ["fibreglass"],
            size: '31"x8"x7"'
        },
        14: {
            pictures: ["shinjan_page-0028"],
            medium: ["fibreglass"],
            size: '18"x18"'
        },
        15: {
            pictures: ["shinjan_page-0029"],
            medium: ["acrylic on canvas"],
            size: '60"x48"'
        },
        16: {
            pictures: ["shinjan_page-0030"],
            medium: ["acrylic on canvas"],
            size: '60"x60"'
        },
        17: {
            pictures: ["shinjan_page-0031"],
            medium: ["acrylic on canvas"],
            size: '16"x20"'
        },
        18: {
            pictures: ["shinjan_page-0032"],
            medium: ["acrylic on canvas"],
            size: '20"x24"'
        },
        19: {
            pictures: ["shinjan_page-0033"],
            medium: ["acrylic on canvas"],
            size: '16"x20"'
        },
        20: {
            pictures: ["shinjan_page-0034"],
            medium: ["acrylic on canvas"],
            size: '16"x20"'
        },
        21: {
            pictures: ["shinjan_page-0035"],
            medium: ["acrylic on canvas"],
            size: '15"x12"'
        }
    };



    const params = useParams()
    const param = params.id

    const id = param.split('-')[0]
    const title = param.split('-').slice(1).join(" ")
    return (
        <>

            <div className='title mt-30 md:mt-40 mx-10 w-screen h-max font-semibold text-3xl md:text-[10vw] lg:text-[12vw] text-left leading-10 md:leading-50 break-words'>{title}</div>
            <div className='details flex flex-col md:flex-row gap-5 justify-between items-center mx-10 my-5 md:m-10 py-2 md:py-10 px-5 border-y-2'>
                <div className='medium flex justify-between items-center gap-2 uppercase font-semibold'>{
                    artworks[id].medium.map(med => {
                        return (
                            <div className='text-center'>{med}</div>
                        )
                    })
                }</div>
                <div className='size font-semibold'>{artworks[id].size}</div>
            </div>
            <div className='photos mx-10 flex flex-col justify-center items-center gap-10'>
                {
                    artworks[id].pictures.map(pic => {
                        return (
                            <div className="relative">
                                <Image
                                    src={`/images/${pic}.jpg`}
                                    alt="Hero illustration"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-auto w-auto"
                                />
                            </div>

                        )
                    })
                }
            </div>


        </>
    )
}

export default WorkDetail