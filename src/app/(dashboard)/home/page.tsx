// 'use client'
// import React from 'react'
// import {
//   BannerTourComponent,
//   DestinationFavoriteContainer,
//   DiscoverComponent,
//   ReviewContainer,
//   SearchComponent,
//   SlideReview,
//   TourPromotionComponent,
//   SubComponent,
// } from '@/containers/home'

// const Home = () => {
//   return (
//     <>
//       {/* search */}
//       <BannerTourComponent />
//       <div className="relative flex flex-col items-center justify-center">
//         <SearchComponent />
//         {/* About me */}
//         <SubComponent />
//         {/* tour promotion */}
//         <TourPromotionComponent />
//         {/* discover */}
//         <DiscoverComponent />
//         <DestinationFavoriteContainer />
//         <ReviewContainer />
//         <SlideReview />
//       </div>
//     </>
//   )
// }

// export default Home


'use client'

import React from 'react'
import useSearch from '@/hooks/ui/useSearch'

export default function Home() {
  const { onSearchChange, onTypeSearchChange, setTypeSort, setPage, setLimit, getQueryField } = useSearch()

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Search Page</h1>

      <div>
        <label className="mb-1 block font-medium">Search Keywords:</label>
        <input
          type="text"
          defaultValue={getQueryField('keywords')}
          onChange={onSearchChange}
          className="w-full rounded border p-2"
          placeholder="Type something..."
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Search Field:</label>
        <select
          value={getQueryField('searchField')}
          onChange={(e) => onTypeSearchChange(e.target.value)}
          className="w-full rounded border p-2"
        >
          <option value="">-- Select Field --</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-medium">Sort:</label>
        <button onClick={() => setTypeSort('asc')} className="mr-2 rounded border px-4 py-2">
          Sort Asc
        </button>
        <button onClick={() => setTypeSort('desc')} className="rounded border px-4 py-2">
          Sort Desc
        </button>
      </div>

      <div>
        <label className="mb-1 block font-medium">Pagination:</label>
        <button onClick={() => setPage(1)} className="mr-2 rounded border px-4 py-2">
          Page 1
        </button>
        <button onClick={() => setPage(2)} className="rounded border px-4 py-2">
          Page 2
        </button>
      </div>

      <div>
        <label className="mb-1 block font-medium">Limit:</label>
        <button onClick={() => setLimit(10)} className="mr-2 rounded border px-4 py-2">
          10
        </button>
        <button onClick={() => setLimit(20)} className="rounded border px-4 py-2">
          20
        </button>
      </div>
    </div>
  )
}
