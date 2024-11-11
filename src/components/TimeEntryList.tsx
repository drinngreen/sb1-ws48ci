import React from 'react';
import { Trash2 } from 'lucide-react';
import { TimeEntry } from '../types';

interface TimeEntryListProps {
  entries: TimeEntry[];
  onDelete: (id: string) => void;
  formatDuration: (ms: number) => string;
}

export function TimeEntryList({ entries, onDelete, formatDuration }: TimeEntryListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      {entries.map(entry => (
        <div
          key={entry.id}
          className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-br from-[#2CD4BD]/10 to-transparent border border-[#2CD4BD]/20"
        >
          <div className="flex items-center gap-3">
            <div className="text-[#2CD4BD] capitalize">{entry.category}</div>
            <div className="text-[#2CD4BD]/60">{formatDuration(entry.duration)}</div>
          </div>
          <button
            onClick={() => onDelete(entry.id)}
            className="text-[#2CD4BD]/60 hover:text-[#2CD4BD] transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}