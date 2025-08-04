import type { RefObject } from 'react';

interface TailSelect2Props {
  selRef: RefObject<HTMLSelectElement>;
  dText: string;
  children?: React.ReactNode;
}

export default function TailSelect2({ selRef, dText, children }: TailSelect2Props) {
  return (
    <select
      className="bg-gray-50 border mx-2 border-gray-300 text-gray-900
                 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500
                 block p-2.5"
      defaultValue={dText}
      ref={selRef}
    >
      {children}
    </select>
  );
}
