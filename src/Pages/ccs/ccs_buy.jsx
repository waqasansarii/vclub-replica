import React,{useState} from 'react'
import InputTable from '../../Components/ccs_Comp/inputTable'
import FilterTag from '../../Components/ccs_Comp/filterTag'
import CcsCoinTable from '../../Components/ccs_Comp/ccs_coinTable'
import {ccs_buy_table_data} from '../../tableData/ccs_buy'
import './style.css'

const CcsBuy = () => {

    const [rowsPerPage, setPages] = useState(9);
    const [index, setIndex] = useState(0);
    const showPagination = () => {
        const total = Math.ceil(ccs_buy_table_data.body.length / rowsPerPage);
        const buttons = []
        for (let i = 0; i < total; i++) {
            buttons.push(<li className={(i * rowsPerPage === index) ? "page-item active" : "page-item"}><a onClick={() => setIndex(i * rowsPerPage)} className="page-link text-white bg-dark padd" href="#">{i + 1}</a></li>)
        };
        return buttons
    }

    return (
        <div>
            <div className='pagination_div ccv_buy_pagination'>
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
                                <a className="page-link text-white padd bg-dark" onClick={() => setIndex(i => i + rowsPerPage >= ccs_buy_table_data.body.length ? i : i + rowsPerPage)} href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            <InputTable />
            <FilterTag />
            <CcsCoinTable min={index} max={rowsPerPage} body={ccs_buy_table_data.body} />
            <div className='pagination_div ccv_buy_pagination bottom'>
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
                                <a className="page-link text-white padd bg-dark" onClick={() => setIndex(i => i + rowsPerPage >= ccs_buy_table_data.body.length ? i : i + rowsPerPage)} href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default CcsBuy
