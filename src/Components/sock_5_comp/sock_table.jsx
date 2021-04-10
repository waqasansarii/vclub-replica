import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'


const SockTable = ({showTable}) => {
    return (
        <>
        {showTable?
            <div className='sock_table_container'>
            <div className="dump_coin_main_div">
                <table className='dumps_coin_table'>
                    <thead>
                        <tr>
                            <th className='sock_buy_table'>
                                <div>
                                <p >Hostname </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >Country </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >State </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >	City </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >Connect </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >Uptime </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >Last check </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >Speed </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th className='sock_buy_table'>
                                <div>
                                    <p >Price </p>
                                    <AiFillCaretDown style={{ fontSize: '.7em', color: 'black', marginTop: '7px' }} />
                                </div>
                            </th>
                            <th>-</th>
                            </tr>
                            </thead>
                            <tbody>
                        <tr className='odd'>
                            <td>...ns-wsd.ny.static.cable.rcn.com</td>
                            <td>UNITED STATES</td>
                            <td className='font_size'>UNITED STATES</td>
                            <td>New York</td>
                            <td>network</td>
                            <td className='font_size'>23h:29m:58s</td>
                            <td>0m:58s ago</td>
                            <td>1s</td>
                            <td className='font_size'>$53</td>
                            <td className='search_btn_td' >
                                <button className='search_btn'>BUY IT NOW</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        : null
    }
    </>
    )
}

export default SockTable
