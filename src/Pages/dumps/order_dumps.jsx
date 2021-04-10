import React from 'react'
import CcsTable from '../../Components/ccs_Comp/CcsTable'
import './style.css'

const table_data = {
    head: ['CODE', ' CREATED ', ' QUANTITY ', ' TOTAL PRICE '],
    body: [
        { code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' }
    ]
}

const Order_dumps = () => {
    return (
        <div>
            <div className='dumps_main_div'>
                <div className='Dumphead_div'>
                    <h3>Dumps orders:</h3>
                </div>
                <div style={{marginTop:'15px'}} className='dump_table_div'>
                    <CcsTable Table head={table_data.head} body={table_data.body} />
                </div>
            </div>
        </div>
    )
}

export default Order_dumps
