/**
 * Description : .cz-config.cjs - 📌 Commitizen 커밋 메시지 규칙 정의 파일
 * Author : Shiwoo Min
 * Date : 2025-09-17
 */

module.exports = {
  // 커밋 타입 정의
  types: [
    { value: 'feat', name: 'feat: 새로운 기능 추가' },
    { value: 'fix', name: 'fix: 버그 수정' },
    { value: 'docs', name: 'docs: 문서/주석 업데이트' },
    { value: 'style', name: 'style: 스타일/포맷 변경 (코드 변경 없음)' },
    { value: 'refactor', name: 'refactor: 기능 변화 없는 리팩토링' },
    { value: 'perf', name: 'perf: 성능 최적화' },
    { value: 'test', name: 'test: 테스트 추가 및 개선' },
    { value: 'build', name: 'build: 빌드/배포 관련 수정 (Vite, env 등)' },
    { value: 'ci', name: 'ci: CI/CD 설정 변경' },
    { value: 'chore', name: 'chore: 유지보수, 패키지 업데이트, 기타 작업' },
    { value: 'revert', name: 'revert: 커밋 되돌리기' }
  ],
  // 작업 범위(scope) 선택 항목
  scopes: [
    // Apps
     // 메인 앱
    { name: 'app' },
    { name: 'router' },
    { name: 'pages' },
    { name: 'layouts' },

    // UI 시스템
    { name: 'ui' },
    { name: 'components' },
    { name: 'animations' },
    { name: 'hooks' },
    { name: 'styles' },

    // 데이터/상태
    { name: 'store' },
    { name: 'api' },

    // 설정/환경 관련
    { name: 'config' },  // eslint, prettier, tailwind, tsconfig, vite 등
    { name: 'assets' },

    // 회사/정책 문서
    { name: 'legal' },
    { name: 'docs' }
  ],

  // 커스텀 범위 직접 입력 허용
  allowCustomScopes: true,

  // BREAKING CHANGES 메시지를 작성할 수 있는 타입
  allowBreakingChanges: ['feat', 'fix'],

  // 질문 스킵할 항목 (본문, footer는 생략 가능)
  skipQuestions: ['body', 'footer'],

  // subject 최대 길이 제한 (100자 권장)
  subjectLimit: 100,

  // 사용자에게 보여질 메시지 정의
  messages: {
    type: '변경유형 선택 (취소하려면 Ctrl+C):',
    scope: '변경 범위 선택 (취소하려면 Ctrl+C):',
    subject: '변경 메시지 작성 (취소하려면 Ctrl+C):',
    breaking: '중대한 변경사항(BREAKING CHANGES)이 있나요? (선택):',
    footer: '관련 이슈 번호 혹은 링크 (옵션):',
    confirmCommit: '이 커밋 메시지로 진행할까요?',
  },
};
