import React, { useState } from 'react'

const Attention = () => {

    let [attention, setAttention] = useState(true)

    const handleHide =() =>{
        setAttention(false)
    }

    return (
        <div className='attention_main_container'>
            {attention?
            <div className='attention_container'>
                <div className='attention_main_div'>
                    <p className='close_btn' onClick={handleHide} >&times;</p>
                    <div className='attention_div'>
                        <h4 className='attention_head'>Attention Please:</h4>
                        <p className='activated_head'><strong> Your account is not activated yet</strong></p>
                        <p className='cost_para'> <strong> Current registration cost:</strong> 30$</p>
                        <p className='jabber_head'>
                            <strong>  Please contact support on jabber: support@valid.support or
                            support2@valid.support if user not activated.
                         </strong>
                        </p>
                        <p className='auto_para'>* Money will be debited automatically when you topup your balance on any amount.</p>
                    </div>
                </div>
            </div>
            : 
            null
            }
        </div>
    )
}

export default Attention
