import React,{useState} from 'react'
import CartReadTable from '../../Components/ccs_Comp/cartReadTable'
import CartTable from '../../Components/ccs_Comp/cartTable'
import {useHistory,useParams} from 'react-router-dom'


const ccs_data = {
    head: [' EXP ', ' Country ', ' Holder Name ','Bank','Lavel','Database','Price/1pc','Search','Total','-'],
    body: [
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' b ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' d ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' e ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' t ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
    ]
}

const dumps_data = {
    head: [' SVC ', ' Country ','Bank','Lavel','Database','Quantity','Available','TYPE','-'],
    body: [
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' b ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' d ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' e ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' t ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'odd' },
        { check: '. ', code: ' 12 ', create: ' henry ', quantity: ' 3 ', price: ' $29 ', className: 'even' },
    ]
}

const Cart = () => {

    const history = useHistory()
    const {id} = useParams()
    let [val, setVal] = useState(id)

    const handleValue = (e) => {
        setVal(e)
        // setVal(path)
        history.push(`/cart/${e}`)
    }

    return (
        <div className='cart_conatainer'>
            <div className='cart_main_div'>
            <div className='cart_btn_div'>
                    <button
                        className={ val && id=== 'ccs' ? 'Bitcoin_btn' : 'Bitcoin_btn grey'}
                        onClick={() => handleValue('ccs')}
                    > CCS
                        </button>
                    <button
                        className={ val && id === 'dumps' ? 'Bitcoin_btn' : 'Bitcoin_btn grey'}
                        onClick={() => handleValue('dumps')}
                    >DUMPS
                    </button>
                </div>
                <CartReadTable />
                <CartTable head={val && id ==='ccs'? ccs_data.head: dumps_data.head} />
            </div>
        </div>
    )
}

export default Cart
