import React from 'react'
import {useDispatch} from 'react-redux'
import {countryFunc} from '../../state/reducer'

const CountryDropDown = ({country,func}) => {
    // console.log(country)
    const dispatch = useDispatch()

    const handleCountryName = (e)=>{
        dispatch(countryFunc(e))
    }

    return (
        <div className='absolute'>
            <ul>
                {country.map((val)=>(

                <li onClick={()=>{handleCountryName(val.name);func()}} key={val.name}>{val.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CountryDropDown
