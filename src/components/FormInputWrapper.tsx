import type { ReactNode } from 'react';

const FormInputWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-1 items-center justify-start text-[15px]">
      {children}
    </div>
  );
};

export default FormInputWrapper;
