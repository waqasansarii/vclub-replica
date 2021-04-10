import React from 'react'

const CcsTable = ({ head, body, checkBox,sliceMIn,sliceMax }) => {
   
    return (
        <div>
            <div>
                <table className='ccs_table'>
                    <thead>
                        <tr>
                            {checkBox ?
                                <th>{checkBox ? checkBox : null}</th>
                                : null
                            }
                            {head.map((val) => (
                                <th key={val}>{val}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.slice(sliceMIn,sliceMIn+sliceMax).map((val, i) => (
                            <tr className={val.className} key={i}>
                                {val.check ?
                                    <td>{val.check}</td>
                                    : null
                                }
                                <td>{val.code}</td>
                                <td>{val.create}</td>
                                <td>{val.quantity}</td>
                                <td>{val.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CcsTable
