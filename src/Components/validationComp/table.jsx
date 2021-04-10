import React, { useState } from 'react'
import { data } from './data'

const Table = () => {

    let date = new Date()
    let getDate = date.toISOString()
    let slice = getDate.slice(0, 10) + ' ' + getDate.slice(11, 19)

    return (
        <div>
            <table className='validation_table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Address/batch/amount</th>
                        <th>Confirmations</th>
                    </tr>
                </thead>
                <tbody>
                    {data.list.map((val,i)=>(

                        <tr className={val.className}>
                        <td>category: Recieve; date: {slice}</td>
                        <td>{val.para}
                        </td>
                        <td>{val.count}</td>
                    </tr>
                        ))}
                    {/* <tr className='even'>
                        <td>category: Recieve; date: {slice}</td>
                        <td>address: 38ivuX4YQgT4y8MjGCZ81vaCp7LNHaU4w5; txid:
                        d230bce18d815b76e9d1d31dcb74e071758a105711b94dd90e8b10e91ff1406f; amount: 0.00155211 (amount_usd: 89.48)
                        </td>
                        <td>0</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Table
