import { useEffect, useRef } from 'react';

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
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  if (totalPages <= 1) return null;

  const pages = getPages(currentPage, totalPages);

  return (
    <nav aria-label="Paginación de productos" ref={containerRef}>
      <ul className="idb-pagination m-0 py-3 pagination justify-content-center">
        <li className="idb-pagination__item page-item">
          <button
            className="idb-pagination__button page-link"
            aria-label="Página anterior"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>
        {pages.map((page, idx) =>
          typeof page === 'number' ? (
            <li key={page} className="idb-pagination__item page-item">
              <button
                className={`idb-pagination__button page-link${currentPage === page ? ' idb-pagination__button--active' : ''}`}
                aria-label={`Página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => onPageChange(page)}
                disabled={currentPage === page}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={page + idx} className="idb-pagination__item idb-pagination__ellipsis page-item disabled">
              <span aria-hidden="true">...</span>
            </li>
          )
        )}
        <li className="idb-pagination__item page-item">
          <button
            className="idb-pagination__button page-link"
            aria-label="Página siguiente"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}
