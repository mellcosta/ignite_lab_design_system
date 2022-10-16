import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

//TextInput.Root
export interface TextInputRootProps{
    children: ReactNode;
}

export function TextInputRoot( props: TextInputRootProps ) {
    return (
        <div className=' flex gap-3 items-center py-4 px-3 bg-gray-800 w-full rounded  focus-within:ring-2 ring-cyan-300 '>
            {props.children}
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root'

//TextInput.Icon
export interface TextInputIconProps{
    children: ReactNode;
}

export function TextInputIcon( props: TextInputIconProps ) {
    return (
        <Slot className=' w-6 h-6 text-gray-400' >
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInput.Icon'

//TextInput.El
export interface TextInputElProps  extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputEl( props: TextInputElProps ) {
    return(
            <input 
                className='flex-1 bg-transparent text-gray-100 text-xs placeholder:text-gray-400 outline-none'
                {...props}
            />
    )
}
TextInputEl.displayName = 'TextInput.El'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputEl,
    Icon: TextInputIcon,
}