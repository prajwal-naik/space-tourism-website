import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Header from '../components/Header'
import { currentPageState } from '../recoil';
// import styles from '../styles/Home.module.css'

export default function Home() {

	

	return (
		<div className='bg-home bg-no-repeat bg-cover min-h-screen py-[40px] flex flex-col items-center justify-center'>
			<Head>
				<title>SpaceHecks</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;400&family=Bellefair&display=swap" rel="stylesheet" />
			</Head>

			{/* <div className='w-full'>
				<div className='max-w-[85rem] ml-auto flex gap-[50px] items-center justify-between'>
					<img src = "/assets/shared/logo.svg" className = "h-[50px]" />

						
					<div className='bg-[#ffffff13] w-[60%] backdrop-blur-[2px] flex items-center justify-evenly  relative px-[80px] pr-[160px] barlow-condensed'>
						<div className='bg-slate-400 h-[1px] w-[50%] absolute left-[-46%]'></div>
						
						<div className='header-menu-item'>
							<p><b>00</b> HOME</p>
						</div>
						<div className='header-menu-item'>
							<p><b>01</b> DESTINATION</p>
						</div>
						<div className='header-menu-item'>
							<p><b>02</b> CREW</p>
						</div>
						<div className='header-menu-item'>
							<p><b>03</b> TECHNOLOGY</p>
						</div>
					</div>
				</div>
			</div> */}

			<Header />
			<div className='w-full grow flex pt-[40px] xl:pt-0'>
				<div className='xl:max-w-4xl grow m-auto flex flex-col gap-[40px] xl:grid xl:grid-cols-2 xl:gap-[110px] items-center justify-center xl:justify-around'>
					<div className='flex flex-col px-[40px] items-center xl:items-start justify-center xl:justify-start'>
						<p className='barlow-condensed text-[24px] xl:text-[28px] text-[#d0d6f9]'>SO, YOU WANT TO TRAVEL TO</p>
						<p className='bellefair text-[70px] xl:text-[100px]'>SPACE</p>
						<p className='barlow-condensed text-[20px] text-[#d0d6f9]'>
							Let???s face it; if you want to go to space, you might as well genuinely go to 
							outer space and not hover kind of on the edge of it. Well sit back, and relax 
							because we???ll give you a truly out of this world experience!
						</p>
					</div>
					<Link href="/destination">
						<div className='xl:border-[80px] xl:border-transparent xl:hover:border-[#ffffff2f] rounded-full transition-all duration-500 cursor-pointer'>
							<p className=' px-[50px] py-[92px] bg-white rounded-full bellefair text-[30px] text-[#0B0D17] shadow-6xl'>
								EXPLORE
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
