import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleDollarSign,
  CreditCard,
  Globe,
  ReceiptText,
  Sparkles,
} from 'lucide-react'

type Props = {
  onReset: () => void
  onBack: () => void
  onContinue: () => void
}

const START_ITEMS = [
  '브랜드관 무료 공개',
  '첫 판매 발생 전까지 구독료 0원',
  '상품/소개/SNS 블록 계속 수정',
]
const SELL_ITEMS = [
  '해외 카드 결제 활성화',
  '달러 결제 및 정산 대시보드',
  '첫 14일 무료 또는 첫 판매 전까지 무료',
]

export function PlanGateView({ onReset, onBack, onContinue }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      <header className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-5 sm:px-8">
        <button onClick={onReset} className="text-xl font-bold tracking-[-0.03em]">
          KLOW
        </button>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 transition hover:text-slate-950"
        >
          <ArrowLeft className="size-4" />
          상품 수정으로 돌아가기
        </button>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-76px)] max-w-[1120px] items-center justify-center px-5 pb-16 sm:px-8">
        <section className="w-full">
          <div className="mx-auto max-w-[740px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-100">
              <Sparkles className="size-3.5" strokeWidth={2.25} />
              첫 상품 등록 완료
            </div>
            <h1 className="mt-5 break-keep text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[52px]">
              전 세계 고객에게 달러 결제를 받을까요?
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] break-keep text-[16px] leading-[1.75] text-slate-600">
              지금은 단순한 구독 결제가 아니라 `글로벌 판매 채널 활성화` 순간입니다.
              월 $49로 해외 결제와 정산을 켤 수 있고, 첫 판매 전까지는 비용 부담 없이
              시작할 수 있습니다.
            </p>
          </div>

          <div className="mx-auto mt-9 grid max-w-[920px] grid-cols-1 gap-4 md:grid-cols-2">
            <PlanCard
              title="Preview Launch"
              price="무료"
              description="먼저 공개하고 시장 반응을 확인합니다."
              icon={Globe}
              items={START_ITEMS}
              action="무료로 공개"
              onClick={onContinue}
            />
            <PlanCard
              title="Global Sales"
              price="월 $49"
              description="해외 고객에게 바로 결제를 받습니다."
              icon={CreditCard}
              items={SELL_ITEMS}
              action="글로벌 판매 활성화"
              featured
              onClick={onContinue}
            />
          </div>

          <div className="mx-auto mt-5 flex max-w-[920px] items-start gap-3 rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
            <ReceiptText className="mt-0.5 size-5 shrink-0 text-emerald-700" />
            <p className="break-keep text-[13px] font-medium leading-[1.65] text-emerald-900">
              추천 메시지: “돈을 내세요”가 아니라 “이 버튼을 누르면 전 세계에서
              판매를 시작할 수 있습니다.”로 보여주는 것이 전환에 유리합니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

function PlanCard({
  title,
  price,
  description,
  icon: Icon,
  items,
  action,
  featured = false,
  onClick,
}: {
  title: string
  price: string
  description: string
  icon: typeof Globe
  items: readonly string[]
  action: string
  featured?: boolean
  onClick: () => void
}) {
  return (
    <article
      className={`rounded-[32px] border p-6 ${
        featured
          ? 'border-slate-950 bg-slate-950 text-white shadow-[0_34px_90px_-54px_rgba(15,23,42,0.7)]'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className={`grid size-11 place-items-center rounded-2xl ${
              featured ? 'bg-white text-slate-950' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Icon className="size-5" strokeWidth={2.25} />
          </div>
          <h2 className="mt-4 text-[22px] font-semibold tracking-[-0.03em]">
            {title}
          </h2>
          <p
            className={`mt-2 break-keep text-[14px] leading-[1.6] ${
              featured ? 'text-white/68' : 'text-slate-500'
            }`}
          >
            {description}
          </p>
        </div>
        <div className="text-right">
          <p
            className={`text-[12px] font-semibold ${
              featured ? 'text-emerald-300' : 'text-slate-400'
            }`}
          >
            Plan
          </p>
          <p className="mt-1 text-[20px] font-semibold">{price}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-[13px] font-medium">
            <Check
              className={`size-4 shrink-0 ${
                featured ? 'text-emerald-300' : 'text-emerald-600'
              }`}
              strokeWidth={2.6}
            />
            <span className={featured ? 'text-white/82' : 'text-slate-600'}>
              {item}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onClick}
        className={`mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 text-[14px] font-semibold transition hover:-translate-y-px ${
          featured
            ? 'bg-white text-slate-950'
            : 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
        }`}
      >
        {featured && <CircleDollarSign className="size-4" strokeWidth={2.25} />}
        {action}
        {!featured && <ArrowRight className="size-4" strokeWidth={2.5} />}
      </button>
    </article>
  )
}
