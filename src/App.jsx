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
    metrics: ['+10% DA PRODUCTIVITY INCREASE', '-2hr DWELL TIME AT HUBS'],
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
    metrics: ['1 min: 15 AUDITS (FROM 2 HOURS)', '120x: AUDITING EFFICIENCY GAIN'],
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
    metrics: ['29,080+ Routes Analyzed', '2,240+ Namshi Deliveries', '776 DA Preference Mappings', '1,740+ Active Session Flashes'],
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

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#050816] text-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <section
              key={slide.id}
              id={slide.sectionId}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-950/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.35em] text-violet-300">
                  <Icon className="h-4 w-4" />
                  {slide.eyebrow}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-6">
                <div className="w-full">
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{slide.title}</h2>
                  {slide.body && <p className="mt-3 text-base leading-8 text-zinc-300 sm:text-lg">{slide.body}</p>}
                  {slide.links && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {slide.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-sm text-violet-200 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500/20"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {slide.details?.map((detail) => (
                    <p key={detail} className="mt-3 text-sm leading-7 text-zinc-400">
                      {detail}
                    </p>
                  ))}
                  {slide.bullets && (
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                      {slide.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
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
                            className={`rounded-full border px-3 py-2 text-sm transition duration-200 ${activeStep === step.id ? 'border-violet-500 bg-violet-500/15 text-violet-200 shadow-[0_0_0_1px_rgba(167,139,250,0.2)]' : 'border-zinc-700 bg-zinc-900/70 text-zinc-400 hover:-translate-y-0.5 hover:border-violet-500/40 hover:text-violet-200'}`}
                          >
                            {step.title}
                          </button>
                        ))}
                      </div>
                      <div className="rounded-[1.25rem] border border-violet-500/20 bg-violet-500/10 p-4 text-sm leading-7 text-violet-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <p className="text-xs uppercase tracking-[0.3em] text-violet-200">Current step</p>
                        <p className="mt-2 text-lg font-semibold">{steps.find((step) => step.id === activeStep)?.title}</p>
                        <p className="mt-2 text-zinc-200">{steps.find((step) => step.id === activeStep)?.description}</p>
                      </div>
                    </div>
                  ) : slide.steps ? (
                    <div className="mt-5 space-y-2">
                      {slide.steps.map((step) => (
                        <div key={step} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300">
                          {step}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                {slide.metrics ? (
                  <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                      {slide.metrics.map((metric) => (
                        <div key={metric} className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <p className="text-sm uppercase tracking-[0.28em] text-violet-200">Key metric</p>
                          <p className="mt-2 text-xl font-semibold text-white">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {slide.sources && (
                  <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <p className="text-xs uppercase tracking-[0.3em] text-violet-200">Source</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {slide.sources.map((source) => (
                        <a
                          key={source.label}
                          href={source.href}
                          target={source.href ? '_blank' : undefined}
                          rel={source.href ? 'noreferrer' : undefined}
                          className={`rounded-full border px-3 py-2 text-sm ${source.href ? 'border-violet-500/30 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20' : 'border-zinc-700 bg-zinc-900/80 text-zinc-400'}`}
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
