import Head from "next/head"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import { data } from "../public/lib/data"

function destination() {

    const [place, setPlace] = useState("Moon");

    const [dispData, setDispData] = useState("");

    useEffect(function changeDestination() {
        console.log("Entered use effect, data:", data);
        const filter = data["destinations"].filter(a => a.name === place);
        setDispData(filter)
        // console.log(dispData)
    }, [place])

    // console.log(dispData[0]?.images?.png)

    return (
        <div className='bg-destination bg-no-repeat bg-cover min-h-screen py-[40px] flex flex-col items-center justify-center'>
            <Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;400&family=Bellefair&display=swap" rel="stylesheet" />
			</Head>
            <Header />
            <div className='w-full grow flex flex-col gap-[5px] pt-[40px] xl:pt-0'>
                {/* <div className="max-w-6xl mx-auto border-2 border-blue-900" > */}
                <div className="justify-self-center xl:justify-self-start flex items-center justify-center xl:justify-start max-w-[64rem] w-full m-auto grow">
                    <p className='barlow-condensed text-[20px] xl:text-[28px] text-[#d0d6f9] tracking-widest'><span className="text-[#52555c]">01&nbsp;&nbsp;</span> PICK YOUR DESTINATION</p>
                </div>
                <div className='w-full xl:max-w-[58rem] grow m-auto flex flex-col gap-[40px] xl:grid xl:grid-cols-2 xl:gap-[95px] items-stretch justify-between'>
                    <div className='mt-[40px] xl:mt-0 flex items-center justify-center'>
                        {/* <div className="justify-self-start flex items-center max-w-[64rem] w-full m-auto grow">
                            <p className='barlow-condensed text-[28px] text-[#d0d6f9]'><span className="text-[#52555c]">01&nbsp;&nbsp;</span> PICK YOUR DESTINATION</p>
                        </div> */}
                        <img src = {dispData[0]?.images?.png} className="h-[150px] xl:h-[350px] object-contain hover:scale-105 transition-all duration-1000 hover:animate-pulse"/>
                    </div>
                    <div className='flex flex-col gap-[20px] xl:items-start items-center justify-center'>
                        <div className="flex gap-[20px]">
                            <div className={`${place == "Moon"?"header-menu-item-destination-selected":null} header-menu-item-destination`} onClick={()=>{setPlace("Moon")}}>
                                MOON
                            </div>
                            <div className={`${place == "Mars"?"header-menu-item-destination-selected":null} header-menu-item-destination`} onClick={()=>{setPlace("Mars")}}>
                                MARS
                            </div>
                            <div className={`${place == "Europa"?"header-menu-item-destination-selected":null} header-menu-item-destination`} onClick={()=>{setPlace("Europa")}}>
                                EUROPA
                            </div>
                            <div className={`${place == "Titan"?"header-menu-item-destination-selected":null} header-menu-item-destination`} onClick={()=>{setPlace("Titan")}}>
                                TITAN
                            </div>
                        </div>
                        <div className='bellefair text-[70px] xl:text-[80px] leading-[80px]'>{place.toUpperCase()}</div>
                        <p className="mx-[20px] xl:mx-0 text-center whitespace-wrap barlow-condensed text-[20px] text-[#d0d6f9] transition-all duration-1000">
                            {dispData[0]?.description}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-[20px] xl:gap-0 xl:flex-row w-full pt-[20px] border-t-[0.5px] border-t-[#52555c]">
                            <div className="flex-1 text-center  xl:text-left">
                                <p className="text-[10px] text-[#d0d6f9]">AVG. DISTANCE</p>
                                <p className="bellefair text-[24px]">{dispData[0]?.distance}</p>
                            </div>
                            <div className="flex-1 text-center xl:text-left">
                                <p className="text-[10px] text-[#d0d6f9]">EST. TRAVEL TIME</p>
                                <p className="bellefair text-[24px]">{dispData[0]?.travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
				
			</div>
        </div>
    )
}

export default destination