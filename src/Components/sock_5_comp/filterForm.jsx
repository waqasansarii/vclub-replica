import React from 'react'

const FilterForm = ({ searchFunc, filterForm, filter_link,showTable  }) => {
    return (
        <>
            {filterForm ?
                <div className='filter_form_container'>
                    <div className='filter_form_main_div'>
                        <div>OR USE FILTER FIELDS</div>
                        <div>
                            <form >
                                <table className='filterFormm'>
                                    <tbody><tr>
                                        <td>
                                            <table className>
                                                <tbody><tr>
                                                    <td>COUNTRY</td>
                                                    <td>
                                                        <input style={{ width: 250 }} className='filter_input' placeholder="Type country" type="text" name="SocksSearch[s_country]" />                          </td>
                                                </tr>
                                                    <tr>
                                                        <td>STATE</td>
                                                        <td>
                                                            <input style={{ width: 250 }} className='filter_input' placeholder="Type State" type="text" name="SocksSearch[s_state]" />                          </td>
                                                    </tr>
                                                    <tr>
                                                        <td>CITY</td>
                                                        <td>
                                                            <input style={{ width: 250 }} className='filter_input' placeholder="Type State" type="text" name="SocksSearch[s_city]" />                          </td>
                                                    </tr>
                                                </tbody></table>
                                        </td>
                                        <td style={{ paddingLeft: 25 }}>
                                            <table>
                                                <tbody><tr>
                                                    <td>HOST</td>
                                                    <td>
                                                        <input style={{ width: 250 }} className='filter_input' placeholder="Type Host" type="text" name="SocksSearch[s_host]" />                          </td>
                                                </tr>
                                                    <tr>
                                                        <td>IP</td>
                                                        <td>
                                                            <input style={{ width: 250 }} className='filter_input' placeholder="Type IP" type="text" name="SocksSearch[s_ip]" />                          </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='search_btn_td' >
                                                            <button type='button' onClick={() => searchFunc()} className='search_btn sock_search'>Search</button>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </form>

                        </div>
                    </div>
                </div>
                :
                null
            }
            {/* {filter_link ?
                    <div className='show_filter_link responsive'>
                        <p onClick={()=>showTable()}>Show filter</p>
                    </div>
                    :
                    null
                } */}
        </>
    )
}

export default FilterForm
