function Pagination({ data, onPageChange }) {
    const { current_page: currentPage, last_page: totalPages } = data;
    return (
        <div className="flex justify-center">
            <nav className="inline-flex -space-x-px gap-1">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 ml-0 leading-tight text-primary-yellow bg-secondary-black rounded-l-lg disabled:opacity-50"
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-2 leading-tight border border-none ${
                                page === currentPage
                                    ? 'bg-primary-yellow text-black font-bold'
                                    : 'bg-secondary-yellow text-black'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 leading-tight text-primary-yellow bg-secondary-black rounded-r-lg disabled:opacity-50"
                >
                    Next
                </button>
            </nav>
        </div>
    );
}

export default Pagination;