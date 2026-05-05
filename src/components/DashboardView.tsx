import {
  ArrowUpRight,
  Banknote,
  Check,
  CreditCard,
  Package,
  Pencil,
  TrendingUp,
} from 'lucide-react'

type Props = {
  onReset: () => void
  onEdit: () => void
}

const PRODUCTS = [
  { name: 'Barrier Calm Serum 30ml', status: '판매중', price: '$29.00' },
  { name: 'Hydra Repair Cream 50ml', status: '검수 필요', price: '$34.00' },
] as const

export function DashboardView({ onReset, onEdit }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={onReset} className="text-xl font-bold tracking-[-0.03em]">
            KLOW
          </button>
          <button
            onClick={onEdit}
            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-px"
          >
            <Pencil className="size-4" strokeWidth={2.25} />
            브랜드관 수정
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-5 py-8 sm:px-8">
        <section className="rounded-[28px] border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
                <Check className="size-3" strokeWidth={3} />
                글로벌 판매 채널 활성화
              </div>
              <h1 className="mt-4 break-keep text-[30px] font-semibold leading-[1.15] tracking-[-0.035em] sm:text-[44px]">
                이제 판매, 결제, 정산만 확인하면 됩니다.
              </h1>
              <p className="mt-3 max-w-[640px] break-keep text-[15px] leading-[1.7] text-slate-500">
                불필요한 탭은 줄이고 대표님이 바로 봐야 할 정보만 남겼습니다.
                고객은 브랜드관에서 결제하고, 대표님은 판매 현황과 정산 예정액을
                이 화면에서 확인합니다.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              klow.global/dr-oasis-lab
              <ArrowUpRight className="size-4" strokeWidth={2.25} />
            </a>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Metric
            icon={TrendingUp}
            title="이번 달 판매"
            value="$8,420"
            note="312 orders"
          />
          <Metric
            icon={CreditCard}
            title="고객 결제"
            value="활성화"
            note="카드 · Apple Pay 준비"
          />
          <Metric
            icon={Banknote}
            title="정산 예정"
            value="$6,736"
            note="5월 15일 지급 예정"
          />
        </section>

        <section className="mt-5 rounded-[28px] border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2 className="text-[16px] font-semibold">판매 상품</h2>
              <p className="mt-1 text-[12px] text-slate-400">
                구매 버튼과 결제 상태가 연결된 상품입니다.
              </p>
            </div>
            <button
              onClick={onEdit}
              className="rounded-full border border-slate-200 px-4 py-2 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              상품 블록 수정
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-[1fr_90px_110px] sm:items-center"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-slate-100 text-slate-500">
                    <Package className="size-5" strokeWidth={2.25} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold">
                      {product.name}
                    </p>
                    <p className="mt-1 text-[12px] text-slate-400">
                      klow.global/dr-oasis-lab
                    </p>
                  </div>
                </div>
                <span className="text-[13px] font-medium tabular-nums text-slate-700">
                  {product.price}
                </span>
                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    product.status === '판매중'
                      ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'
                      : 'bg-amber-50 text-amber-700 ring-1 ring-amber-100'
                  }`}
                >
                  {product.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function Metric({
  icon: Icon,
  title,
  value,
  note,
}: {
  icon: typeof TrendingUp
  title: string
  value: string
  note: string
}) {
  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-semibold text-slate-500">{title}</span>
        <Icon className="size-4 text-slate-400" strokeWidth={2.25} />
      </div>
      <p className="mt-4 text-[28px] font-semibold tracking-[-0.03em]">
        {value}
      </p>
      <p className="mt-1 text-[12px] font-semibold text-emerald-600">{note}</p>
    </article>
  )
}
