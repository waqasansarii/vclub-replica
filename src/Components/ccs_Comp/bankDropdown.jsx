import React from 'react'
import { useDispatch } from 'react-redux'
import { bankFunc } from '../../state/reducer'

const BankDropDown = ({ bank, func }) => {
    // console.log(country)
    const dispatch = useDispatch()

    const handleBankName = (e) => {
        dispatch(bankFunc(e))
    }

    return (
        <div className='absolute_Bank'>
            <ul>
                {bank.map((val, i) => (
                    <li onClick={() => { handleBankName(val.capital); func() }} key={i}>{val.capital}</li>
                ))}
            </ul>
        </div>
    )
}

export default BankDropDown
