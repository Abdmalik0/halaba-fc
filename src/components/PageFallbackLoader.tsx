import React from 'react';
import { HalabaCrest } from './HalabaCrest';
import { Loader2 } from 'lucide-react';

export const PageFallbackLoader: React.FC = () => {
  return (
    <div className="min-h-[50vh] w-full flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="relative mb-3 flex items-center justify-center">
        <HalabaCrest size={56} />
      </div>
      <div className="flex items-center gap-2 text-xs font-sports font-bold uppercase tracking-wider text-neutral-400">
        <Loader2 className="w-3.5 h-3.5 animate-spin text-red-500" />
        <span>በመጫን ላይ... / Loading...</span>
      </div>
    </div>
  );
};
