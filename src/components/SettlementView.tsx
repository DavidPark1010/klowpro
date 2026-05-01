import { ArrowRight, ArrowRightLeft, Check, CreditCard, LineChart } from 'lucide-react'
import { StorePreview } from './StorePreview'

const SECTIONS = [
  {
    title: '고객 결제',
    body: '고객은 KLOW 글로벌 스토어에서 바로 결제합니다',
    Icon: CreditCard,
    tone: 'bg-sky-50 text-sky-600 ring-sky-100',
  },
  {
    title: '자동 정산',
    body: '주문 완료 후, 수수료를 제외한 금액이 정산됩니다',
    Icon: ArrowRightLeft,
    tone: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
  },
  {
    title: '투명한 구조',
    body: '모든 주문과 정산 내역은 실시간으로 확인할 수 있습니다',
    Icon: LineChart,
    tone: 'bg-violet-50 text-violet-600 ring-violet-100',
  },
] as const

type Props = {
  onReset: () => void
  onContinue: () => void
  onBack: () => void
}

export function SettlementView({ onReset, onContinue, onBack }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <button
          onClick={onReset}
          className="text-xl font-bold tracking-[-0.03em] text-black"
        >
          KLOW
        </button>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-emerald-100 sm:inline-flex">
            <Check className="size-3" strokeWidth={3} />
            결제 · 정산 자동화
          </span>
          <button
            onClick={onBack}
            className="text-[13px] font-medium tracking-[-0.005em] text-slate-500 transition hover:text-black"
          >
            이전
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 sm:px-10">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <section className="lg:col-span-7 lg:pt-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              <span className="text-slate-400">Step 02</span>
              <span className="size-1 rounded-full bg-slate-300" />
              <span className="tracking-[0.12em] text-slate-500">결제 · 정산</span>
            </div>

            <h1 className="mt-4 max-w-[640px] break-keep text-[30px] font-semibold leading-[1.22] tracking-[-0.03em] text-black sm:text-[40px] sm:leading-[1.16] lg:text-[44px]">
              글로벌 결제와 정산은 KLOW가 처리합니다
            </h1>

            <p className="mt-5 max-w-[520px] break-keep text-[15px] leading-[1.7] tracking-[-0.01em] text-slate-500 sm:text-[16px]">
              브랜드는 상품만 등록하면, 나머지는 자동으로 진행됩니다
            </p>

            <div className="mt-9 max-w-[560px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_28px_-12px_rgba(15,23,42,0.10)]">
              <ol className="relative">
                <span
                  className="absolute left-5 top-3 bottom-3 w-px bg-slate-200/80"
                  aria-hidden
                />
                {SECTIONS.map((s, i) => (
                  <li
                    key={s.title}
                    className={`relative flex gap-4 ${
                      i === 0 ? 'pt-0' : 'pt-5'
                    } ${i === SECTIONS.length - 1 ? 'pb-0' : 'pb-5'}`}
                  >
                    <div
                      className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-xl ring-1 ${s.tone}`}
                    >
                      <s.Icon className="size-[18px]" strokeWidth={2} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                        {s.title}
                      </h3>
                      <p className="mt-1 break-keep text-[14px] leading-[1.65] tracking-[-0.005em] text-slate-500">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-[12px] tracking-[-0.005em] text-slate-400">
                <span className="size-1 rounded-full bg-slate-300" />
                수수료는 판매 발생 시에만 적용됩니다
              </div>
            </div>

            <div className="mt-10 max-w-[560px]">
              <button
                onClick={onContinue}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[16px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.22),0_20px_40px_rgba(0,0,0,0.26)] active:translate-y-0 sm:w-auto sm:px-9"
              >
                다음 단계로
                <ArrowRight
                  className="size-4 transition group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </section>

          <aside className="relative flex flex-col items-center lg:col-span-5 lg:pt-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.005em] text-slate-600 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.10)]">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              지금 바로 판매 가능한 상태입니다
            </div>

            <StorePreview productState="available" />

            <p className="mt-5 text-center text-[12px] tracking-[-0.005em] text-slate-400">
              klow.global/dr-oasis-lab · 결제 활성화됨
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
