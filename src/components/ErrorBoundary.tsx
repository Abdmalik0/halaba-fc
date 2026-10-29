import React, { Component, ErrorInfo, ReactNode } from 'react';
import { HalabaCrest } from './HalabaCrest';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error?.message || 'An unexpected rendering error occurred.',
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary caught an error]:', error, errorInfo);
  }

  handleReload = () => {
    try {
      localStorage.removeItem('halaba_official_epl_standings_v12_real_table');
    } catch {
      // Ignore
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-neutral-100 text-center select-none">
          <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl space-y-5">
            <div className="flex justify-center">
              <HalabaCrest size={72} showGlow />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-sports font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>ችግር ተከስቷል • Recovery Mode</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-sports font-black text-white uppercase tracking-wider">
                HALABA CITY FC PORTAL
              </h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                ገጹን በመጫን ላይ ጊዜያዊ ችግር አጋጥሟል። እባክዎ ከታች ያለውን ቁልፍ በመጫን ገጹን ዳግም ያስጀምሩ።
              </p>
              <p className="text-xxs text-neutral-500 font-mono">
                {this.state.errorMessage}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={this.handleReload}
                className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/60 active:scale-95 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>ገጹን ዳግም አስጀምር / Reload App</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
