import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="pt-[76px] min-h-screen bg-white hero-grid-bg relative flex flex-col items-center justify-center text-center px-5 py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <p className="absolute -bottom-10 -left-6 font-display font-extrabold text-[26vw] leading-none text-outline-faint select-none">ERR</p>
          </div>
          <div className="max-w-2xl flex flex-col items-center relative z-10">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-obsidian mb-6">System Error</h1>
            <p className="text-mutedink text-lg mb-8">
              We've encountered an unexpected issue processing your request. The application has crashed.
            </p>
            
            {this.state.error && (
              <div className="w-full text-left bg-slate-50 p-6 rounded-xl border border-slate-200 mb-10 overflow-auto">
                <p className="text-red-500 font-mono text-sm font-semibold mb-2">Error Details (visible for debugging):</p>
                <pre className="text-slate-600 font-mono text-xs whitespace-pre-wrap">
                  {this.state.error.toString()}
                </pre>
              </div>
            )}

            <button 
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-white rounded-full font-semibold hover:bg-electric transition-all duration-300"
            >
              <RefreshCcw className="w-5 h-5" />
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
