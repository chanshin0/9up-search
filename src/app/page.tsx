'use client';

import FilterArea from '@/components/FilterArea';
import SearchArea from '@/components/SearchArea';
import SearchResultArea from '@/components/SearchResultArea';

export default function Home() {
  return (
    <main>
      <SearchArea />
      <FilterArea />
      <SearchResultArea />
    </main>
  );
}
