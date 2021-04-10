import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import CountryDropDown from './countryDropDown'
import BankDropDown from './bankDropdown'
import { useSelector, useDispatch } from 'react-redux'
import { removeCountry ,removeBank} from '../../state/reducer'



const InputTable = () => {

    const dispatch = useDispatch()
    // get selected country name 
    const selector = useSelector((state) => {
        return state.userReducers
    })
    // console.log(selector)

    // state,functions and ref for showing country dropdown 
    let [showDropDown, setShowDropDown] = useState({ country: false, bank: false })
    let country = useRef(null)
    let [countryApi, setCountryApi] = useState([])
    // state for bank 

    let [bank, setBank] = useState([])
    let bankDrop = useRef(null)

    //    show and hide country dropdown func 
    const handleCountry = (e) => {
        setShowDropDown({ [e]: true })
    }
    const hideCountry = (e) => {
        setShowDropDown({ [e]: false })
    }

    // create function for outside event handle 
    const saveCallback = useRef(hideCountry)
    useEffect(() => {
        saveCallback.current = hideCountry
    })
    function handler(e) {
        if (country.current && !country.current.contains(e.target) || bankDrop.current && !bankDrop.current.contains(e.targer)) {
            saveCallback.current()
        }
    }
    // run useEffect when state change 
    useEffect(() => {
        if (showDropDown.country || showDropDown.bank) {
            document.addEventListener('click', handler)
            return () => document.removeEventListener('click', handler)
        }
    }, [showDropDown.country || showDropDown.bank])


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

    let [range, setRange] = useState({ value: { min: 0, max: 10 } })

    // get data from api and save into sate
    React.useEffect(() => {
        const api = async () => {
            let data = await fetch('https://restcountries.eu/rest/v2/all')
            let json = await data.json()
            // console.log(json)
            setCountryApi(json)
            setBank(json)
        }
        api()
    }, [])


    const removeTag = (e) => {
        dispatch(removeCountry(e))
    }
    const removeBankTag =(e)=>{
        dispatch(removeBank(e))
    }

    return (
        <div className='ccs_buy_inTable_container'>
            <div className='ccs_buy_inTable_main_div'>
                <table className='ccs_input_table'>
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
                                <div className='checkboxs_div'>
                                    <div>
                                        <input type="checkbox" name="have" id="have" />
                                        <label className='have_cvv' htmlFor="have">Have cvv</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="without" id="without" />
                                        <label className='without' htmlFor="without">Without cvv</label>
                                    </div>
                                    |
                                    <div>
                                        <input type="checkbox" style={{ marginLeft: '5px' }} name="add" id="add" />
                                        <label style={{ color: '#888888', margin: '3px' }} htmlFor="add">Address</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="email" id="email" />
                                        <label style={{ color: '#888888', margin: '3px' }} htmlFor="email">Email</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="phone" id="phone" />
                                        <label style={{ color: '#888888', margin: '3px' }} htmlFor="phone">Phone</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="dob" id="dob" />
                                        <label style={{ color: '#888888', margin: '3px' }} htmlFor="dob">Dob</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="fullz" id="fullz" />
                                        <label style={{ color: 'red', margin: '3px' }} htmlFor="fullz">Fullz</label>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Database</td>
                            <td colSpan='2'>
                                <div className='latest_link'>
                                    <span style={{ fontWeight: 'bold' }}>Latest: </span>
                                    <Link style={{ textDecoration: 'none' }}>Apr#07_US/MIX_(PROJECT)_[Sniffed/Firsthand]</Link>
                                </div>
                                <div>
                                    <input className='database_input' type="text" placeholder='Choose the databse' />
                                </div>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <p style={{ fontWeight: 'bold', marginBottom: "5px" }}>BIN LIST</p>
                                <textarea
                                    style={{ padding: '3px' }} name="" id="" cols="38" rows="5"
                                    placeholder='Enter bins one on each line (max. 50)'
                                    onChange={(e) => handleCHange(e)}
                                    value={inValue}
                                />
                                <p style={{ fontWeight: 'bold', marginBottom: "5px" }}>ZIP LIST</p>
                                <textarea
                                    style={{ padding: '3px' }} name="" id="" cols="38" rows="5"
                                    placeholder='Enter zip one on each line (max. 50)'
                                />
                            </td>
                            <td className='two_ul'>
                                <ul className='input_ul'>
                                    <li>
                                        <p>BANK NAME </p>
                                        <div className="select2-container select2-container-multi"
                                            id="s2id_Search_country_name" style={{ width: '250px' }}>
                                            <ul className="select2-choices">
                                                {selector.bank && selector.bank.map((val) => (

                                                    <li className="select2-search-choice" key={val}>
                                                        <p onClick={() => removeBankTag(val)} className="select2-search-choice-close">&times;</p>
                                                        <div>{val}</div>
                                                    </li>
                                                ))}
                                                <li className="select2-search-field">
                                                    <input
                                                        type="text"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        autoCapitalize="off"
                                                        spellCheck="false"
                                                        className="select2-input country"
                                                        id="s2id_autogen2"
                                                        placeholder
                                                        style={{ width: '120px' }}
                                                        aria-activedescendant="select2-result-label-638"
                                                        onClick={!showDropDown.bank ? () => handleCountry('bank') : () => hideCountry('bank')}
                                                        placeholder='Choose the country'
                                                    />
                                              
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <input 
                                        type="text" 
                                        placeholder='Choose the bank'
                                        onClick={!showDropDown.bank ? () => handleCountry('bank') : () => hideCountry('bank')}
                                        
                                        /> */}
                                        {showDropDown.bank ?
                                            <div ref={bankDrop}>
                                                <BankDropDown ropDown bank={bank} func={hideCountry} />
                                            </div>
                                            :
                                            null
                                        }
                                    </li>
                                    <li className='country'>
                                        <p>COUNTRY</p>
                                        <div className="select2-container select2-container-multi"
                                            id="s2id_Search_country_name" style={{ width: '250px' }}>
                                            <ul className="select2-choices">
                                                {selector.country && selector.country.map((val) => (

                                                    <li className="select2-search-choice" key={val}>
                                                        <p onClick={() => removeTag(val)} className="select2-search-choice-close">&times;</p>
                                                        <div>{val}</div>
                                                    </li>
                                                ))}
                                                <li className="select2-search-field">
                                                    <input
                                                        type="text"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        autoCapitalize="off"
                                                        spellCheck="false"
                                                        className="select2-input country"
                                                        id="s2id_autogen2"
                                                        placeholder
                                                        style={{ width: '120px' }}
                                                        aria-activedescendant="select2-result-label-638"
                                                        onClick={!showDropDown.country ? () => handleCountry('country') : () => hideCountry('country')}
                                                        placeholder='Choose the country'
                                                    />
                                                    {/* <input className='country' type="text"style={{ width: '120px' }}
                                            onClick={!showCountry ? (e) => handleCountry(e) : () => hideCountry()}
                                            placeholder='Choose the country'
                                        /> */}
                                                </li>
                                            </ul>
                                        </div>
                                        {showDropDown.country ?
                                            <div ref={country} >
                                                <CountryDropDown
                                                    country={countryApi}
                                                    func={hideCountry}
                                                />
                                            </div>
                                            : null
                                        }
                                    </li>
                                    <li>
                                        <p>STATE </p>
                                        <input type="text" placeholder='Choose state' />
                                    </li>
                                    <li>
                                        <p>CITY</p>
                                        <input type="text" placeholder='Choose city ' />
                                    </li>
                                    <li className='range'>
                                        <div>PRICE RANGE</div>
                                    </li>
                                </ul>
                            </td>
                            <td>

                                <ul className='input_ul'>
                                    <li>
                                        <p>LAVEL </p>
                                        <input type="text" placeholder='Choose the lavel' />
                                    </li>
                                    <li>
                                        <p>TYPE</p>
                                        <input type="text" placeholder='Choose the type' />
                                    </li>
                                    <li >
                                        <p>REFUNDS </p>
                                        <div className='radio_div'>
                                            <label htmlFor="all">
                                                <input type="radio" name="all" id="all" /> All
                                           </label>
                                            <label htmlFor="w/o">
                                                <input type="radio" name="w/o" id="w/o" /> w/o Refunds
                                           </label>
                                            <label htmlFor="w/">
                                                <input type="radio" name="w/" id="w/" /> w/ Refunds
                                           </label>
                                        </div>
                                    </li>
                                    <li className='range'>
                                        <InputRange
                                            // maxValue={20}
                                            // minValue={0}
                                            formatLabel={value => `$${value}`}
                                            value={range.value}
                                            onChange={value => setRange({ value })}
                                        //  classNames='range'
                                        />
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr className='odd' >
                            <td className='search_btn_td' colSpan='3' >
                                <button className='search_btn'>Search</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InputTable
