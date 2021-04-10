import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'

const CoinTable = ({ body,min,max }) => {

    let [qty, setQty] = useState(0)

    const handleIncrese = () => {
        setQty(++qty)
    }

    const handleDecrease = () => {
        if (qty !== 0) {
            setQty(--qty)
        }
    }
    return (
        <div className='dumps_coin_container'>
            <div className="dump_coin_main_div">
                <table className='dumps_coin_table'>
                    <thead>
                        <tr>
                            <th className='bin_link'>
                                <Link>BIN </Link>
                                <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                            </th>
                            <th>SVC</th>
                            <th>Database</th>
                            <th>COUNTRY</th>
                            <th>BANK</th>
                            <th>LAVEL</th>
                            <th>TYPE</th>
                            <th>T1+T2</th>
                            <th>T2 ONLY</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {body.slice(min,min+max).map((val, i) => (

                            <tr className={val.className}>
                                <td>{val.bin}</td>
                                <td className='font_size'>{val.svc}</td>
                                <td>{val.database}</td>
                                <td>{val.country}</td>
                                <td>{val.bank}</td>
                                <td>{val.lavel}</td>
                                <td>{val.type}</td>
                                <td className='font_size'>
                                    <input defaultChecked={true} type="checkbox" name="" id="" />
                                    <span className='font_size'> {val.t1}</span>
                                </td>
                                <td className='font_size'>
                                    <input defaultChecked={true} type="checkbox" name="" id="" />
                                    <span className='font_size'> {val.t2}</span>
                                </td>
                                <td className='font_size'>{val.price}</td>
                                <td className='font_size'>
                                    <input className='quantity_inp font_size' value={qty} type="text" placeholder='0' />
                                    <img onClick={handleDecrease} src="https://vclub.tel/images/icons/bullet_arrow_down.png" alt="" />
                                    <img onClick={handleIncrese} src="https://vclub.tel/images/icons/bullet_arrow_up.png" alt="" />
                                    <img src="https://vclub.tel/images/icons/bullet_go.png" alt="" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CoinTable
