type AboutDialogProps = {
  open: boolean;
  onCloseClick: () => void;
};

const AboutDialog = ({ open, onCloseClick }: AboutDialogProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/40 animate-fade-in">
      <dialog
        open
        aria-labelledby="about-title"
        className="relative rounded-2xl p-0 w-full max-w-xl mx-4"
      >
        <div className="bg-white text-off-black rounded-2xl shadow-xl">
          {/* Header */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
            <h2 id="about-title" className="text-lg font-semibold">
              About This Project
            </h2>
            <button
              onClick={onCloseClick}
              type="button"
              aria-label="Close dialog"
              className="cursor-pointer text-theme-blue hover:text-off-black transition"
            >
              ✕
            </button>
          </header>

          {/* Content */}
          <div className="px-6 py-5 space-y-6 text-sm leading-relaxed max-h-120 overflow-y-scroll">
            <section>
              <p className="text-theme-blue">
                <strong>IMPORTANT: </strong>
                Download as PDF function is recommended to be used on browser
                width od <strong>1200px or above</strong> for optimal
                appearance.
              </p>
            </section>
            <section>
              <p>
                This dashboard is a{' '}
                <strong>quick health metrics calculator</strong>
                designed to help you understand common fitness-related numbers
                such as BMI, daily calorie needs, and heart rate zones.
              </p>
            </section>

            <section aria-labelledby="calculation-title">
              <h3 id="calculation-title" className="font-medium text-off-black">
                How Are the Metrics Calculated?
              </h3>

              <ul className="mt-3 space-y-2 list-disc list-inside text-off-black">
                <li>
                  <strong>BMI (Body Mass Index):</strong> Height and weight
                  using WHO categories.
                </li>
                <li>
                  <strong>BMR (Basal Metabolic Rate):</strong> Estimated with
                  the
                  <em> Mifflin–St Jeor equation</em>.
                </li>
                <li>
                  <strong>TDEE (Total Daily Energy Expenditure):</strong> BMR
                  adjusted by activity level.
                </li>
                <li>
                  <strong>Daily Calorie Intake:</strong> Derived from TDEE for
                  cut, maintain, or bulk.
                </li>
                <li>
                  <strong>Heart Rate Zones:</strong> Estimated from age-based
                  max heart rate.
                </li>
              </ul>

              <p className="mt-3 text-off-black">
                All calculations are approximations intended for general
                understanding.
              </p>
            </section>

            <section aria-labelledby="disclaimer-title">
              <h3 className="font-medium text-off-black">Disclaimer</h3>

              <p className="mt-2 text-off-black">
                This tool is provided{' '}
                <strong>for educational and informational purposes only</strong>
                . Always consult a qualified healthcare or fitness professional
                before making decisions related to your health.
              </p>
            </section>
          </div>

          {/* Footer */}
          <footer className="px-6 py-4 border-t border-neutral-200 flex justify-end">
            <button
              onClick={onCloseClick}
              type="button"
              className="cursor-pointer px-4 py-2 text-off-black text-sm font-medium bg-white border border-theme-blue rounded-xl shadow-md shadow-theme-blue/30 hover:border-white hover:text-white hover:bg-theme-blue transition-all"
            >
              Close
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
};

export default AboutDialog;
