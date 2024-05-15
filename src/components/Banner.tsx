import Image from 'next/image'

export default function BannerComponent() {
    return (
        <>
            <section className='w-full' id='beranda'>
                <div className='relative h-[500px] md:h-[700px] lg:h-[900px] overflow-hidden'>
                    <Image
                        alt='Hero Image'
                        className='absolute inset-0 h-full w-full object-cover'
                        height={1080}
                        src='/img/hero.avif'
                        style={{
                            aspectRatio: '1920/1080',
                            objectFit: 'cover',
                        }}
                        width={1920}
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-green-950 md:absolute lg:absolute' />
                    <div className='relative z-10 mx-auto gap-0 md:gap-3 lg:gap-4 flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-gray-50'>
                        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl text-green-50'>
                            YAYASAN NURUS SA&apos;ADAH
                        </h1>
                        <h2 className='text-lg font-semibold tracking-tight sm:text-3xl md:text-5xl'>
                            MADRASAH IBTIDAIYAH NURUS SA&apos;ADAH
                        </h2>
                        <p className='text-gray-50 max-w-xl mx-auto text-sm md:text-xl dark:text-gray-400'>
                            &quot;Terwujudnya peserta didik yang beriman dan
                            bertaqwa kepada allah, berakhlaqul karimah,
                            berprestasi, bebas narkoba, dan cinta
                            lingkungan.&quot;
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
