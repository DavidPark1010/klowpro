import {
  ArrowRight,
  Check,
  ExternalLink,
  Palette,
  Search,
  Sparkles,
  Tags,
  Target,
} from 'lucide-react'

type Props = {
  source: string
  mode: 'store' | 'brand'
  onReset: () => void
  onContinue: () => void
}

const SUMMARY = [
  { icon: Tags, label: '키워드', value: 'Pure ingredients · Minimal ritual · Sensitive care' },
  { icon: Palette, label: '메인 컬러', value: 'Soft sage · Clean white · Deep charcoal' },
  { icon: Target, label: '핵심 가치', value: '민감한 피부도 편안하게 쓰는 순한 스킨케어' },
] as const

export function ResultView({ source, mode, onReset, onContinue }: Props) {
  const displaySource =
    mode === 'store'
      ? source.replace(/^https?:\/\//, '').replace(/\/$/, '')
      : source.replace(/^klow\.global\//, '')
  const finalLink = `klow.global/${displaySource
    .replace(/^www\./, '')
    .replace(/\..*$/, '')
    .replace(/[^a-zA-Z0-9-]/g, '-')
    .toLowerCase()}`

  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <header className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-5 sm:px-8">
        <button onClick={onReset} className="text-xl font-bold tracking-[-0.03em]">
          KLOW
        </button>
        <button
          onClick={onReset}
          className="text-[13px] font-semibold text-slate-500 transition hover:text-slate-950"
        >
          처음으로
        </button>
      </header>

      <main className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1120px] grid-cols-1 items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
            <Check className="size-3.5" strokeWidth={2.6} />
            영문 브랜드관 생성 완료
          </div>

          <h1 className="mt-6 max-w-[620px] break-keep text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[52px]">
            가입 없이 먼저 만든 결과물입니다.
          </h1>
          <p className="mt-5 max-w-[560px] break-keep text-[16px] leading-[1.75] text-slate-600">
            AI가 브랜드를 영어로 정리하고 임시 글로벌 링크까지 만들었습니다.
            마음에 들면 다음 단계에서 이 페이지를 내 것으로 확정하고 저장하면
            됩니다.
          </p>

          <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[12px] font-semibold text-slate-400">임시 링크</p>
            <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
              <span className="min-w-0 flex-1 truncate text-[15px] font-semibold">
                klow.global/temp-8347
              </span>
              <ExternalLink className="size-4 shrink-0 text-slate-400" />
            </div>
            <p className="mt-3 break-keep text-[13px] leading-[1.55] text-slate-500">
              로그인하면 이 임시 링크를 {finalLink} 주소로 확정할 수 있습니다.
            </p>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-3xl border border-sky-100 bg-sky-50 p-4">
            <Search className="mt-0.5 size-5 shrink-0 text-sky-700" />
            <p className="break-keep text-[13px] font-medium leading-[1.6] text-sky-900">
              현재 북미 지역에서 `K-Beauty anti-aging` 검색량이 증가 중입니다.
              지금 페이지를 확정하면 해당 키워드 중심으로 소개 문구를 최적화할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-[0_34px_90px_-54px_rgba(15,23,42,0.45)]">
          <div className="rounded-3xl bg-slate-950 p-5 text-white">
            <p className="text-[12px] font-semibold text-emerald-300">Preview</p>
            <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.04em]">
              Dr. Oasis Lab
            </h2>
            <p className="mt-2 text-[14px] leading-[1.6] text-white/72">
              Gentle skincare made for sensitive skin and minimal daily rituals.
            </p>
            <button className="mt-5 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-slate-950">
              Shop now
            </button>
          </div>

          <div className="mt-5 grid gap-3">
            {SUMMARY.map(({ icon: Icon, label, value }) => (
              <article
                key={label}
                className="grid grid-cols-[44px_1fr] gap-4 rounded-3xl border border-slate-200 bg-white p-4"
              >
                <div className="grid size-11 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                  <Icon className="size-5" strokeWidth={2.25} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-slate-400">{label}</p>
                  <p className="mt-1 break-keep text-[15px] font-semibold leading-[1.45]">
                    {value}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onContinue}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-px"
            >
              이 브랜드관을 내 것으로 저장하기
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </button>
            <button
              onClick={onReset}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-[15px] font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              다시 시작
              <Sparkles className="size-4" strokeWidth={2.25} />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
