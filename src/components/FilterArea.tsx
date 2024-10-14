import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { filterData } from '@/data/filterData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import FilterRow from './FilterRow';
import { createFilterQuery } from '@/data/dataUtils';
import { SelectedFilterState } from '@/types/filterTypes';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function FilterArea() {
  const categories: string[] = Object.keys(filterData);
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const handleFilterChange = (category: string, selectedFilters: string[]) => {
    const selectedFilterState: SelectedFilterState = {};

    categories.forEach((cat: string) => {
      const filters: string[] = searchParams.getAll(cat);
      selectedFilterState[cat] = filters;
    });

    selectedFilterState[category] = selectedFilters;

    const filterQuery: string | null = createFilterQuery(selectedFilterState);

    if (filterQuery) {
      router.replace(`?${filterQuery}`, undefined);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('filter_conditions');
      router.replace(`?${params.toString()}`, undefined);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {categories.map((category: string) => (
            <FilterRow
              key={category}
              category={category}
              onFilterChange={handleFilterChange}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
