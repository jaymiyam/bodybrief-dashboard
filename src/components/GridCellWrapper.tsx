import type { ReactNode } from 'react';

type GridCellWrapperProps = {
  children: ReactNode;
  title: string;
  cellClass?: string;
};

const GridCellWrapper = ({
  children,
  title,
  cellClass,
}: GridCellWrapperProps) => {
  return (
    <div
      className={` bg-off-white border border-theme-blue rounded-xl p-4 shadow-md shadow-theme-blue/30 | ${cellClass}`}
    >
      <h2 className="font-bold text-xl mb-4">{title}</h2>

      {children}
    </div>
  );
};

export default GridCellWrapper;
