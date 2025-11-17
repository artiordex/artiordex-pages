/**
 * Description : animation.types.ts - 📌 애니메이션 UI 컴포넌트 타입 정의
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import type React from 'react';

export interface CSSCustomProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number | undefined;
}

/* 기본 애니메이션 Props */
export interface BaseAnimationProps {
  className?: string;
  style?: CSSCustomProperties;
}

/* 로딩 스피너 */
export interface LoadingSpinnerProps extends BaseAnimationProps {
  size?: 'small' | 'medium' | 'large' | number;
  color?: string;
  thickness?: number;
}

/* 전체 페이지 로딩 화면 */
export interface LoadingPageProps {
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

/* 펄스 로더 */
export interface PulseLoaderProps extends BaseAnimationProps {
  color?: string;
  count?: number;
}

/* 타이핑 인디케이터 (... 애니메이션) */
export interface TypingIndicatorProps extends BaseAnimationProps {
  dotColor?: string;
  dotCount?: number;
}

/* 성공 체크 */
export interface SuccessCheckProps extends BaseAnimationProps {
  size?: 'small' | 'medium' | 'large' | number;
  color?: string;
  onAnimationEnd?: () => void;
}

/* 실패 X 표시 */
export interface ErrorCrossProps extends BaseAnimationProps {
  size?: 'small' | 'medium' | 'large' | number;
  color?: string;
  onAnimationEnd?: () => void;
}

/* 스켈레톤 */
export interface SkeletonLoaderProps extends BaseAnimationProps {
  width?: number | string;
  height?: number | string;
  variant?: 'text' | 'title' | 'avatar' | 'rectangular';
  lines?: number;
}

/* 알림/토스트 */
export interface FloatingNotificationProps extends BaseAnimationProps {
  children: React.ReactNode;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  onClose?: () => void;
  autoClose?: boolean;
}

/* 리스트 애니메이션 */
export interface AnimatedListProps extends BaseAnimationProps {
  children: React.ReactNode | React.ReactNode[];
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

/* Progress / Circular Progress */
export interface ProgressBarProps extends BaseAnimationProps {
  progress: number;
  animated?: boolean;
  color?: string;
  backgroundColor?: string;
  height?: number;
  showLabel?: boolean;
}

export interface CircularProgressProps extends BaseAnimationProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showLabel?: boolean;
}

/* 모달형 애니메이션 */
export interface AnimationModalProps extends BaseAnimationProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
}

/* Fade / Heartbeat */
export interface FadeProps extends BaseAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  trigger?: boolean;
}

export interface HeartbeatProps extends BaseAnimationProps {
  children: React.ReactNode;
  fast?: boolean;
  active?: boolean;
}
