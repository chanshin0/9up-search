import styles from '@/styles/styles';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const maxPagesToShow = 9;
  const maxSidePages = 4;

  const generatePageNumbers = (): number[] => {
    let startPage = Math.max(currentPage - maxSidePages, 1);
    let endPage = Math.min(currentPage + maxSidePages, totalPages);

    if (endPage - startPage + 1 < maxPagesToShow && endPage < totalPages) {
      endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
    }

    if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = generatePageNumbers();

  if (pageNumbers.length === 0) return null;

  return (
    <div css={styles.pagination.container}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        css={
          currentPage === 1
            ? styles.pagination.arrowDisabled
            : styles.pagination.arrowActive
        }
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          css={
            page === currentPage
              ? styles.pagination.active
              : styles.pagination.box
          }
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        css={
          currentPage === totalPages
            ? styles.pagination.arrowDisabled
            : styles.pagination.arrowActive
        }
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}
