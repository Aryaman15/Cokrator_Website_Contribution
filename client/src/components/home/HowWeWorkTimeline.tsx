import { motion } from 'framer-motion';
import { howWeWorkSteps } from '../../data/howWeWorkSteps';

const HowWeWorkTimeline = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mb-10 flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">How We Work</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">A structured, six-step workflow from first brief to final delivery.</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
          Each milestone keeps projects transparent and on-schedule, pairing experienced publishing talent with clear communication.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-[22px] top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
        <div className="flex flex-col gap-14 md:gap-16">
          {howWeWorkSteps.map((step) => {
            const isOdd = step.id % 2 !== 0;
            const cardVariants = {
              hidden: { opacity: 0, x: isOdd ? 60 : -60 },
              visible: { opacity: 1, x: 0 },
            };
            const imageVariants = {
              hidden: { opacity: 0, x: isOdd ? -60 : 60 },
              visible: { opacity: 1, x: 0 },
            };

            return (
              <div key={step.id} className="relative">
                <div className="grid items-center gap-6 md:grid-cols-[1fr,120px,1fr] md:gap-10">
                  <motion.div
                    className={`order-2 md:order-none ${
                      isOdd ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-3 md:justify-self-start'
                    } flex justify-start md:justify-center`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    variants={imageVariants}
                  >
                    <div className="group relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/15 via-primary/10 to-transparent blur-xl" aria-hidden="true" />
                      <div className="relative rounded-2xl bg-white p-5 shadow-lg transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl md:p-6">
                        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 md:h-40 md:w-40">
                          <img src={step.image} alt={step.title} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="relative flex justify-center md:col-start-2">
                    <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent md:left-1/2 md:top-6 md:-translate-x-1/2" aria-hidden="true" />
                    <motion.div
                      className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-accent text-base font-semibold text-white shadow-lg md:h-14 md:w-14"
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      {step.id.toString().padStart(2, '0')}
                    </motion.div>
                  </div>

                  <motion.div
                    className={`order-3 md:order-none ${
                      isOdd ? 'md:col-start-3 md:justify-self-start' : 'md:col-start-1 md:justify-self-end'
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                    variants={cardVariants}
                  >
                    <div className="group rounded-3xl bg-white px-5 py-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl md:px-7 md:py-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">{step.shortLabel}</p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900 md:text-xl">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTimeline;
