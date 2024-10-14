/* eslint-disable camelcase */
import styles from '@/styles/styles';
import { Course } from '@/types/courseTypes';
import Image from 'next/image';
import { CgCalendarDates } from 'react-icons/cg';
import { SiGoogleclassroom, SiLevelsdotfyi } from 'react-icons/si';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { title, short_description, enroll_type, is_free, logo_file_url } =
    course;

  const searchResultArea = styles.searchResultArea;

  const getLabel = (): string => {
    if (enroll_type === 0) {
      return is_free ? '무료' : '유료';
    } else if (enroll_type === 4) {
      return '구독';
    }
    return '';
  };

  return (
    <div css={searchResultArea.courseCard}>
      <div>
        <h2 css={searchResultArea.title}>{title}</h2>
        <p css={searchResultArea.description}>{short_description}</p>
      </div>
      <div css={styles.row}>
        <div>
          <div css={searchResultArea.iconText}>
            <SiLevelsdotfyi />
            <span>난이도</span>
            <span>:</span>
            <span>미설정</span>
          </div>
          <div css={searchResultArea.iconText}>
            <SiGoogleclassroom />
            <span>수업</span>
            <span>:</span>
            <span>온라인</span>
          </div>
          <div css={searchResultArea.iconText}>
            <CgCalendarDates />
            <span>기간</span>
            <span>:</span>
            <span>무제한</span>
          </div>
        </div>
        <div>
          {logo_file_url ? (
            <Image
              src={logo_file_url}
              alt="Course Logo"
              css={searchResultArea.logo}
              width={52}
              height={52}
            />
          ) : null}
        </div>
      </div>
      <div css={searchResultArea.label}>{getLabel()}</div>
    </div>
  );
}
