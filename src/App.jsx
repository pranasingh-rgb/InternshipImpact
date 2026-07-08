import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Cpu,
  Layers3,
  MapPinned,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Workflow,
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Step 1 — Assignment',
    description: 'The routing engine assigns bags to Driver Associates based on route logic, capacity, and delivery proximity.',
  },
  {
    id: 2,
    title: 'Step 2 — Relay anomaly',
    description: 'Some DAs redirect deliveries to other routes instead of finishing the assigned handoff, which creates invisible loops.',
  },
  {
    id: 3,
    title: 'Step 3 — System fulfillment',
    description: 'The platform still records the assignment as fulfilled because the parcel moved through the workflow, even though no real delivery occurred.',
  },
  {
    id: 4,
    title: 'Step 4 — Productivity distortion',
    description: 'The relay behavior corrupts the data model, reduces real productivity, and inflates hub processing time through repeated handoffs.',
  },
];

const chartPalette = [
  { bar: 'from-emerald-500 to-teal-400', glow: 'shadow-emerald-200/60', stroke: '#10b981' },
  { bar: 'from-sky-500 to-cyan-400', glow: 'shadow-sky-200/60', stroke: '#0ea5e9' },
  { bar: 'from-indigo-500 to-violet-400', glow: 'shadow-indigo-200/60', stroke: '#6366f1' },
  { bar: 'from-amber-400 to-orange-400', glow: 'shadow-amber-200/60', stroke: '#f59e0b' },
];

