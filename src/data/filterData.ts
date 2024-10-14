type FilterDataType = {
  [key: string]: string[];
};

export const filterData: FilterDataType = {
  유형: ['과목', '챌린지', '테스트'],
  '진행 방식': ['자유 선택형', '순차 완료형'],
  분야: ['프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
  난이도: ['입문', '초급', '중급', '고급', '심화'],
  언어: [
    'C',
    'C++',
    '자바',
    '파이썬',
    '자바스크립트',
    'R',
    'HTML/CSS',
    'SQL',
    '아두이노',
    '스크래치',
    '코틀린',
    '스위프트',
    '엔트리',
  ],
  가격: ['무료', '유료', '구독', '학점'],
};

export const filterDataEnglish: FilterDataType = {
  type: ['Course', 'Challenge', 'Test'],
  'Progress Type': ['Free Choice', 'Sequential Completion'],
  category: [
    'Programming Basics',
    'Data Analysis',
    'Web',
    'Artificial Intelligence',
    'Algorithms',
  ],
  level: ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'],
  language: [
    'C',
    'C++',
    'Java',
    'Python',
    'JavaScript',
    'R',
    'HTML/CSS',
    'SQL',
    'Arduino',
    'Scratch',
    'Kotlin',
    'Swift',
    'Entry',
  ],
  price: ['Free', 'Paid', 'Subscription', 'Credits'],
};
