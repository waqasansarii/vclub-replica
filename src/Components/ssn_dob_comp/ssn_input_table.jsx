import React from 'react'

const SsnInputTable = () => {
    return (
        <div className='ssn_input_table_container'>
            <div className='filter_tag_main_div ssn_search'>
               <p>SEARCH PRICE: <u> FREE </u> | ORDER PRICE: $5</p>
            </div>
            <div className='ssn_input_table_main_div'>
                <table className=' ssn_input_table'>
                    <thead>
                        <tr className='odd'>
                            <th style={{ textAlign: 'center' }} colSpan='3'>
                                SSN with DOB search
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul className='input_ul ssn1'>
                                    <li>
                                        <p>DOB </p>
                                        <input className='ssn_inp' type="text" />
                                    </li>
                                    <li className='dob_format'>
                                        → DOB Formats: YYYY, YYYYMM, YYYYMMDD
                                    </li>
                                    <li>
                                        <p>ZIP </p>
                                        <input className='ssn_inp' type="text" />
                                    </li>
                                </ul>
                            </td>
                            <td className='two_td'>
                                <ul className='input_ul ssn'>
                                    <li>
                                        <p>STATE </p>
                                        <input className='ssn_inp' type="text" />
                                    </li>
                                    <li>
                                        <p>* FIRST NAME</p>
                                        <input className='ssn_inp' type="text" />

                                    </li>
                                    <li>
                                        <p>* LAST NAME </p>
                                        <input className='ssn_inp' type="text" />
                                    </li>
                                </ul>
                            </td>
                            <td >

                                <ul className='input_ul ssn'>
                                    <li>
                                        <p>CITY </p>
                                        <input className='ssn_inp' type="text" />
                                    </li>
                                    <li>
                                        <p>SEARCH BY </p>
                                        <select className='database_select ssn_inp' name="database" id="database">
                                            <option value="">ANY</option>
                                            <option value="">DOB + FULL NAME</option>
                                            <option value="">STATE + FULL NAME</option>
                                            <option value="">CITY + FULL NAME</option>
                                            <option value="">ZIP + FULL NAME</option>
                                        </select>
                                    </li>

                                    <li className='srch_btn_li'>
                                        <button className='search_btn'>Search</button>
                                    </li>

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SsnInputTable
