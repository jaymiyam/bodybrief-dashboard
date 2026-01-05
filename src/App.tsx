import { useState, useRef } from 'react';
import { HealthMetricsContextProvider } from './context/HealthMetricsContext';
import MainDashboard from './components/MainDashboard';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AboutDialog from './components/AboutDialog';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

const App = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  const handleExportPDF = async () => {
    if (!dashboardRef.current) return;

    // capture the dashboard DOM element to a canvas
    const dataUrl = await toPng(dashboardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    // create PDF file
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Maintain aspect ratio
    const img = new Image();
    img.src = dataUrl;
    await img.decode();

    const ratio = Math.min(pdfWidth / img.width, pdfHeight / img.height);

    const imgWidth = img.width * ratio - 20;
    const imgHeight = img.height * ratio - 20;

    // add the dashboard image to PDF file
    pdf.addImage(
      dataUrl,
      'PNG',
      (pdfWidth - imgWidth) / 2,
      (pdfHeight - imgHeight) / 2,
      imgWidth,
      imgHeight
    );

    // trigger download for the PDF file
    pdf.save('BodyBrief-dashboard.pdf');
  };

  return (
    <HealthMetricsContextProvider>
      <main className="max-w-7xl mx-auto px-6">
        <AppHeader
          onAboutClick={() => setIsAboutOpen(true)}
          onExportClick={handleExportPDF}
        />
        <div ref={dashboardRef}>
          <MainDashboard />
        </div>
        <AboutDialog
          open={isAboutOpen}
          onCloseClick={() => setIsAboutOpen(false)}
        />
      </main>
      <AppFooter />
    </HealthMetricsContextProvider>
  );
};

export default App;
