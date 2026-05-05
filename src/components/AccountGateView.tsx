import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Lock,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

type Props = {
  source: string
  mode: 'store' | 'brand'
  onReset: () => void
  onBack: () => void
  onContinue: () => void
}

export function AccountGateView({
  source,
  mode,
  onReset,
  onBack,
  onContinue,
}: Props) {
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
      <header className="mx-auto flex max-w-[1040px] items-center justify-between px-5 py-5 sm:px-8">
        <button onClick={onReset} className="text-xl font-bold tracking-[-0.03em]">
          KLOW
        </button>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 transition hover:text-slate-950"
        >
          <ArrowLeft className="size-4" />
          브랜드관 더 수정
        </button>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-76px)] max-w-[1040px] items-center justify-center px-5 pb-16 sm:px-8">
        <section className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
              <Check className="size-3.5" strokeWidth={2.6} />
              주소 선점 단계
            </div>
            <h1 className="mt-5 max-w-[560px] break-keep text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[52px]">
              이 브랜드관 주소를 먼저 선점하세요.
            </h1>
            <p className="mt-5 max-w-[520px] break-keep text-[16px] leading-[1.75] text-slate-600">
              브랜드관이 마음에 들었다면 지금 로그인해서 {finalLink} 주소와
              편집 내용을 계정에 저장하세요. 상품 가격과 상세 정보는 로그인 후
              안전하게 등록합니다.
            </p>

            <div className="mt-7 grid gap-3 text-[14px] font-medium text-slate-600">
              <Reason icon={Sparkles} text="지금 만든 브랜드관 저장" />
              <Reason icon={Globe} text={`${finalLink} 주소 선점`} />
              <Reason icon={Package} text="로그인 후 상품 가격과 옵션 등록" />
              <Reason icon={ShieldCheck} text="구독 결제는 아직 받지 않음" />
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_34px_90px_-54px_rgba(15,23,42,0.45)]">
            <div className="rounded-3xl bg-slate-950 p-5 text-white">
              <p className="text-[12px] font-semibold text-emerald-300">
                Claim your page
              </p>
              <p className="mt-2 break-keep text-[22px] font-semibold leading-[1.25] tracking-[-0.03em]">
                1초 로그인으로 브랜드관을 내 것으로 확정합니다.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              <button
                onClick={onContinue}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-black px-5 text-[15px] font-semibold text-white transition hover:-translate-y-px"
              >
                Google로 계속하기
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </button>
              <button
                onClick={onContinue}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-[#fee500] px-5 text-[15px] font-semibold text-slate-950 transition hover:-translate-y-px"
              >
                <MessageCircle className="size-4" strokeWidth={2.25} />
                카카오로 계속하기
              </button>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <Lock className="mt-0.5 size-4 shrink-0 text-slate-400" />
              <p className="break-keep text-[12px] leading-[1.55] text-slate-500">
                로그인 후에는 첫 상품 등록 화면으로 이동합니다. 가격, 재고, 옵션처럼
                저장이 필요한 정보는 계정 생성 이후에 받는 것이 안전합니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Reason({
  icon: Icon,
  text,
}: {
  icon: typeof Sparkles
  text: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-2xl bg-slate-100 text-slate-600">
        <Icon className="size-4" strokeWidth={2.25} />
      </span>
      <span>{text}</span>
    </div>
  )
}
