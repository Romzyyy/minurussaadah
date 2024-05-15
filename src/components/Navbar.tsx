import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet'
import Image from 'next/image'

export default function NavbarComponent() {
    return (
        <header className='relative'>
            <div className='fixed top-0  justify-around  h-16 w-screen z-50 bg-green-900/95 transition-colors px-4 shadow-sm md:px-6 flex items-center'>
                <Link className='flex items-center gap-2' href='#'>
                    <Image
                        alt='Logo'
                        src='/img/logo.avif'
                        width={40}
                        height={40}
                        className='h-10 w-10 mb-1'
                    />
                    <span className='text-lg font-medium text-white'>
                        Yayasan Nurus Sa&apos;adah
                    </span>
                </Link>
                <nav className='hidden items-center gap-6 font-medium text-gray-300 md:flex'>
                    <Link className='hover:text-amber-500' href='#beranda'>
                        Beranda
                    </Link>
                    <Link className='hover:text-amber-500' href='#profile'>
                        Profile
                    </Link>
                    <Link className='hover:text-amber-500' href='#visimisi'>
                        Visi & Misi
                    </Link>
                    <Link className='hover:text-amber-500' href='#kegiatan'>
                        Kegiatan
                    </Link>
                    <Link className='hover:text-amber-500' href='#fasilitas'>
                        Fasilitas
                    </Link>
                    <Link className='hover:text-amber-500' href='#alamat'>
                        Alamat
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            className='md:hidden'
                            size='icon'
                            variant='outline'>
                            <MenuIcon className='h-6 w-6' />
                            <span className='sr-only'>
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='right' className='bg-green-950'>
                        <div className='grid gap-4 p-4'>
                            <Link
                                className='font-medium hover:underline text-amber-500'
                                href='#beranda'>
                                Beranda
                            </Link>
                            <Link
                                className='font-medium hover:underline text-amber-500'
                                href='#profile'>
                                Profile
                            </Link>
                            <Link
                                className='font-medium hover:underline text-amber-500'
                                href='#visimisi'>
                                Visi & Misi
                            </Link>
                            <Link
                                className='font-medium hover:underline text-amber-500'
                                href='#kegiatan'>
                                Kegiatan
                            </Link>
                            <Link
                                className='font-medium hover:underline text-amber-500'
                                href='#fasilitas'>
                                Fasilitas
                            </Link>
                            <Link
                                className='font-medium hover:underline text-amber-500'
                                href='#alamat'>
                                Alamat
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
    )
}
