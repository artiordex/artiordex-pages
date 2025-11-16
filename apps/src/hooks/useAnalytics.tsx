
import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface FilterUsageData {
  filterId: string;
  timestamp: number;
  sessionId: string;
}

interface ProjectViewData {
  projectId: string;
  timeSpent: number;
  scrollDepth: number;
  interactions: string[];
  timestamp: number;
  sessionId: string;
}

interface ConversionData {
  source: 'portfolio' | 'project-detail' | 'featured';
  projectId?: string;
  action: 'contact-form' | 'phone-call' | 'email' | 'download';
  timestamp: number;
  sessionId: string;
}

export const useAnalytics = () => {
  const sessionId = generateSessionId();

  // Generate unique session ID
  function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Track filter usage patterns
  const trackFilterUsage = (filterId: string) => {
    const data: FilterUsageData = {
      filterId,
      timestamp: Date.now(),
      sessionId
    };

    // Store in localStorage for analytics
    const existingData = JSON.parse(localStorage.getItem('artiordex_filter_analytics') || '[]');
    existingData.push(data);
    localStorage.setItem('artiordex_filter_analytics', JSON.stringify(existingData));

    // Send to analytics service (placeholder)
    sendAnalyticsEvent({
      action: 'filter_used',
      category: 'portfolio',
      label: filterId
    });
  };

  // Track project view metrics
  const trackProjectView = (projectId: string, timeSpent: number, scrollDepth: number, interactions: string[]) => {
    const data: ProjectViewData = {
      projectId,
      timeSpent,
      scrollDepth,
      interactions,
      timestamp: Date.now(),
      sessionId
    };

    // Store in localStorage for analytics
    const existingData = JSON.parse(localStorage.getItem('artiordex_project_analytics') || '[]');
    existingData.push(data);
    localStorage.setItem('artiordex_project_analytics', JSON.stringify(existingData));

    // Send to analytics service
    sendAnalyticsEvent({
      action: 'project_viewed',
      category: 'portfolio',
      label: projectId,
      value: timeSpent
    });
  };

  // Track conversion events
  const trackConversion = (source: ConversionData['source'], action: ConversionData['action'], projectId?: string) => {
    const data: ConversionData = {
      source,
      projectId,
      action,
      timestamp: Date.now(),
      sessionId
    };

    // Store in localStorage for analytics
    const existingData = JSON.parse(localStorage.getItem('artiordex_conversion_analytics') || '[]');
    existingData.push(data);
    localStorage.setItem('artiordex_conversion_analytics', JSON.stringify(existingData));

    // Send to analytics service
    sendAnalyticsEvent({
      action: 'conversion',
      category: source,
      label: `${action}${projectId ? `_${projectId}` : ''}`,
      value: 1
    });
  };

  // Send analytics event (placeholder for actual analytics service)
  const sendAnalyticsEvent = (event: AnalyticsEvent) => {
    // This would integrate with Google Analytics, Mixpanel, or other analytics services
    console.log('Analytics Event:', event);
    
    // Example Google Analytics 4 integration:
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
  };

  // Track page view
  const trackPageView = (page: string) => {
    sendAnalyticsEvent({
      action: 'page_view',
      category: 'navigation',
      label: page
    });
  };

  // Get analytics insights
  const getAnalyticsInsights = () => {
    const filterData = JSON.parse(localStorage.getItem('artiordex_filter_analytics') || '[]');
    const projectData = JSON.parse(localStorage.getItem('artiordex_project_analytics') || '[]');
    const conversionData = JSON.parse(localStorage.getItem('artiordex_conversion_analytics') || '[]');

    // Analyze filter usage patterns
    const filterUsage = filterData.reduce((acc: Record<string, number>, item: FilterUsageData) => {
      acc[item.filterId] = (acc[item.filterId] || 0) + 1;
      return acc;
    }, {});

    // Analyze most viewed projects
    const projectViews = projectData.reduce((acc: Record<string, number>, item: ProjectViewData) => {
      acc[item.projectId] = (acc[item.projectId] || 0) + 1;
      return acc;
    }, {});

    // Analyze conversion rates
    const conversionRates = conversionData.reduce((acc: Record<string, number>, item: ConversionData) => {
      const key = `${item.source}_${item.action}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return {
      filterUsage,
      projectViews,
      conversionRates,
      totalSessions: new Set(filterData.map((item: FilterUsageData) => item.sessionId)).size
    };
  };

  // Heat mapping simulation (would integrate with actual heat mapping service)
  const trackHeatMapData = (elementId: string, x: number, y: number) => {
    const heatMapData = {
      elementId,
      x,
      y,
      timestamp: Date.now(),
      sessionId
    };

    const existingData = JSON.parse(localStorage.getItem('artiordex_heatmap_analytics') || '[]');
    existingData.push(heatMapData);
    localStorage.setItem('artiordex_heatmap_analytics', JSON.stringify(existingData));
  };

  // A/B Testing framework
  const getABTestVariant = (testName: string): 'A' | 'B' => {
    const stored = localStorage.getItem(`ab_test_${testName}`);
    if (stored) return stored as 'A' | 'B';

    const variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem(`ab_test_${testName}`, variant);
    
    sendAnalyticsEvent({
      action: 'ab_test_assigned',
      category: 'experiment',
      label: `${testName}_${variant}`
    });

    return variant;
  };

  return {
    trackFilterUsage,
    trackProjectView,
    trackConversion,
    trackPageView,
    trackHeatMapData,
    getAnalyticsInsights,
    getABTestVariant,
    sessionId
  };
};

// Hook for scroll depth tracking
export const useScrollDepth = (callback: (depth: number) => void) => {
  useEffect(() => {
    let maxDepth = 0;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentDepth = Math.round((scrollTop / documentHeight) * 100);
      
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
        callback(currentDepth);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};

// Hook for time tracking
export const useTimeTracking = (callback: (timeSpent: number) => void) => {
  useEffect(() => {
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      callback(timeSpent);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Also track on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Date.now() - startTime;
        callback(timeSpent);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [callback]);
};
