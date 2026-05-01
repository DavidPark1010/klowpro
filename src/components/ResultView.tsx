import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'

const TAGS = ['안티에이징', '프리미엄', '민감성 피부', '보습'] as const

const INSIGHTS = [
  {
    icon: ShieldCheck,
    title: '브랜드가 지키는 약속',
    body: '자극을 줄인 고기능 스킨케어, 성분 신뢰, 피부 컨디션 회복이라는 메시지가 반복적으로 드러납니다.',
  },
  {
    icon: Target,
    title: '고객이 기대하는 가치',
    body: '즉각적인 화려함보다 꾸준한 개선감과 안정감을 원하는 고객에게 설득력이 높은 브랜드입니다.',
  },
  {
    icon: MessageCircle,
    title: '글로벌 고객에게 통할 표현',
    body: '기능성은 명확하게, 톤은 과장 없이 전문적으로 전달할 때 브랜드의 프리미엄 인상이 살아납니다.',
  },
] as const

type Props = {
  onReset: () => void
  onContinue: () => void
}

export function ResultView({ onReset, onContinue }: Props) {
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
            분석 완료
          </span>
          <button
            onClick={onReset}
            className="text-[13px] font-medium tracking-[-0.005em] text-slate-500 transition hover:text-black"
          >
            처음으로
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 sm:px-10">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <section className="lg:col-span-7 lg:pt-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[12px] font-semibold tracking-[-0.005em] text-sky-700 ring-1 ring-sky-100">
              <Sparkles className="size-3" strokeWidth={2.5} />
              AI 분석 완료
            </div>

            <h1 className="mt-5 max-w-[640px] break-keep text-[30px] font-semibold leading-[1.22] tracking-[-0.03em] text-black sm:text-[40px] sm:leading-[1.16] lg:text-[44px]">
              닥터 오아시스 랩의 브랜드 결을 이렇게 이해했습니다
            </h1>

            <p className="mt-5 max-w-[520px] break-keep text-[15px] leading-[1.7] tracking-[-0.01em] text-slate-500 sm:text-[16px]">
              KLOW는 판매 링크를 먼저 만들기보다, 브랜드가 고객에게 어떤 약속을 하고 어떤 톤으로 신뢰를 쌓아왔는지부터 정리합니다.
            </p>

            <div className="mt-9 max-w-[560px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_28px_-12px_rgba(15,23,42,0.10)]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Brand insight
                </span>
                <span className="h-px flex-1 bg-slate-100" />
              </div>
              <h2 className="mt-3 text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                브랜드 핵심 인식
              </h2>
              <p className="mt-2 break-keep text-[15px] leading-[1.7] tracking-[-0.01em] text-slate-700">
                닥터 오아시스 랩은 고기능 안티에이징을 전면에 두면서도, 민감한 피부가 안심하고 선택할 수 있는 부드러운 전문성을 함께 전달하는 프리미엄 스킨케어 브랜드로 읽힙니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[12px] font-medium tracking-[-0.005em] text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid max-w-[640px] gap-3">
              {INSIGHTS.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="grid grid-cols-[36px_1fr] gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
                >
                  <div className="flex size-9 items-center justify-center rounded-full bg-white text-sky-600 ring-1 ring-slate-200">
                    <Icon className="size-4" strokeWidth={2.25} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1.5 break-keep text-[13px] leading-[1.65] tracking-[-0.005em] text-slate-600">
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 max-w-[560px]">
              <button
                onClick={onContinue}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[16px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.22),0_20px_40px_rgba(0,0,0,0.26)] active:translate-y-0 sm:w-auto sm:px-9"
              >
                브랜드 설정 확인하기
                <ArrowRight
                  className="size-4 transition group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </button>
              <p className="mt-3 text-[12px] tracking-[-0.005em] text-slate-400">
                다음 단계에서 브랜드명, 소개 문구, 이미지 톤을 확인합니다
              </p>
            </div>
          </section>

          <aside className="relative flex flex-col items-center lg:col-span-5 lg:pt-6">
            <div className="pointer-events-none absolute -left-8 top-24 hidden h-px w-12 bg-gradient-to-r from-transparent to-slate-200 lg:block" />

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.005em] text-slate-600 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.10)]">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              KLOW가 읽어낸 브랜드 맥락
            </div>

            <div className="w-full max-w-[420px] rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35),0_8px_24px_-14px_rgba(15,23,42,0.12)]">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                  Brand reading
                </span>
                <p className="mt-4 break-keep text-[22px] font-semibold leading-[1.25] tracking-[-0.025em]">
                  “고기능이지만 차갑지 않고, 전문적이지만 피부 고민에 가까이 서 있는 브랜드”
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Tone
                  </p>
                  <p className="mt-2 break-keep text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-slate-800">
                    임상적 신뢰와 섬세한 케어를 함께 전달하는 차분한 프리미엄 톤
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Customer
                    </p>
                    <p className="mt-2 break-keep text-[13px] leading-[1.5] tracking-[-0.005em] text-slate-700">
                      민감하지만 효과를 포기하지 않는 고객
                    </p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-500">
                      Promise
                    </p>
                    <p className="mt-2 break-keep text-[13px] leading-[1.5] tracking-[-0.005em] text-slate-700">
                      피부 장벽과 탄력을 함께 케어
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-[12px] tracking-[-0.005em] text-slate-400">
              링크 생성 전, 브랜드 해석부터 확인합니다
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
