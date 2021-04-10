import React from 'react'
// import { Link } from 'react-router-dom'

const CountryTable = ({ filter_link, countrtTable,showTable }) => {
    let [country, setCountry] = React.useState([])
    let [showSubLi, setShowSubLi] = React.useState('')
    let [bool, setBool] = React.useState(false)

    const subLink = (e) => {
        // console.log(e)
        setShowSubLi(e)
        setBool(!bool)
    }

    React.useEffect(() => {
        const api = async () => {
            let data = await fetch('https://restcountries.eu/rest/v2/all')
            let json = await data.json()
            // console.log(json)
            setCountry(json)
        }
        api()
    }, [])

    return (
        <div className='country_table_container'>
            <div className='head_div'>
                <h3>Buy socks 5</h3>
                {filter_link ?
                    <div className='show_filter_link'>
                        <p onClick={()=>showTable()}>Show filter</p>
                    </div>
                    :
                    null
                }
                {countrtTable ?
                    <div className="country_table_main_div">
                        <div className='country_div'>
                            <p> there are 4030 socks online at this moment in 107 countries</p>
                            <ul className='country_table_ul'>
                                {country.slice(0, 107).map((val) => (

                                    <li key={val.name}>
                                        <div className='main_list_div'>

                                            <div className='cName_checkbox_div'>
                                                <p onClick={() => subLink(val.name)} className='plus'>+</p>
                                                <input type="checkbox" name="" id="" />
                                                <p className='cName'>{val.name}</p>
                                            </div>
                                            <div className='Country_code_div'>
                                                <p>{val.alpha2Code}</p>
                                                <p>{val.numericCode}</p>
                                            </div>
                                        </div>
                                        {showSubLi === val.name && bool ?
                                            <ul className='country_table_ul'>
                                                <li className='sub_list'>
                                                    <div className='cName_checkbox_div'>
                                                        <input type="checkbox" name="" id="" />
                                                        <p className='cName'>{val.capital}</p>
                                                    </div>
                                                    <div className='Country_code_div'>
                                                        <p>--</p>
                                                        <p>1</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            : null
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='go_btn'>
                            <p >Go{'>>'}</p>
                        </div>
                    </div>
                        : null
            }
            </div>
        </div>
    )
}

export default CountryTable
