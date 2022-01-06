import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentPageState } from "../recoil";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Header() {

    // const currentPage = useRecoilValue(currentPageState);
	// const setCurrentPage = useSetRecoilState(currentPageState);
    const router = useRouter();

    const [modal, setModal] = useState(false);

    return (
        <div className='w-full'>
			<div className='px-[20px] xl:px-[0] xl:max-w-[85rem] ml-auto flex gap-[50px] items-center justify-between'>
				<img src = "/assets/shared/logo.svg" className = "h-[50px]" />
                <HiMenu className="xl:hidden cursor-pointer fill-[#d0d6f9]" size={"40px"} onClick={()=>{setModal(true)}}/>

                <div className={`${modal?"block":"hidden"} bg-[#ffffff13] backdrop-blur-[10px] fixed top-0 h-screen overflow-scroll scrollbar-hide right-0 w-max`}>
                    <div className="text-right flex items-center justify-end ">
                        <AiOutlineClose className="mt-[30px] mr-[20px] fill-[#fff]" size={"25px"} onClick={()=>{setModal(false)}} />

                    </div>
                    <Link href = "/">
                        <div className={`header-menu-item px-[10px] py-[10px]`} >
                            <p><b>00</b> HOME</p>
                        </div>
                    </Link>

                    <Link href = "/destination">
                        <div className={`header-menu-item  px-[10px] py-[10px]`} >
                            <p><b>01</b> DESTINATION</p>
                        </div>
                    </Link>
                    <Link href = "/crew">
                        <div className={`header-menu-item  px-[10px] py-[10px]`} >
                            <p><b>02</b> CREW</p>
                        </div>
                    </Link>
                    <Link href = "/technology">
                        <div className={`header-menu-item  px-[10px] py-[10px]`} >
                            <p><b>03</b> TECHNOLOGY</p>
                        </div>
                    </Link>
                    
                </div>

				{/* <div className='grow flex items-center'> */}
				
				<div className='bg-[#ffffff13] w-[60%] backdrop-blur-[2px] hidden xl:flex items-center justify-evenly  relative px-[80px] pr-[160px] barlow-condensed'>
					<div className='bg-slate-400 h-[1px] w-[50%] absolute left-[-46%]'></div>
					
                    <Link href = "/">
                        <div className={`header-menu-item ${router.pathname == "/"?"header-menu-item-selected":null}`} >
                            <p><b>00</b> HOME</p>
                        </div>
                    </Link>

                    <Link href = "/destination">
                        <div className={`header-menu-item ${router.pathname == "/destination"?"header-menu-item-selected":null}`} >
                            <p><b>01</b> DESTINATION</p>
                        </div>
                    </Link>
                    <Link href = "/crew">
                        <div className={`header-menu-item ${router.pathname == "/crew"?"header-menu-item-selected":null}`} >
                            <p><b>02</b> CREW</p>
                        </div>
                    </Link>
                    <Link href = "/technology">
                        <div className={`header-menu-item ${router.pathname == "/technology"?"header-menu-item-selected":null}`} >
                            <p><b>03</b> TECHNOLOGY</p>
                        </div>
                    </Link>
				</div>
				{/* </div> */}
			</div>
		</div>
    )
}

export default Header
