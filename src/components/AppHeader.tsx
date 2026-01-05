import { Icon } from '@iconify/react';

type AppHeaderProps = {
  onAboutClick: () => void;
  onExportClick: () => void;
};

const AppHeader = ({ onAboutClick, onExportClick }: AppHeaderProps) => {
  return (
    <header className="py-4 mt-4 flex flex-col sm:flex-row gap-y-2 md:gap-y-0 sm:items-center justify-between">
      <div className="flex flex-col md:flex-row items-baseline gap-2">
        <h1 className="text-theme-blue font-bold text-3xl md:text-4xl">
          BodyBrief
        </h1>
        <p className="text-theme-blue text-base md:text-xl">
          Your health metrics all in one place.
        </p>
      </div>
      <div className="flex items-center gap-2 justify-start">
        <button
          onClick={onAboutClick}
          className="cursor-pointer font-medium text-theme-blue hover:text-off-black transition"
        >
          <span className="sr-only">about this project</span>
          <Icon icon="material-symbols:info-outline" width="28" height="28" />
        </button>
        <button
          onClick={onExportClick}
          type="button"
          className="cursor-pointer px-4 py-2 text-off-black text-base font-medium bg-white border border-theme-blue rounded-xl shadow-md shadow-theme-blue/30 hover:border-white hover:text-white hover:bg-theme-blue transition-all"
        >
          Download as PDF
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
