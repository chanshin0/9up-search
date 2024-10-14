'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import styles from '@/styles/styles';
import { IoIosSearch } from 'react-icons/io';
import { FilterConditions, searchArea } from '@/types/searchAreaTypes';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function SearchArea() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const searchArea: searchArea = styles.SearchArea;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const query = new URLSearchParams(searchParams.toString());

      const filterConditions: FilterConditions = {
        $and: [
          { title: `%${debouncedSearchTerm}%` },
          { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
          { is_datetime_enrollable: true },
        ],
      };

      const encodedFilterConditions = encodeURIComponent(
        JSON.stringify(filterConditions),
      );

      query.set('filter_conditions', encodedFilterConditions);

      router.push(`?${query.toString()}`);
    }
  }, [debouncedSearchTerm, router, searchParams]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div css={searchArea.base}>
      <IoIosSearch css={searchArea.icon} />
      <input
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        css={searchArea.textBox}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}