const slides = [
  {
    id: 1,
    sectionId: 'introduction',
    icon: Sparkles,
    eyebrow: 'Introduction',
    title: 'LOGISTICS INTERNSHIP IMPACT REPORT',
    body: 'OPERATIONAL ANALYTICS & TECHNOLOGY PROTOTYPES',
    details: ['PRESENTER: PRANAV PRATAP SINGH', 'ROLE: LOGISTICS TECH INTERN', 'PERIOD: SUMMER 2026'],
    links: [
      { label: 'Bagging Compliance', href: '#bagging-compliance' },
      { label: 'Call Auditing', href: '#call-auditing' },
      { label: 'Analytics', href: '#analytics' },
      { label: 'Shadow Testing', href: '#shadow-testing' },
    ],
  },
  {
    id: 2,
    sectionId: 'bagging-compliance',
    icon: Layers3,
    eyebrow: 'Bagging Compliance',
    title: 'BAGGING COMPLIANCE GAP',
    body: 'The Relay Behavior Problem',
    details: [
      'During bagging compliance audits, consolidated data cross-references surfaced a critical gap: the bag auto-assignment system allowed Driver Associates (DAs) to relay their shipments to other routes instead of completing deliveries.',
      'This was an operational flaw, not just a tracking symptom, actively causing severe route planning and capacity planning distortions.',
    ],
    bullets: ['Why It Critically Matters:', 'The system is designed to assign DAs with the optimized route and parcel combinations. Relaying behaviors break this efficiency model.'],
    sources: [{ label: 'Bagging compliance sheet', href: 'https://docs.google.com/spreadsheets/d/1ud-0x1nZtnHM5yPJYO1R-xY4O9eqG9RWuzFE6ol08SE/edit?gid=0#gid=0' }],
    steps: [
      'STEP 1: System assigns bags auto-assigned to DAs.',
      'STEP 2 (ANOMALY): Some DAs relay shipments instead of delivering.',
      'STEP 3: System registers assignment as fulfilled.',
      'STEP 4 (IMPACT): Data gets distorted, reducing actual productivity.',
      'Relaying decreases absolute DA productivity.',
      'Artificially distorts bagging compliance metrics.',
      'Bloats hub processing times by multiplying handoffs.',
    ],
  },
  {
    id: 3,
    sectionId: 'bagging-redesign',
    icon: TrendingUp,
    eyebrow: 'Bagging Redesign',
    title: 'BAGGING REDESIGN IMPACT',
    body: 'From Reporting to System Logic',
    details: ['The discovery of the relay pattern moved operations from passive tracking to active technical re-engineering.'],
    metrics: [
      { label: 'DA productivity increase', value: 10, max: 12, tone: 'Lift' },
      { label: 'Hub dwell time reduction', value: 2, max: 3, tone: 'Time saved' },
    ],
    bullets: [
      'System Redesign: Rebuilding the bag auto-assignment system at its logic level rather than a superficial dashboard patch.',
      'Anti-Relay Logic: Assignment parameters reworked to mathematically prevent DAs from routing around actual deliveries.',
      'Productivity-First: Allocation is optimized for real capacity outputs per route, removing volume inflating loops.',
    ],
  },
  {
    id: 4,
    sectionId: 'call-auditing',
    icon: BrainCircuit,
    eyebrow: 'Call Auditing',
    title: 'CALL MASKING AUDITOR',
    body: 'Automated Compliance Checks',
    details: ['Built a self-contained automation engine leveraging Google Apps Script & Gemini to eliminate manual, repetitive auditor tasks.'],
    metrics: [
      { label: 'Audits completed per minute', value: 15, max: 15, tone: 'Throughput' },
      { label: 'Auditing efficiency gain', value: 120, max: 120, tone: 'Automation lift' },
    ],
    bullets: [
      'Apps Script Backbone: Piles, normalizes, and structured call logs directly from live databases.',
      'Gemini Analysis Layer: Interprets call transcription semantics to automatically flag compliance and masking violations.',
      'Handed to Tech Team: Delivered as an end-to-end working prototype for immediate engineering production scaling.',
    ],
    sources: [
      { label: 'Apps Script demo', href: 'https://script.google.com/macros/s/AKfycbz2bRblYrz8eQYsPhnBqWNkU8ppE9puGD2QsNMFmtxZBXgIHIhz7P07DEJJHRFCiaP71Q/exec' },
      { label: 'Call masking sheet', href: 'https://docs.google.com/spreadsheets/d/1aMsONw71Axv8ig0WtPpedST90CvmSudtqA70nsIU2WI/edit?gid=0#gid=0' },
    ],
  },
  {
    id: 5,
    sectionId: 'analytics',
    icon: BarChart3,
    eyebrow: 'Analytics',
    title: 'ANALYTICS & OTHER AUDITS',
    body: 'Scale of Data Audited',
    details: ['Designed trackers to monitor critical workflows, ensuring deep visibility into anomalies.'],
    metrics: [
      { label: 'Routes analyzed', value: 29080, max: 30000, tone: 'Route visibility' },
      { label: 'Namshi deliveries', value: 2240, max: 30000, tone: 'Delivery tracking' },
      { label: 'DA preference mappings', value: 776, max: 30000, tone: 'Preference model' },
      { label: 'Active session flashes', value: 1740, max: 30000, tone: 'Session monitoring' },
    ],
    bullets: [
      'System & App Auditing: Audited app versions and tracking consistency to identify non-compliant behavior.',
      'Movement Tracker: Established a rolling 30-day shipment flow monitor to identify sorting and transition leakages.',
      'Productivity Flagging: Flagged low performers whose attempt scores trailed under overall capacity limits.',
      'Preference vs Familiar Country Zone Tracker: Compared preferred and familiar country zones to understand routing familiarity gaps.',
      'CN-AE Bagging: Tracked shipments originating from China and whether they were bagged or not.',
      'NDED Bagging: Tracked the newly deployed system for monitoring NDED bags being made.',
      'DA P10/P20 Shipment Count: Compared P10 and P20 shipment counts against minimum and maximum vehicle capacity.',
      'NDED and SDD Productivity: Checked productivity for NDED and SDD DAs.',
      'Volumetric Bagging Data: Deployment analysis showed immediate productivity gains followed by a measurable decline in relay behaviors.',
    ],
    sources: [
      { label: 'Preference vs familiar country zone', href: 'https://docs.google.com/document/d/1gr55BMXd0WAS8fXrTeL7YLrFAAA4jsunTgrUVhcawWQ/edit?tab=t.0' },
      { label: 'CN-AE bagging', href: 'https://docs.google.com/spreadsheets/d/1gU84mSjFiz9vdwf3pXWSxRMyDAUlQ9iKSxwBfIUhgu4/edit?gid=1600255494#gid=1600255494' },
      { label: 'NDED bagging', href: 'https://docs.google.com/spreadsheets/d/1HiKsDUHsbZMdwTm03QBPnNj2uPc99jMtp6Eye49Wdy8/edit?gid=908673984#gid=908673984' },
      { label: 'DA productivity', href: 'https://docs.google.com/spreadsheets/d/1oZVAs1clmEObU_jV_LnWUichxLfwJdJcWLEcxJ-JqtU/edit?gid=1424009517#gid=1424009517' },
      { label: 'NDED and SDD productivity', href: 'https://docs.google.com/spreadsheets/d/1xjXdnzFs73qTpdeckv2SJbUSpvFlUk1QyG_7PfCJOlw/edit?gid=2093842840#gid=2093842840' },
      { label: 'Namshi early shipping', href: 'https://docs.google.com/spreadsheets/d/1Q8b1n4Zd28FZKK3b7OR2dUAmAIuybLsfn_zseKJanMs/edit?gid=539665733#gid=539665733' },
      { label: 'Volumetric data', href: 'https://docs.google.com/spreadsheets/d/1PVCu08xOnIXuI_1BNEziXl4F5Ino5D54OI-D8zfHs1w/edit?gid=366160466#gid=366160466' },
      { label: 'Shipment movement', href: 'https://docs.google.com/spreadsheets/d/1h4kTWtkJODP2a_C9kPMOb7s7y6doWoS2tkCr4P5SXj0/edit?gid=0#gid=0' },
    ],
  },
  {
    id: 7,
    sectionId: 'shadow-testing',
    icon: MapPinned,
    eyebrow: 'Shadow Testing',
    title: 'FIELD SHADOW TESTING',
    body: '4 Live Shadow Delivery Runs',
    details: ['Conducted field tests by shadowing DAs across Palm (low density) and Marina (high density) areas to evaluate routing engine behaviors.'],
    bullets: [
      'Location Permission Denial: Handled instances where DAs denied GPS permissions, causing false routing failures.',
      'Zone Backtracking: Solved algorithm bugs that prioritized adjacent boundaries prematurely, resulting in excessive movement.',
      'Entrance Constraints: Solved path sequence failures due to routing engines being unaware of physical entrances.',
    ],
    sources: [
      { label: 'DA app testing', href: 'https://docs.google.com/document/d/1gr55BMXd0WAS8fXrTeL7YLrFAAA4jsunTgrUVhcawWQ/edit?tab=t.0' },
    ],
  },
];

