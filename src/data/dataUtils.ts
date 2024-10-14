import { FilterConditions } from '@/types/filterTypes';

export function createFilterQuery(
  selectedFilters: Record<string, string[]>,
): string | null {
  const filterConditions: FilterConditions = { $and: [] };

  Object.keys(selectedFilters).forEach((filterKey) => {
    const selectedValues = selectedFilters[filterKey];

    if (selectedValues.length > 0) {
      if (filterKey === '가격') {
        const priceConditions = selectedValues.map((value) => {
          return value === '무료' ? { is_free: true } : { is_free: false };
        });
        filterConditions.$and.push({ $or: priceConditions });
      } else if (filterKey === '언어') {
        const languageConditions = selectedValues.map((value) => {
          return { tag_id: getTagIdByLanguage(value) };
        });
        filterConditions.$and.push({ $or: languageConditions });
      } else if (filterKey === '유형') {
        const typeConditions = selectedValues.map((value) => {
          return { course_type: getCourseTypeId(value) };
        });
        filterConditions.$and.push({ $or: typeConditions });
      } else if (filterKey === '진행 방식') {
        const formatConditions = selectedValues.map((value) => {
          return { format: value };
        });
        filterConditions.$and.push({ $or: formatConditions });
      } else if (filterKey === '분야') {
        const fieldConditions = selectedValues.map((value) => {
          return { field: value };
        });
        filterConditions.$and.push({ $or: fieldConditions });
      } else if (filterKey === '난이도') {
        const difficultyConditions = selectedValues.map((value) => {
          return { difficulty: value };
        });
        filterConditions.$and.push({ $or: difficultyConditions });
      }
    }
  });

  if (filterConditions.$and.length === 0) {
    return null;
  }

  const query = encodeURIComponent(JSON.stringify(filterConditions));
  return `filter_conditions=${query}`;
}

function getTagIdByLanguage(language: string): number {
  const tagMap: Record<string, number> = {
    C: 1,
    'C++': 2,
    자바: 3,
    파이썬: 4,
    자바스크립트: 5,
    R: 6,
    'HTML/CSS': 7,
    SQL: 8,
    아두이노: 9,
    스크래치: 10,
    코틀린: 11,
    스위프트: 12,
    엔트리: 13,
  };
  return tagMap[language];
}
function getCourseTypeId(courseType: string): number {
  const typeMap: Record<string, number> = {
    과목: 0,
    챌린지: 1,
    테스트: 2,
  };
  return typeMap[courseType];
}
