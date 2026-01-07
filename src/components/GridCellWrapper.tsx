import type { ReactNode } from 'react';

type GridCellWrapperProps = {
  children: ReactNode;
  title: string;
  titleId: string;
  cellClass?: string;
};

const GridCellWrapper = ({
  children,
  title,
  titleId,
  cellClass,
}: GridCellWrapperProps) => {
  return (
    <section
      aria-labelledby={titleId}
      className={` bg-off-white border border-theme-blue rounded-xl p-4 shadow-md shadow-theme-blue/30 | ${cellClass}`}
    >
      {/* cell title */}
      <h2 id={titleId} className="font-bold text-xl mb-4">
        {title}
      </h2>
      {/* cell content */}
      {children}
    </section>
  );
};

export default GridCellWrapper;
