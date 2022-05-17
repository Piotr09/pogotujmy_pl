import Pagination from '@organisms/Pagination'
import type { ReactElement } from 'react'
import latinize from 'latinize'

import { StyledListing, StyledListingItemWrapper } from './Listing.styled'
import type { ListingProps } from './Listing.types'
import RelatedCard from '@molecules/RelatedCard'

export const Listing = ({
  allItemsNumber,
  filteredItems,
  changePage,
  currentPage,
  itemsPerPage,
  categoryListing,
}: ListingProps): ReactElement => (
  <>
    <StyledListing className="listing-wrapper">
      {filteredItems?.map((item) => (
        <StyledListingItemWrapper key={item.title} className="listing-item">
          <RelatedCard
            title={item.title}
            slug={
              categoryListing
                ? `${latinize(
                    categoryListing
                      .trim()
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/\-\-+/g, '-')
                      .replace(/^-+/, '')
                      .replace(/-+$/, '')
                      .replace(/,/g, ''),
                  )}/${item.slug}`
                : `${item.slug}`
            }
            image={item.image}
          />
        </StyledListingItemWrapper>
      ))}
    </StyledListing>
    <Pagination
      current={currentPage}
      maxPages={Math.ceil(allItemsNumber / (itemsPerPage ?? 12))}
      onPageChange={({ selected }) => changePage(selected)}
    />
  </>
)
