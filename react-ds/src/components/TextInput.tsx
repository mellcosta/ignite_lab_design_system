import { clsx } from 'clsx'

export interface TextInputProps {
    
}

export function TextInput( { }: TextInputProps ) {
    return(
        <input 
            className= {clsx(
                'py-4 px-3 bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 w-full ',
            )}/>
    )
}