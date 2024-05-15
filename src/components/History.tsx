import Image from 'next/image'

export default function HistoryComponent() {
    return (
        <main className='flex flex-col bg-green-950'>
            <section
                className='container mx-auto py-20 px-4 md:px-6'
                id='profile'>
                <div className='container grid grid-cols-1  gap-10'>
                    <div>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
                            Profile
                        </h2>
                        <p className='text-gray-400 leading-relaxed text-base md:text-lg lg:text-xl'>
                            Pada tahun 1997, Kiai Ahmad Dzikri Fathullah beserta
                            3 kemuka dari dusun, yakni dusun tegal pakandangan
                            bart, Dusun Bicabbi Pakandangan Barat dan Dusun
                            Muncar Pakandangan Tengah, berancana untuk membangun
                            yayasan Nurus Sa’adah dengan menjadikan Kiai Ahmad
                            Dzikri Fathullahsebgai ketua yayasan Nurus Sa’adah.
                            Pada tahun tersebut, Beliau mendirikan RA dan MI
                            Nurus Sa’adah yang bertempat di Dusun Tegal Desa
                            Pekandangan Barat Kecmatan Bluto Kabupaten Sumenep.
                            Pada 2009, dikarenakna adanya kerjasama antara
                            Indonesia dan Australia untuk mendirikan pendidikan
                            9 tahun (MI 6 tahun ditambah Mts 3 tahun), ketua
                            yayasan beserta jajaran para guru, berinisiatif
                            untuk turut serta mendirikan pendidikan 9 tahun.
                            Dalam hal ini, para wali murid kelas akhir yakni
                            kelas 6 MI diminta persetujuannya, agar program 9
                            tahun pendidikan tersebut dapat terlaksana.
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-green-50 py-20 px-4 md:px-6' id='visimisi'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='lg:container'>
                        <h2 className='text-2xl md:text-4xl text-green-950 font-bold mb-4'>
                            Visi & Misi
                        </h2>
                        <p className='text-gray-600 leading-relaxed mt-4 text-base md:text-lg lg:text-xl'>
                            Terwujudnya peserta didik yang beriman dan bertaqwa
                            kepada allah, berakhlaqul karimah, berprestasi,
                            bebas narkoba, dan cinta lingkungan.
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='bg-white p-6 rounded-lg shadow-lg shadow-green-900'>
                                <TargetIcon className='h-8 w-8 text-green-900' />
                                <h3 className='text-lg font-bold mt-2 text-green-950'>
                                    Kenyamanan
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Menciptakan madrasah berbudaya lingkungan
                                    yang aman dan nyaman sebagai tempat belajar
                                </p>
                            </div>
                            <div className='bg-white p-6 rounded-lg shadow-lg shadow-green-900'>
                                <RocketIcon className='h-8 w-8 text-green-900' />
                                <h3 className='text-lg font-bold mt-2 text-green-950'>
                                    Efektifitas
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Mengembangkan pembelajaran akademik yang
                                    efektif untuk mencapai berbgai prestasi
                                </p>
                            </div>
                            <div className='bg-white p-6 rounded-lg shadow-lg shadow-green-900'>
                                <HeartIcon className='h-8 w-8 text-green-900' />
                                <h3 className='text-lg font-bold mt-2 text-green-950'>
                                    Pembudayaan
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Menciptakan nilai-nilai Imtaq melalui
                                    pembiasaan dan pelatihan
                                </p>
                            </div>
                            <div className='bg-white p-6 rounded-lg shadow-lg shadow-green-900'>
                                <PuzzleIcon className='h-8 w-8 text-green-900' />
                                <h3 className='text-lg font-bold mt-2 text-green-950'>
                                    Pengembangan
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Mengembangkan kemampuan penguasaan Teknologi
                                    Informasi dalam layanan pendidikan dan
                                    kependidikan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className='container mx-auto py-20 px-4 md:px-6'
                id='kegiatan'>
                <div className='container mx-auto'>
                    <h2 className='text-2xl md:text-4xl  font-bold mb-8 text-white'>
                        Kegiatan
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-white rounded-lg shadow-lg'>
                            <Image
                                alt='kegitan beljar'
                                className='rounded-t-lg object-cover'
                                height='240'
                                src='/img/hadrah.avif'
                                style={{
                                    aspectRatio: '360/240',
                                    objectFit: 'cover',
                                }}
                                width='360'
                            />
                            <div className='p-6'>
                                <h3 className='text-lg font-bold text-green-950'>
                                    Kursus banjari
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    para siswa mengikuti kursus seni musik
                                    tradisional islam atau banjari dengan
                                    antusiasme yang tinggi.
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg shadow-lg'>
                            <Image
                                alt='kegitan pramuka'
                                className='rounded-t-lg object-cover'
                                height='240'
                                src='/img/pramuka.avif'
                                style={{
                                    aspectRatio: '360/240',
                                    objectFit: 'cover',
                                }}
                                width='360'
                            />
                            <div className='p-6'>
                                <h3 className='text-lg font-bold text-green-950'>
                                    Pramuka
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Para anggota pramuka sekolah belajar
                                    keterampilan dan kerjasama tim untuk
                                    pembentukan pribadi yang sehat, mandiri, dan
                                    bertanggung jawab.
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg shadow-lg'>
                            <Image
                                alt='kegitan agustusan'
                                className='rounded-t-lg object-cover'
                                height='240'
                                src='/img/rapat.avif'
                                style={{
                                    aspectRatio: '360/240',
                                    objectFit: 'cover',
                                }}
                                width='360'
                            />
                            <div className='p-6'>
                                <h3 className='text-lg font-bold text-green-950'>
                                    Rapat Guru
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Jajaran dewan guru berkumpul untuk
                                    berdiskusi tentang peningkatan kurikulum dan
                                    evaluasi siswa.
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg shadow-lg'>
                            <Image
                                alt='upacara bendera'
                                className='rounded-t-lg object-cover'
                                height='240'
                                src='/img/ibadah.avif'
                                style={{
                                    aspectRatio: '360/240',
                                    objectFit: 'cover',
                                }}
                                width='360'
                            />
                            <div className='p-6'>
                                <h3 className='text-lg font-bold text-green-950'>
                                    Sholat berjamaah
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Siswa dan guru melaksanakan sholat berjamaah
                                    dengan penuh khushu&apos; di mushollah
                                    sekolah.
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg shadow-lg'>
                            <Image
                                alt='Clubs and Organizations'
                                className='rounded-t-lg object-cover'
                                height='240'
                                src='/img/visitasi.avif'
                                style={{
                                    aspectRatio: '360/240',
                                    objectFit: 'cover',
                                }}
                                width='360'
                            />
                            <div className='p-6'>
                                <h3 className='text-lg font-bold text-green-950'>
                                    Visitasi Assesor
                                </h3>
                                <p className='text-gray-500 leading-relaxed mt-2'>
                                    Para ahli pendidikan memeriksa fasilitas dan
                                    metode pengajaran sekolah serta berdiskusi
                                    dengan guru pengajar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
        </svg>
    )
}

function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z' />
        </svg>
    )
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' />
            <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
            <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
            <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
        </svg>
    )
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <circle cx='12' cy='12' r='10' />
            <circle cx='12' cy='12' r='6' />
            <circle cx='12' cy='12' r='2' />
        </svg>
    )
}
