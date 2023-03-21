import React from 'react'
import '../component/ModalValidate.css'

const ModalValidate = (props) => {    

    if(!props.show) {
            return null
        }   
      
    return( 
        <div className='modal' onClick={props.onClose}>
            <div className='modalBody'>
                {props.message}
            </div> 
            <div className='closeButton' onClick={props.onClose} submitting="true">
                X
            </div>
        </div>
    )
}

export default ModalValidate