import React, { useState } from 'react'
import { BiBitcoin } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Table from './table'

const Coin = () => {

    let [val, setVal] = useState('bitcoin')

    const handleValue = (e) => {
        setVal(e)
    }

    return (
        <div className='coin_container'>
            <div className='main_coin_div'>
                <div className='coin_btn_div'>
                    <button
                        className={val === 'bitcoin' ? 'Bitcoin_btn' : 'Bitcoin_btn grey'}
                        onClick={() => handleValue('bitcoin')}
                    >
                        <BiBitcoin className='bitcoin_icon' /> BITCOIN
                        </button>
                    <button
                        className={val === 'monero' ? 'Bitcoin_btn' : 'Bitcoin_btn grey'}
                        onClick={() => handleValue('monero')}
                    >
                        <img className='monero_coin_img' src="https://vclub.tel/images/monero.svg " alt="" />
                        {' MONERO'}
                        <span className='label'>new</span>
                    </button>
                </div>
                <div className='coins_detail_div'>
                    <p className='addrs_coin'>Please send your payment of
                    {val === 'bitcoin' ? ' BTC to Bitcoin ' : ' XMR to Monero '}
                    address:
                    </p>
                    <h5>
                        <strong>
                            Notice: Every time, when you want to Topup, please, check address on this page.
                            It will be changed every time after each transaction.
                    </strong>
                    </h5>
                    <p><strong>
                        Exchange fee is 3%. You need to 2 confirmations of transaction
                        in the system to deposit money to your account.</strong>
                    </p>
                    <h6 className='token'>
                        <strong>
                            {val === 'bitcoin' ?
                                '3Nkx9UbmaVBz8WgzdQhC6gcjhb2Z1fmA35'
                                :
                                '88PMiZiZBC8gi3wHkjpNxmRsJrZmjHvsqFMeFnxwbsSwg9mLY37VwT73QuhhH3Yr7T3tiJ8VhaKcFdeEQNdsXoYgCb5JQoZ'
                            }
                        </strong>
                    </h6>
                    <div className='coins_detail_div'>

                        <h5>
                            <strong>
                                {val === 'bitcoin' ?
                                    '1BTC = 57171$'
                                    :
                                    '1XMR = 249$'
                                }
                            </strong>
                        </h5>
                        {val === 'bitcoin' ?
                            <p>
                                Payments from Bitcoin's takes about 10-15 mins, please contact with support
                                if you don't receive your funds only after 15 mins.
                       </p>
                            :
                            <p>
                                Payments from Monero takes about 5-10 mins, please
                          {/* <Link className='leave_ticket_link'> leave a ticket </Link> */}
                          if you don't receive your funds only after 15 mins.
                       </p>
                        }
                        <p>
                            To fill up your shop balance with {val === 'bitcoin' ? ' BTC ' : ' XMR '} payment you need to:
                       </p>
                        <p>
                            1- Send coins to your address shown below (you can send as many separate payments as
                            you want - they all will be added to your balance)
                       </p>
                        <p>
                            2- After your transaction(s) get 2 confirmations - your balance will be added to your account automatically.
                        </p>
                        <p>
                            Transactions waiting confirmation:
                       </p>
                    <Table />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coin
