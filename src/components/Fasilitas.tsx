import { LiaMosqueSolid } from 'react-icons/lia'
import { TbSoccerField } from 'react-icons/tb'
import { FaClinicMedical } from 'react-icons/fa'

export default function FacilitieComponent() {
    return (
        <>
            <section
                className='w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-800'
                id='fasilitas'>
                <div className='container'>
                    <h2 className='text-2xl md:text-4xl  font-bold text-green-950 text-center mb-12'>
                        Fasilitas Sekolah
                    </h2>
                    <div className='container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-6'>
                        <div className='flex flex-col items-center space-y-3'>
                            <SchoolIcon className='h-10 w-10 text-green-900 dark:text-gray-400' />
                            <h3 className='text-lg font-semibold'>
                                Ruang kelas
                            </h3>
                            <p className='text-center text-gray-500 dark:text-gray-400'>
                                Ruang kelas yang nyaman dan modern, dilengkapi
                                dengan fasilitas belajar yang lengkap untuk
                                mendukung kegiatan belajar mengajar yang
                                optimal.
                            </p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <LiaMosqueSolid
                                size={40}
                                className='text-green-900'
                            />
                            <h3 className='text-lg font-semibold'>Musholla</h3>
                            <p className='text-center text-gray-500 dark:text-gray-400'>
                                Musholla yang bersih dan tenang, menyediakan
                                tempat ibadah yang nyaman bagi siswa dan staf
                                untuk menjalankan kewajiban atau beribadah.
                            </p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <BathIcon className='h-10 w-10 text-green-900 ' />
                            <h3 className='text-lg font-semibold'>Toilet</h3>
                            <p className='text-center text-gray-500 dark:text-gray-400'>
                                Toilet yang bersih dan terawat, dilengkapi
                                dengan fasilitas sanitasi yang lengkap untuk
                                menjaga kesehatan dan kebersihan seluruh siswa
                                maupun guru.
                            </p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <CaravanIcon className='h-10 w-10 text-green-900 dark:text-gray-400' />
                            <h3 className='text-lg font-semibold'>Kantin</h3>
                            <p className='text-center text-gray-500 dark:text-gray-400'>
                                Kantin yang menawarkan berbagai pilihan makanan
                                sehat dan lezat, memastikan kebutuhan gizi siswa
                                terpenuhi selama berada di sekolah.
                            </p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <TbSoccerField
                                size={40}
                                className='text-green-900'
                            />
                            <h3 className='text-lg font-semibold'>Lapangan</h3>
                            <p className='text-center text-gray-500 dark:text-gray-400'>
                                Lapangan yang luas dan multifungsi, ideal untuk
                                berbagai kegiatan siswa seperti bermain,
                                olahraga, senam dan upacara bendera.
                            </p>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <FaClinicMedical
                                size={40}
                                className='text-green-900'
                            />
                            <h3 className='text-lg font-semibold'>
                                Ruang kesehatan
                            </h3>
                            <p className='text-center text-gray-500 dark:text-gray-400'>
                                Ruang kesehatan dengan peralatan medis dasar dan
                                staf yang siap memberikan pertolakan pertama,
                                memastikan keselamatan dan kesehatan siswa
                                selama di sekolah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full py-12 md:py-24' id='alamat'>
                <div className='container px-4 md:px-6'>
                    <div className='container flex flex-col items-center space-y-4 '>
                        <div className='space-y-2'>
                            <h2 className='text-2xl text-green-950 font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                                Alamat
                            </h2>
                            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                                Jl. Ama Dsn Tegal Ds Pakandangan Barat Bluto
                                Sumenep 69466 Madura Jawa timur Indonesia
                            </p>
                        </div>
                        <div>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.2566026929103!2d113.75310392446592!3d-7.107312255934921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9dff5df3db903%3A0xc9e32be6ecab73a1!2sYayasan%20nurus%20sa&#39;adah!5e0!3m2!1sid!2sid!4v1715759954932!5m2!1sid!2sid'
                                width='1200'
                                height='600'
                                className='rounded-lg w-[300px] h-[200px] md:w-[700px]  md:h-[300px] lg:w-[1100px] lg:h-[500px]'
                                allowFullScreen={true}
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function CaravanIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <rect width='4' height='4' x='2' y='9' />
            <rect width='4' height='10' x='10' y='9' />
            <path d='M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2' />
            <circle cx='8' cy='19' r='2' />
            <path d='M10 19h12v-2' />
        </svg>
    )
}

function BathIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d='M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5' />
            <line x1='10' x2='8' y1='5' y2='7' />
            <line x1='2' x2='22' y1='12' y2='12' />
            <line x1='7' x2='7' y1='19' y2='21' />
            <line x1='17' x2='17' y1='19' y2='21' />
        </svg>
    )
}

function SchoolIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d='M14 22v-4a2 2 0 1 0-4 0v4' />
            <path d='m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2' />
            <path d='M18 5v17' />
            <path d='m4 6 8-4 8 4' />
            <path d='M6 5v17' />
            <circle cx='12' cy='9' r='2' />
        </svg>
    )
}
