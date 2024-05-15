import Link from 'next/link'
import { MdOutlineMail } from 'react-icons/md'

export default function FooterComponent() {
    return (
        <footer className='bg-green-950/95 py-8'>
            <div className=' container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:gap-0'>
                <div className='flex flex-wrap justify-center gap-4 text-sm font-medium'>
                    <p className='text-gray-300 text-base'>
                        Copyright © 2023 Yayasan Nurus Sa&apos;adah
                    </p>
                </div>
                <div className='flex items-center gap-4'>
                    <Link
                        className='flex items-center gap-2 text-gray-300  dark:text-gray-400'
                        href='minurussaadah509@gmail.com'>
                        <MdOutlineMail size={28} />
                        <p className='hover:text-blue-600'>
                            minurussaadah509@gmail.com
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
