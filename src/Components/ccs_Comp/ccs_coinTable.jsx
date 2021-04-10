import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'
import { ImCheckmark, ImCross } from 'react-icons/im'



const CcsCoinTable = ({ body ,min,max}) => {
    return (
        <div className='ccs_coin_container'>
            <div className="dump_coin_main_div ccs_coin_main_div">
                <table className='dumps_coin_table ccs_coin_table'>
                    <thead>
                        <tr>
                            <th className='bin_link ccs_bin'>
                                <Link >BIN </Link>
                                <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                            </th>
                            <th>CVV</th>
                            <th>YYMM</th>
                            <th>COUNTRY</th>
                            <th>BANK</th>
                            <th>LAVEL</th>
                            <th>TYPE</th>
                            <th>Holder</th>
                            <th>City</th>
                            <th>State</th>
                            <th>ZIP</th>
                            <th>Database</th>
                            <th>PRICE</th>
                            <th>ADDR</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>DOB</th>
                            <th>MMN</th>
                            <th>SORT CODE</th>
                            <th>IP</th>
                            <th>Refund</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {body.slice(min,min+max).map((val, i) => (

                            <tr className={val.className} key={i}>
                                <td>{val.bin}</td>
                                <td className='font_size'>
                                    <span className='cvv_green'> {val.ccv}</span>
                                </td>
                                <td style={{ width: '50px', fontSize: '19px' }}>{val.yymm}</td>
                                <td>{val.country}</td>
                                <td style={{ fontSize: '11px' }}>{val.bank}</td>
                                <td>{val.lavel}</td>
                                <td>{val.type}</td>
                                <td style={{ width: '120px', fontSize: '14px' }}>{val.holder}</td>
                                <td style={{ width: '120px', fontSize: '13px' }}>{val.city}</td>
                                <td style={{ width: '120px', fontSize: '11px' }}>{val.state}</td>
                                <td style={{ width: '120px', fontSize: '12px' }}>{val.zip}</td>
                                <td className='clr'>{val.database}</td>
                                <td style={{ width: '50px' }}>{val.price}</td>
                                <td><ImCheckmark style={{ color: '#0F0', fontWeight: '700', fontSize: '1.5em' }} /></td>
                                <td><ImCheckmark style={{ color: '#0F0', fontWeight: '700', fontSize: '1.5em' }} /></td>
                                <td><ImCross style={{ color: '#f77', fontWeight: '700', fontSize: '1.1em' }} /></td>
                                <td><ImCross style={{ color: '#f77', fontWeight: '700', fontSize: '1.1em' }} /></td>
                                <td><ImCross style={{ color: '#f77', fontWeight: '700', fontSize: '1.1em' }} /></td>
                                <td><ImCross style={{ color: '#f77', fontWeight: '700', fontSize: '1.1em' }} /></td>
                                <td><ImCross style={{ color: '#f77', fontWeight: '700', fontSize: '1.1em' }} /></td>
                                <td><ImCross style={{ color: '#f77', fontWeight: '700', fontSize: '1.1em' }} /></td>
                                <td className='font_size '>
                                    <span className='font_size buy_link'>{val.buy}</span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CcsCoinTable
