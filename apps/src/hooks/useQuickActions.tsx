
import { useState, useCallback, useEffect } from 'react';

interface QuickActionUsage {
  actionId: string;
  count: number;
  lastUsed: string;
}

interface QuickActionsState {
  isOpen: boolean;
  usage: QuickActionUsage[];
}

export const useQuickActions = () => {
  const [state, setState] = useState<QuickActionsState>({
    isOpen: false,
    usage: []
  });

  // Load usage patterns from localStorage
  useEffect(() => {
    const savedUsage = localStorage.getItem('artiordex-quick-actions-usage');
    if (savedUsage) {
      try {
        const parsed = JSON.parse(savedUsage);
        setState(prev => ({
          ...prev,
          usage: parsed.usage || []
        }));
      } catch (error) {
        console.error('Failed to load quick actions usage:', error);
      }
    }
  }, []);

  // Save usage patterns to localStorage
  const saveUsage = useCallback((usage: QuickActionUsage[]) => {
    try {
      localStorage.setItem('artiordex-quick-actions-usage', JSON.stringify({
        usage,
        lastUpdated: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Failed to save quick actions usage:', error);
    }
  }, []);

  const toggleOpen = useCallback(() => {
    setState(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  }, []);

  const setOpen = useCallback((isOpen: boolean) => {
    setState(prev => ({
      ...prev,
      isOpen
    }));
  }, []);

  const trackUsage = useCallback((actionId: string) => {
    setState(prev => {
      const existingUsage = prev.usage.find(u => u.actionId === actionId);
      let updatedUsage: QuickActionUsage[];

      if (existingUsage) {
        updatedUsage = prev.usage.map(u =>
          u.actionId === actionId
            ? { ...u, count: u.count + 1, lastUsed: new Date().toISOString() }
            : u
        );
      } else {
        updatedUsage = [
          ...prev.usage,
          {
            actionId,
            count: 1,
            lastUsed: new Date().toISOString()
          }
        ];
      }

      saveUsage(updatedUsage);
      return {
        ...prev,
        usage: updatedUsage
      };
    });
  }, [saveUsage]);

  const getMostUsedActions = useCallback((limit: number = 5) => {
    return state.usage
      .sort((a, b) => b.count - a.count)
      .slice(0, limit)
      .map(u => u.actionId);
  }, [state.usage]);

  const getRecentActions = useCallback((limit: number = 5) => {
    return state.usage
      .sort((a, b) => new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime())
      .slice(0, limit)
      .map(u => u.actionId);
  }, [state.usage]);

  const clearUsage = useCallback(() => {
    setState(prev => ({
      ...prev,
      usage: []
    }));
    localStorage.removeItem('artiordex-quick-actions-usage');
  }, []);

  return {
    isOpen: state.isOpen,
    usage: state.usage,
    toggleOpen,
    setOpen,
    trackUsage,
    getMostUsedActions,
    getRecentActions,
    clearUsage
  };
};
