import Pagination from 'react-bootstrap/Pagination';

function PaginationElement({ currentPage, setCurrentPage, totalPages }) {
    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination className='pagination'>
            <Pagination.Prev className='paginationDetails' onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))} />
            {paginationItems}
            <Pagination.Next className='paginationDetails' onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))} />
        </Pagination>
    );
}

export default PaginationElement;