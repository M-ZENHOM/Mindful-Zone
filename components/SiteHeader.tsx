import type { FC } from 'react'
import { ModeToggle } from './ModeToggle'
import Wrapper from './Wrapper'
import { Icons } from './Icons'
import Link from 'next/link'

const SiteHeader: FC = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <Wrapper className='flex justify-between items-center py-4'>
                <Link href='/' className='flex items-center space-x-3'>
                    <Icons.logo className="h-10 w-10  -rotate-90" />
                    <span className="inline-block font-bold">Mindful Zone</span>
                </Link>
                <div className='flex items-center space-x-5'>
                    <Link href='https://github.com/M-ZENHOM' target='_blank'>
                        <Icons.gitHub className="h-6 w-6" />
                    </Link>
                    <ModeToggle />
                </div>
            </Wrapper>
        </header>
    )
}

export default SiteHeader