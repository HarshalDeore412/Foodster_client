import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import ReactDOM from "react-dom" 

const MODAL_STYLE = {
    position: 'absolute',
    top:'50%',
    left:"50%",
    backgroundColor: 'rgb(100,100,100)',
    transform: 'translate( -50% , -50%)',
    zIndex :10,
    height:'100%',
    width: '80%',
}

const OVERLAY_STYLE = {
    position: 'absolute',
    top: 0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0)',
    zIndex:10
}

export default function Modale({children , onClose}) {

    return ReactDOM.createPortal(
        <div>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLE} className=' text-white'  >

                <button onClick={onClose} className='absolute top-0 right-0  text-2xl '  > <TiDeleteOutline />  </button>
                {children}

            </div>
        </div>,document.getElementById('cart-root')
    )

}