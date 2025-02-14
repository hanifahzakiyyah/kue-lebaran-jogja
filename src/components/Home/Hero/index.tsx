"use client"
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {

    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                            Kue Kering Lebaran Homemade Chasana Jogja
                        </h1>
                        <p className='text-black/80 dark:text-white/80 lg:text-lg font-normal mb-10 lg:text-start text-center'>Lebaran sudah dekat! Saatnya menikmati kue kering premium khas Lebaran yang lezat. Kami menyediakan kastengel, nastar, dan putri salju homemade dengan bahan berkualitas tinggi, tanpa pengawet, dan dibuat dengan penuh cinta.</p>
                        <div className='md:flex align-middle justify-center lg:justify-start'>
                            <Link href='#cook-section' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-3 px-5 bg-orange-800 hover:text-primary lg:px-14 border border-primary hover:bg-transparent'>Pesan Sekarang</Link>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
                            <Image src={'/images/hero/kastengel-chasana-jogja.webp'} alt="kastengel-chasana-jogja" width={68} height={68} />
                            <p className='text-lg font-normal'>rasakan renyahnya <br /> nikmati lezatnya</p>
                        </div>
                        <Image src="/images/hero/owner-chasana-jogja.webp" alt="owner-chasana-jogja" width={1000} height={805} priority/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
