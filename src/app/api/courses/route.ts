import { NextResponse } from 'next/server';
import axios from 'axios';
import { Course } from '@/types/courseTypes';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const offset = searchParams.get('offset') || '0';
    const count = searchParams.get('count') || '20';
    const filterConditions = searchParams.get('filter_conditions') || '';

    const response = await axios.get(
      `https://api-rest.elice.io/org/academy/course/list/?offset=${offset}&count=${count}&filter_conditions=${filterConditions}`,
    );

    const data = response.data;

    const courses: Course[] = data.courses.map((course: Course) => ({
      title: course.title,
      short_description: course.short_description,
      enroll_type: course.enroll_type,
      is_free: course.is_free,
      logo_file_url: course.logo_file_url,
    }));

    return NextResponse.json({ courses, course_count: data.course_count });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 },
    );
  }
}
