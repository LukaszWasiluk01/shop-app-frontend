import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Pagination.module.css'

interface PaginationProps {
  count: number
}

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const itemsPerPage = 8
  const maxPageNumber = count === 0 ? 1 : Math.ceil(count / itemsPerPage)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentPageNumber = searchParams.get('page') ?? '1'
  const currentPage = parseInt(currentPageNumber)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === maxPageNumber

  const generatePageLink = (pageNumber: number): string => {
    const updatedSearchParams = new URLSearchParams(searchParams)
    updatedSearchParams.set('page', pageNumber.toString())
    return `?${updatedSearchParams.toString()}`
  }

  const firstPageLink = generatePageLink(1)
  const lastPageLink = generatePageLink(maxPageNumber)
  const previousLink =
    currentPage > 1 ? generatePageLink(currentPage - 1) : null
  const nextLink =
    currentPage < maxPageNumber ? generatePageLink(currentPage + 1) : null

  return (
    <div className={styles.pagination}>
      <Link
        to={firstPageLink}
        className={`${styles.link} ${isFirstPage ? styles.disabled : ''}`}
      >
        First
      </Link>
      {previousLink !== null && (
        <Link
          to={previousLink}
          className={`${styles.link} ${styles.previousLink}`}
        >
          Previous
        </Link>
      )}
      <span
        className={styles.pageInfo}
      >{`Page ${currentPage} of ${maxPageNumber}`}</span>
      {nextLink !== null && (
        <Link to={nextLink} className={`${styles.link} ${styles.nextLink}`}>
          Next
        </Link>
      )}
      <Link
        to={lastPageLink}
        className={`${styles.link} ${isLastPage ? styles.disabled : ''}`}
      >
        Last
      </Link>
    </div>
  )
}

export default Pagination
