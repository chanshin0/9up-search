export interface FilterRowProps {
  category: string;
  onFilterChange: (category: string, selectedFilters: string[]) => void;
}

export type FilterAreaProps = {
  categories: string[];
  handleFilterChange: (category: string, selectedFilters: string[]) => void;
};

export interface SelectedFilterState {
  [category: string]: string[];
}

export interface FilterCondition {
  is_free?: boolean;
  tag_id?: number;
  course_type?: number;
  format?: string;
  field?: string;
  difficulty?: string;
}

export interface FilterConditions {
  $and: Array<{
    $or: FilterCondition[];
  }>;
}
