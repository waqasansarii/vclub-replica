import React,{useState} from 'react'
import DumpsInputTable from '../../Components/dumps_Comp/DinputTable'
import CoinTable from '../../Components/dumps_Comp/coinTable'
import { dump_buy_table_data } from '../../tableData/dump_buy'

const BuyDumps = () => {

    const [rowsPerPage, setPages] = useState(9);
    const [index, setIndex] = useState(0);
    const showPagination = () => {
        const total = Math.ceil(dump_buy_table_data.body.length / rowsPerPage);
        const buttons = []
        for (let i = 0; i < total; i++) {
            buttons.push(<li className={(i * rowsPerPage === index) ? "page-item active" : "page-item"}><a onClick={() => setIndex(i * rowsPerPage)} className="page-link text-white bg-dark padd" href="#">{i + 1}</a></li>)
        };
        return buttons
    }

    return (
        <div>
            <div className='pagination_div ccv_buy_pagination dumps_pagination'>
                <nav aria-label="Page navigation example text-white bg-dark">
                    <ul className="pagination ">
                        <li className="page-item text-white bg-dark">
                            <a className="page-link text-white padd bg-dark" onClick={() => setIndex(i => i <= 0 ? i : i - rowsPerPage)} href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {
                            showPagination()
                        }
                        <li className="page-item">
                            <a className="page-link text-white padd bg-dark" onClick={() => setIndex(i => i + rowsPerPage >= dump_buy_table_data.body.length ? i : i + rowsPerPage)} href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <DumpsInputTable />
            <CoinTable min={index} max={rowsPerPage} body={dump_buy_table_data.body} />
            <div className='pagination_div ccv_buy_pagination dumps_pagination_bottom'>
                <nav aria-label="Page navigation example text-white bg-dark">
                    <ul className="pagination ">
                        <li className="page-item text-white bg-dark">
                            <a className="page-link text-white padd bg-dark" onClick={() => setIndex(i => i <= 0 ? i : i - rowsPerPage)} href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {
                            showPagination()
                        }
                        <li className="page-item">
                            <a className="page-link text-white padd bg-dark" onClick={() => setIndex(i => i + rowsPerPage >= dump_buy_table_data.body.length ? i : i + rowsPerPage)} href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default BuyDumps
