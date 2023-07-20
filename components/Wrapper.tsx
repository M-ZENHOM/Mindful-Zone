import { FC } from 'react'

interface WrapperProps {
    children: React.ReactNode
    className?: string
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
    return <div className={`${className} w-full max-w-[1500px] mx-auto p-2`}>{children}</div>
}

export default Wrapper