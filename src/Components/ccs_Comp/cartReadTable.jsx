import React from 'react'

const CartReadTable = () => {
    return (
        <div>
            <div className="well">
                <div className>
                    <table className="table table-striped table-bordered table-condensed">
                        <tbody>
                            <tr className='odd'>
                                <td style={{ width: 200 }}>ORDER COST:</td>
                                <td>0.00$</td>
                            </tr>
                            <tr>
                                <td>TOTAL PCS:</td>
                                <td>0pcs</td>
                            </tr>
                            <tr className='odd'>
                                <td>CURRENT BALANCE:</td>
                                <td>0.82$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button rel="Dumps" className="btn  btn-success" type="button">Check out</button>
                    <button rel="Dumps" className="cart_clear btn" type="button">Clear cart</button>
                </div>
            </div>

        </div>
    )
}

export default CartReadTable
