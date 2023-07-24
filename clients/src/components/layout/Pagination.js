import Button from 'react-bootstrap/Button'

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

    const PagiEle = () => {
        const checkRowsPerPage = (totalPages/rowsPerPage)*rowsPerPage;
        // console.log("checkRowsPerPage", checkRowsPerPage, activePage, totalPages)
        if (checkRowsPerPage == 1 ) {
            return (
                <>
                    <button className="page-active" onClick={() => setActivePage(activePage)}>
                        {activePage}
                    </button>
                </>
            )
        }else if (checkRowsPerPage == 2) {
            return (
                <>
                    {
                        (activePage >= 2 ) ? 
                        <>
                            <button onClick={() => setActivePage(activePage -1)}>
                                {activePage - 1 }
                            </button>
                            <button className="page-active" onClick={() => setActivePage(activePage)}>
                                {activePage}
                            </button>
                        </>
                        :
                        <>
                            <button className="page-active" onClick={() => setActivePage(activePage)}>
                                {activePage}
                            </button>
                            {
                                activePage === totalPages ? 
                                    <>
                                    </>
                                :
                                <>
                                    <button onClick={() => setActivePage(activePage + 1)}>
                                        {activePage + 1}
                                    </button>
                                </>
                            }
                        </>
                    }
                </>
            )
        }else{
            return (
                <>
                    {
                        (activePage >= 2 ) ? 
                        <>
                            <button onClick={() => setActivePage(activePage -1)}>
                                {activePage - 1 }
                            </button>
                            <button className="page-active" onClick={() => setActivePage(activePage)}>
                                {activePage}
                            </button>
                            {
                                activePage === totalPages ? 
                                    <>
                                    </>
                                :
                                <>
                                    <button onClick={() => setActivePage(activePage + 1)}>
                                        {activePage + 1}
                                    </button>
                                </>
                            }
                        </>
                        :
                        <>
                            <button className="page-active" onClick={() => setActivePage(activePage)}>
                                {activePage}
                            </button>
                            <button onClick={() => setActivePage(activePage + 1)}>
                                {activePage + 1}
                            </button>
                            <button onClick={() => setActivePage(activePage + 2)}>
                                {activePage + 2}
                            </button>
                        </>
                    }
                </>
            )
        }
    }

    return (
        <>
            <div class="pagination">
                <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
                    &#171;
                </button>
                <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
                    &#8249;
                </button>
                <PagiEle />
                <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
                    &#8250;
                </button>
                <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
                    &#187;
                </button>
            </div>
            <p>
                Trang {activePage} trên {totalPages} trang
                {/*Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}*/}
            </p>
        </>
    );
}; 
