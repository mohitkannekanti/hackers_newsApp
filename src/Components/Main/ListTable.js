import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import Item from '../CommonComponent/Item'

const ListTable = () => {
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(30);
    const [dataPerPage, setDataPerPage] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [nextPage, setNextPage] = useState(2);
    const [more, setMore] = useState(false);

    const location = useLocation();
    const pathName = location.pathname;
    const history = useHistory();
    const paginate = () => {
        setOffset(pageCount * perPage);
        setNextPage(nextPage + 1);
        setPageCount(pageCount + 1);
    }
    return (
        <>
            <table border="0" cellPadding="0" cellSpacing="0" className="itemlist">
                <tbody>
                    {dataPerPage.map((data, index) => {
                        return (
                            <Item id={data} number={offset + index + 1} key={index} />
                        )
                    })}
                    <tr className="morespace" ></tr>
                    <tr>
                        <td colSpan="2"></td>
                        {more && <td className="title"><Link to={`${pathName}?p=${+nextPage}`} onClick={paginate} className="morelink" rel="next">More</Link></td>}
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default ListTable
