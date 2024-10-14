'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { filterData } from '@/data/filterData';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';
import styles from '@/styles/styles';

export default function FilterRow({
  category,
  onFilterChange,
}: {
  category: string;
  onFilterChange: (category: string, selectedFilters: string[]) => void;
}) {
  const searchParams = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const chips = filterData[category] || [];
  const filterArea = styles.FilterArea;

  useEffect(() => {
    const queryValue = searchParams.get(category);
    if (queryValue && queryValue !== selectedFilters.join(',')) {
      setSelectedFilters(queryValue.split(','));
    }
  }, [searchParams, category]);

  const handleChipClick = (chipText: string) => {
    const updatedFilters = selectedFilters.includes(chipText)
      ? selectedFilters.filter((filter) => filter !== chipText)
      : [...selectedFilters, chipText];

    setSelectedFilters(updatedFilters);
    onFilterChange(category, updatedFilters);
  };

  return (
    <TableRow css={{ padding: 0 }}>
      <TableCell component="th" scope="row" css={filterArea.category}>
        {category}
      </TableCell>
      <TableCell css={filterArea.filterRow}>
        {chips.map((chipText: string) => (
          <Chip
            key={chipText}
            label={chipText}
            clickable
            color={selectedFilters.includes(chipText) ? 'primary' : 'default'}
            css={filterArea.chip}
            onClick={() => handleChipClick(chipText)}
          />
        ))}
      </TableCell>
    </TableRow>
  );
}
