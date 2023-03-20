import React, { useRef } from 'react'
import './toastify.css'

const Toastify = ({msg}) => {
    const ref = useRef(0)
    React.useEffect(() => {
        console.log("ref", ref)
        const close = setTimeout(() => {
            ref.current.classList.remove('animation-rtl')
            ref.current.classList.add('animation-hidden')
        }, 3000)

        return () => clearTimeout(close)
    }, [])
    return (
        <div className='toastify animation-rtl' ref={ref}>{msg}</div>
    )
}

export default Toastify