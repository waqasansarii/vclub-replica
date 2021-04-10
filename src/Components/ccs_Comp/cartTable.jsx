import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const CartTable = ({head,body}) => {
    return (
        <div className='cart_table_conatainer'>
            <div className="dump_coin_main_div">
                <table className='dumps_coin_table cart_table'>
                    <thead>
                        <tr>
                            <th className='bin_link'>
                                <Link>BIN</Link>
                                <AiFillCaretDown style={{fontSize:'.7em',color:'black',marginTop:'7px'}} />
                            </th>
                            {head && head.map((val)=>(

                            <th key={val}>{val}</th>
                            ))}
                            {/* <th>EXP</th>
                            <th>Country</th>
                            <th>Holder Name</th>
                            <th>Bank</th>
                            <th>Lavel</th>
                            <th>Database</th>
                            <th>Price/1pc</th>
                            <th>Search</th>
                            <th>Total</th>
                            <th>-</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='odd'>
                            <td>43433</td>
                            <td className='font_size'>201</td>
                            <td>UNITED STATES</td>
                            <td>holder</td>
                            <td>HBL</td>
                            <td>CLASSIC</td>
                            <td>Mar#TRACKS_US/C</td>
                            <td className='font_size'>$53</td>
                            <td>search</td>
                            <td>Search</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CartTable
