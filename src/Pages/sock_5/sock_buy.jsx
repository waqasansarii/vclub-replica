import React from 'react'
import CountryTable from '../../Components/sock_5_comp/country_table'
import SockTable from '../../Components/sock_5_comp/sock_table'
import FilterForm from '../../Components/sock_5_comp/filterForm'
import './style.css'

const SockBuy = () => {

    let [showFilterLink,setShowFilterLink] = React.useState(false)
    let [countrtTable,setCountryTable] = React.useState(true)
    let [showTable,setShowTable] = React.useState(false)
    let [filterForm,setFilterForm] = React.useState(true)

    const handleSearch = ()=>{
        setShowTable(true)
        setCountryTable(false)
        setShowFilterLink(true)
        setFilterForm(false)
    }

    const handleShowTable=()=>{
        setCountryTable(!countrtTable)
        setFilterForm(!filterForm)
    }

    return (
        <div>
            <CountryTable filter_link={showFilterLink} countrtTable={countrtTable} showTable={handleShowTable} />
            <FilterForm  searchFunc={handleSearch} filterForm={filterForm} filter_link={showFilterLink} showTable={handleShowTable}/>
            <SockTable  showTable={showTable} />
        </div>
    )
}

export default SockBuy
