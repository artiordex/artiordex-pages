/**
 * Description : Animation.tsx - 📌 UI 애니메이션 React 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import React, { useEffect, useState, useCallback } from 'react';
import type {
  PulseLoaderProps,
  SkeletonLoaderProps,
  FloatingNotificationProps,
  FadeProps,
  ProgressBarProps,
  CircularProgressProps,
  TypingIndicatorProps
} from '@/types/animation.types';

/**
 * PulseLoader
 * 점 형태의 간단한 로딩 애니메이션 컴포넌트
 * @param count - 표시할 점의 개수(1~3)
 * @param color - 점 색상
 * @param className - 추가 클래스명
 */
export const PulseLoader: React.FC<PulseLoaderProps> = ({
  count = 3,
  color,
  className = ''
}) => {
  const dots = Math.max(1, Math.min(3, count));

  return (
    <div
      className={`flex gap-1 ${className}`}
      style={{ '--color': color } as React.CSSProperties}
      data-color
    >
      {Array.from({ length: dots }).map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-current animate-pulse"
          style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}
          data-delay
        />
      ))}
    </div>
  );
};

/**
 * SkeletonLoader
 * 콘텐츠 로딩 시 보여주는 스켈레톤 UI
 * @param variant - 모양(rectangular | avatar)
 * @param lines - 여러 줄 표시 여부
 * @param width - 가로 길이(px)
 * @param height - 세로 길이(px)
 * @param className - 추가 클래스명
 */
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'rectangular',
  lines = 1,
  width,
  height,
  className = ''
}) => {
  const base = `bg-gray-200 animate-pulse ${
    variant === 'avatar' ? 'rounded-full' : 'rounded-md'
  }`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={base}
          style={{ '--w': width, '--h': height } as React.CSSProperties}
          data-w
          data-h
        />
      ))}
    </div>
  );
};

/**
 * FloatingNotification
 * 화면 상단에 나타나는 일시적 알림 메시지
 * @param type - 알림 종류(success | error | info | warning)
 * @param duration - 자동 닫힘 시간(ms)
 * @param autoClose - 자동 닫힘 여부
 * @param onClose - 닫힘 콜백
 * @param className - 추가 클래스명
 */
export function FloatingNotification({
  children,
  type = 'success',
  duration = 2500,
  onClose,
  autoClose = true,
  className = '',
}: FloatingNotificationProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const t = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(t);
    }
  }, [autoClose, duration, onClose]);

  if (!show) return null;

  const colorMap = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <div
      className={`fixed right-4 top-4 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in ${colorMap[type]} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Fade
 * 요소에 부드러운 페이드-인 효과를 부여하는 래퍼 컴포넌트
 * @param direction - 등장 방향(up | down | left | right)
 * @param duration - 애니메이션 시간(ms)
 * @param trigger - 트리거 활성화 여부
 * @param className - 추가 클래스명
 */
export const Fade: React.FC<FadeProps> = ({
  children,
  direction = 'up',
  duration = 600,
  trigger = true,
  className = '',
}) => {
  if (!trigger) return <>{children}</>;

  const dir = {
    up: 'translateY(12px)',
    down: 'translateY(-12px)',
    left: 'translateX(12px)',
    right: 'translateX(-12px)',
  }[direction];

  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{
        '--fade-from': dir,
        '--duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

/**
 * ProgressBar
 * 기본 직선 형태의 진행 바
 * @param progress - 진행률(0~100)
 * @param color - 진행 색상
 * @param backgroundColor - 배경 색상
 * @param height - 높이(px)
 * @param showLabel - 퍼센트 표시 여부
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  color = '#3b82f6',
  backgroundColor = '#e5e7eb',
  height = 8,
  showLabel = false,
  className = '',
}) => {
  return (
    <div
      className={`rounded-full overflow-hidden ${className}`}
      style={{ '--bg': backgroundColor, '--h': `${height}px` } as React.CSSProperties}
      data-bg
      data-h
    >
      <div
        className="transition-all ease-out h-full"
        style={{ '--progress': `${progress}%`, '--color': color } as React.CSSProperties}
        data-progress
        data-color
      ></div>
      {showLabel && <span className="ml-2">{Math.round(progress)}%</span>}
    </div>
  );
};

/**
 * CircularProgress
 * 원형 형태의 진행률 표시 컴포넌트
 * @param progress - 진행률(0~100)
 * @param size - 크기(px)
 * @param strokeWidth - 두께(px)
 * @param color - 진행 색상
 * @param backgroundColor - 배경 원 색상
 * @param showLabel - 퍼센트 표시 여부
 */
export const CircularProgress: React.FC<CircularProgressProps> = ({
  progress = 0,
  size = 60,
  strokeWidth = 5,
  color = '#3b82f6',
  backgroundColor = '#e5e7eb',
  showLabel = false,
}) => {
  const radius = (size - strokeWidth) / 2;
  const total = 2 * Math.PI * radius;
  const offset = total - (progress / 100) * total;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ '--w': `${size}px`, '--h': `${size}px` } as React.CSSProperties}
      data-w
      data-h
    >
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={backgroundColor} strokeWidth={strokeWidth} fill="transparent" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={total}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all"
        />
      </svg>

      {showLabel && (
        <div className="absolute flex items-center justify-center inset-0 font-medium">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};

/**
 * TypingIndicator
 * 채팅 입력 중 점 애니메이션(●●●)
 * @param dotCount - 점 개수
 * @param dotColor - 점 색상
 * @param className - 추가 클래스명
 */
export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  dotCount = 3,
  dotColor = '#aaa',
  className = '',
}) => {
  const count = Math.max(1, Math.min(3, dotCount));

  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full animate-bounce"
          style={{ '--dot-color': dotColor, '--delay': `${i * 0.15}s` } as React.CSSProperties}
          data-dot-color
          data-delay
        />
      ))}
    </div>
  );
};

/**
 * useIntersectionAnimation
 * 스크롤 시 요소가 뷰포트에 들어오면 애니메이션 트리거
 * @param options - IntersectionObserver 옵션
 * @returns ref, isVisible
 */
export const useIntersectionAnimation = (options: IntersectionObserverInit = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useCallback((node: Element | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(node);
  }, []);

  return [ref, isVisible] as const;
};

export default {
  PulseLoader,
  SkeletonLoader,
  FloatingNotification,
  Fade,
  ProgressBar,
  CircularProgress,
  TypingIndicator,
  useIntersectionAnimation,
};
