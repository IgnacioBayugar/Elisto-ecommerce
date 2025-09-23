import './PaginationControls.scss'

function getPages(current, total) {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }
  pages.push(1);
  if (current > 3) pages.push('...left');
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < total - 2) pages.push('...right');
  pages.push(total);
  return pages;
}

export default function PaginationControls({ currentPage, totalPages, onPageChange }) {
  const pages = getPages(currentPage, totalPages);

  const isSinglePage = totalPages <= 1;

  return (
    <nav aria-label="Paginación de productos">
      <ul className="idb-pagination py-3 m-0">
        <li className="idb-pagination__item">
          <button
            className="idb-pagination__button idb-pagination__button--arrow py-0"
            aria-label="Página anterior"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isSinglePage || currentPage === 1}
          >
            <i className="bi bi-caret-left-fill" aria-hidden="true"></i>
          </button>
        </li>
        {pages.map((page, idx) =>
          typeof page === 'number' ? (
            <li key={page} className="idb-pagination__item">
              <button
                className={
                  `idb-pagination__button${currentPage === page ? ' idb-pagination__button--active' : ''}`
                }
                aria-label={`Página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => onPageChange(page)}
                disabled={isSinglePage || currentPage === page}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={page + idx} className="idb-pagination__item idb-pagination__ellipsis">
              <span className="idb-pagination__ellipsis-text" aria-hidden="true">. . .</span>
            </li>
          )
        )}
        <li className="idb-pagination__item">
          <button
            className="idb-pagination__button idb-pagination__button--arrow py-0"
            aria-label="Página siguiente"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isSinglePage || currentPage === totalPages}
          >
            <i className="bi bi-caret-right-fill" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}