function MetricChart({ metric, index, total }) {
  const palette = chartPalette[index % chartPalette.length];
  const percentage = Math.min(Math.max((metric.value / metric.max) * 100, 6), 100);
  const arcLength = 188;
  const progressLength = (percentage / 100) * arcLength;
  const columns = Array.from({ length: 6 }, (_, columnIndex) => {
    const wave = Math.sin((columnIndex + 1) * (index + 1));
    return Math.max(18, Math.min(94, percentage * 0.72 + wave * 16 + columnIndex * 4));
  });

  return (
    <article
      className={`rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-lg ${palette.glow}`}
      aria-label={`${metric.label}: ${metric.value}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{metric.tone}</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900">{metric.label}</h3>
        </div>
        <svg className="h-16 w-16 shrink-0" viewBox="0 0 72 72" role="img" aria-hidden="true">
          <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(148,163,184,0.24)" strokeWidth="8" />
          <circle
            cx="36"
            cy="36"
            r="30"
            fill="none"
            stroke={palette.stroke}
            strokeLinecap="round"
            strokeWidth="8"
            strokeDasharray={`${progressLength} ${arcLength}`}
            transform="rotate(-90 36 36)"
          />
        </svg>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full bg-gradient-to-r ${palette.bar}`} style={{ width: `${percentage}%` }} />
      </div>

      <div className="mt-5 flex h-24 items-end gap-2" aria-hidden="true">
        {columns.map((height, columnIndex) => (
          <div key={`${metric.label}-${columnIndex}`} className="flex flex-1 items-end rounded-t-lg bg-slate-100">
            <div
              className={`w-full rounded-t-lg bg-gradient-to-t ${palette.bar} opacity-90`}
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
        <span>Baseline</span>
        <span>{index + 1 === total ? 'Peak' : 'Impact'}</span>
      </div>
    </article>
  );
}

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen text-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <section
              key={slide.id}
              id={slide.sectionId}
              className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-white/95 via-sky-50/90 to-amber-50/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.35em] text-sky-700">
                  <Icon className="h-4 w-4" />
                  {slide.eyebrow}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-6">
                <div className="w-full">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{slide.title}</h2>
                  {slide.body && <p className="mt-3 text-base leading-8 text-slate-700 sm:text-lg">{slide.body}</p>}
                  {slide.links && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {slide.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="rounded-full border border-sky-200 bg-white/80 px-3 py-2 text-sm text-sky-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-sky-50"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {slide.details?.map((detail) => (
                    <p key={detail} className="mt-3 text-sm leading-7 text-slate-600">
                      {detail}
                    </p>
                  ))}
                  {slide.bullets && (
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                      {slide.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {slide.sectionId === 'bagging-compliance' ? (
                    <div className="mt-5 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {steps.map((step) => (
                          <button
                            key={step.id}
                            onClick={() => setActiveStep(step.id)}
                            className={`rounded-full border px-3 py-2 text-sm transition duration-200 ${activeStep === step.id ? 'border-sky-400 bg-sky-100 text-sky-800 shadow-[0_0_0_1px_rgba(14,165,233,0.16)]' : 'border-slate-200 bg-white/80 text-slate-600 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700'}`}
                          >
                            {step.title}
                          </button>
                        ))}
                      </div>
                      <div className="rounded-[1.25rem] border border-sky-200 bg-sky-50/90 p-4 text-sm leading-7 text-sky-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                        <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Current step</p>
                        <p className="mt-2 text-lg font-semibold text-slate-950">{steps.find((step) => step.id === activeStep)?.title}</p>
                        <p className="mt-2 text-slate-700">{steps.find((step) => step.id === activeStep)?.description}</p>
                      </div>
                    </div>
                  ) : slide.steps ? (
                    <div className="mt-5 space-y-2">
                      {slide.steps.map((step) => (
                        <div key={step} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700">
                          {step}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                {slide.metrics ? (
                  <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full border border-sky-200 bg-sky-100 p-2 text-sky-700">
                        <BarChart3 className="h-4 w-4" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Impact charts</p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                      {slide.metrics.map((metric, metricIndex) => (
                        <MetricChart
                          key={metric.label}
                          metric={metric}
                          index={metricIndex}
                          total={slide.metrics.length}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}

                {slide.sources && (
                  <div className="rounded-[1.25rem] border border-slate-200/80 bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Source</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {slide.sources.map((source) => (
                        <a
                          key={source.label}
                          href={source.href}
                          target={source.href ? '_blank' : undefined}
                          rel={source.href ? 'noreferrer' : undefined}
                          className={`rounded-full border px-3 py-2 text-sm ${source.href ? 'border-sky-200 bg-white/80 text-sky-700 hover:bg-sky-50' : 'border-slate-200 bg-white/70 text-slate-500'}`}
                        >
                          {source.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default App;
