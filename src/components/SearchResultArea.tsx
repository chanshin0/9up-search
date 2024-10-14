import { useEffect, useState } from 'react';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import CourseCard from './CourseCard';
import Pagination from './Pagination';
import styles from '@/styles/styles';
import { Course } from '@/types/courseTypes';

export default function SearchResultArea() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalCourses, setTotalCourses] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage: number = 20;
  const { searchResultArea } = styles;

  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const filterConditions: string =
          searchParams.get('filter_conditions') || '';
        const res: Response = await fetch(
          `/api/courses?filter_conditions=${filterConditions}&offset=${(page - 1) * itemsPerPage}&count=${itemsPerPage}`,
        );
        const data = await res.json();
        setCourses(data.courses || []);
        setTotalCourses(data.course_count || 0);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [page, searchParams]);

  const handlePageChange = (newPage: number) => {
    setLoading(true);
    setPage(newPage);
  };

  if (loading) return <p>강의 불러오는 중...</p>;

  return (
    <div>
      <p>전체 {totalCourses ?? 0}개</p>
      <div css={searchResultArea.courseGrid}>
        {courses?.length > 0 ? (
          courses.map((course: Course, index: number) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <p>조건에 맞는 강의가 존재하지 않습니다.</p>
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalCourses / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
