import Head from "next/head"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import { data } from "../public/lib/data"

function crew() {


    const [crewMemberName, setCrewMemberName] = useState("Douglas Hurley")
    console.log(`bg-${crewMemberName.split(" ")[0].toLowerCase()}`)
    // const [crewMember, setCrewMember] = useState(data.crew[0])
    const [crewMember, setCrewMember] = useState(data.crew.filter(a => a.name === crewMemberName)[0])
    // console.log(data)
    // console.log(crewMember?.name?.split(" ")?.toLowerCase())


    useEffect(() => {
        setCrewMember(data.crew.filter(a => a.name === crewMemberName)[0])
    }, [crewMemberName])

    return (
        <div className='bg-crew bg-no-repeat bg-cover min-h-screen pt-[40px] flex flex-col gap-[40px] items-center'>
            <Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;400&family=Bellefair&display=swap" rel="stylesheet" />
			</Head>
            <Header />
            <div className='flex flex-col xl:max-w-[64rem] w-full grow xl:grid xl:grid-cols-2 xl:gap-[40px]'>
                {/* <div className="max-w-6xl mx-auto border-2 border-blue-900" > */}
                
                <div className="w-full xl:max-w-[90%] flex flex-col justify-center items-center xl:items-start xl:justify-between px-[20px] xl:px-0 pb-[100px] gap-[40px] xl:gap-[0]">
                    <p className='barlow-condensed text-[20px] xl:text-[28px] text-[#d0d6f9] tracking-widest'><span className="text-[#52555c]">02&nbsp;&nbsp;</span> MEET YOUR CREW</p>
                    <div className="flex flex-col gap-[40px] xl:hidden">
                        <div className=" border-b-[1px] border-[#52555c]"><img src = {`${"/assets/crew/image-"+crewMemberName.toLowerCase().split(" ").join("-")+".png"}`} className="w-[60%] m-auto" alt="" /></div>
                        <div className="flex items-center justify-center xl:hidden gap-[35px]">
                        {
                            data.crew.map((member) => (
                                <div key = {member.name} className={`${crewMemberName===member.name?"bg-white":null} h-[10px] w-[10px] rounded-full bg-[#ffffff59] hover:bg-white`} onClick={() => {setCrewMemberName(member.name)}}></div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="flex grow items-center xl:items-start justify-center flex-col gap-[20px]">
                        <p className="bellefair text-[24px] xl:text-[38px] text-[#787a80] leading-[15px]">{crewMember.role.toUpperCase()}</p>
                        <p className="bellefair text-[28px] xl:text-[54px] text-center xl:text-left">{crewMember.name.toUpperCase()}</p>
                        <p className="barlow-condensed text-[#9da2be] text-[20px] xl:text-[26px] text-center xl:text-left">
                            {crewMember.bio}
                        </p>
                    </div>
                    <div className="hidden xl:flex xl:gap-[35px]">
                        {
                            data.crew.map((member) => (
                                <div key = {member.name} className={`${crewMemberName===member.name?"bg-white":null} h-[15px] w-[15px] rounded-full bg-[#ffffff59] hover:bg-white`} onClick={() => {setCrewMemberName(member.name)}}></div>
                            ))
                        }
                    </div>
                </div>
                <div className={`${crewMemberName.split(" ")[0].toLowerCase()} hidden xl:block bg-no-repeat bg-contain bg-center bg-bottom`}></div>
                {/* <div className="border-2 border-red-900 grid grid-cols-1">
                    <div>
                        <img src={crewMember.images.png.slice(1)} className="object-fit" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default crew
