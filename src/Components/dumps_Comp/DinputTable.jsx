import React,{useState} from 'react'

const DumpsInputTable = () => {

    let [country,setCountry] = React.useState([])

    React.useEffect(() => {
        const api = async () => {
            let data = await fetch('https://restcountries.eu/rest/v2/all')
            let json = await data.json()
            console.log(json)
            setCountry(json)
        }
        api()
    }, [])

     // state and function for set value input field 
     let [inValue, setInValue] = useState('')
     let [clr, setClr] = useState('')

    const handleValue = (e) => {
        setClr(e)
        if (e === 'visa') {
            setInValue([...inValue, ' 4* '].join(''))
        }
        if (e === 'mc') {
            setInValue([...inValue, ' 5* '].join(''))

        }
        if (e === 'amex') {
            setInValue([...inValue, ' 3* '].join(''))

        }
        if (e === 'disco') {
            setInValue([...inValue, ' 6* '].join(''))
        }
    }
    const handleCHange = (e) => {
        setInValue(e.target.value)
    }


    return (
        <div>
            <div className='dumps_buy_inTable_main_div'>
                <table className='dumps_input_table'>
                    <thead>
                        <tr className='odd'>
                            <th>
                            <ul className='table_ul'>
                                    <li className={clr === 'visa' ? 'active' : null} onClick={() => handleValue('visa')}>VISA</li>
                                    <li className={clr === 'mc' ? 'active' : null} onClick={() => handleValue('mc')}>MC</li>
                                    <li className={clr === 'amex' ? 'active' : null} onClick={() => handleValue('amex')}>AMEX</li>
                                    <li className={clr === 'disco' ? 'active' : null} onClick={() => handleValue('disco')}>DISCO</li>
                                </ul>
                            </th>
                            <th colSpan='2'>
                                <td className='search_btn_td' >
                                    <button className='search_btn'>Search</button>
                                </td>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <textarea style={{ padding: '3px', marginTop: '-50px' }}
                                    name="" id="" cols="30" rows="5"
                                    placeholder='Put here your bins' 
                                    onChange={(e) => handleCHange(e)}
                                    value={inValue}
                                    />
                            </td>
                            <td className='two_td'>
                                <ul className='input_ul dumps'>
                                    <li>
                                        <p>BANK NAME </p>
                                        <input type="text" />
                                    </li>
                                    <li>
                                        <p>COUNTRY</p>
                                        <select className='database_select' name="country" id="country">
                                            <option value=""></option>
                                            {country.map((val)=>(
                                            <option key={val.name} value={val.name}>{val.name}</option>
                                            ))}
                                        </select>
                                    </li>
                                    <li>
                                        <p>SVC </p>
                                        <input type="text" />
                                    </li>
                                </ul>
                            </td>
                            <td >

                                <ul className='input_ul dumps2'>
                                    <li>
                                        <p>DATABASE </p>
                                        <select className='database_select' name="database" id="database">
                                            <option value="">ANY</option>
                                            <option value="5613">Apr#FIRE-TR1TR2-WORLD</option>
                                            <option value="5181">Mar#TRACKS_DallasTX_(rootr)_[Sniffed/POS]</option>
                                            <option value="5367">Mar#Tracks_PhoenixAZ_(rootr)_[POS]</option>
                                            <option value="5403">Mar#TRACKS_US/CA/NM/AZ/TX/WORLD_(Ferrari)_[Sniffed/FirstHand/POS]</option>
                                            <option value="5266">Mar#TRACKS_US/MIX_[Sniffed/FirstHand/POS]</option>
                                            <option value="5274">Mar#TRACKS_US/WORLD_(CocaCola)_[Sniffed/FirstHand/POS]</option>
                                            <option value="5491">Mar#TRACKS_US/WORLD_(PX)_[Sniffed/FirstHand/POS]-SUPER</option>
                                            <option value="5276">Mar#TRACKS_US/WORLD_MIX_(CocaCola)_[Sniffed/FirstHand/POS]-SUPER</option>
                                        </select>
                                    </li>
                                    <li>
                                        <p>LAVEL </p>
                                        <input type="text"  />
                                    </li>

                                    <li>
                                        <p>TYPE</p>
                                        <input type="text"  />
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

export default DumpsInputTable
