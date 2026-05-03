import { useState } from 'react'
import {
  ArrowUpRight,
  Banknote,
  Boxes,
  Check,
  ChevronRight,
  Gift,
  LayoutDashboard,
  PackagePlus,
  Search,
  Send,
  TrendingUp,
  Users,
} from 'lucide-react'

type Props = {
  onReset: () => void
  onAddProduct: () => void
}

type Tab = 'overview' | 'settlement' | 'seeding'

const PRODUCTS = [
  {
    name: 'Hydra Glow Vitamin C Serum 30ml',
    status: '판매중',
    price: '$29.00',
    stock: 184,
    sales: 96,
  },
  {
    name: 'Barrier Repair Cream 50ml',
    status: '검수 필요',
    price: '$34.00',
    stock: 72,
    sales: 31,
  },
] as const

const INFLUENCERS = [
  {
    name: 'Mina Skincare',
    market: 'US · TikTok',
    fit: '민감성 피부 리뷰 강점',
    reach: '248K',
  },
  {
    name: 'Glow by Emma',
    market: 'UK · Instagram',
    fit: '프리미엄 K-beauty 큐레이션',
    reach: '132K',
  },
  {
    name: 'Noah Beauty Lab',
    market: 'CA · YouTube',
    fit: '성분 분석형 콘텐츠',
    reach: '89K',
  },
] as const

export function DashboardView({ onReset, onAddProduct }: Props) {
  const [tab, setTab] = useState<Tab>('overview')

  return (
    <div className="min-h-screen bg-slate-50 text-black antialiased">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
          <button
            onClick={onReset}
            className="text-xl font-bold tracking-[-0.03em] text-black"
          >
            KLOW
          </button>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-emerald-100 sm:inline-flex">
              <Check className="size-3" strokeWidth={3} />
              사업자 승인 완료
            </span>
            <button
              onClick={onAddProduct}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition hover:-translate-y-px"
            >
              <PackagePlus className="size-4" strokeWidth={2.25} />
              상품 추가
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 py-8 sm:px-10 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="px-3 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Brand console
              </p>
              <h1 className="mt-1 break-keep text-[20px] font-semibold tracking-[-0.025em] text-slate-950">
                Dr. Oasis Lab
              </h1>
            </div>
            <nav className="mt-2 grid gap-1">
              <NavButton
                active={tab === 'overview'}
                icon={LayoutDashboard}
                label="전체 관리"
                onClick={() => setTab('overview')}
              />
              <NavButton
                active={tab === 'settlement'}
                icon={Banknote}
                label="정산 금액"
                onClick={() => setTab('settlement')}
              />
              <NavButton
                active={tab === 'seeding'}
                icon={Gift}
                label="인플루언서 시딩"
                onClick={() => setTab('seeding')}
              />
            </nav>
          </div>
        </aside>

        <section className="min-w-0">
          {tab === 'overview' && <Overview onAddProduct={onAddProduct} />}
          {tab === 'settlement' && <SettlementTab />}
          {tab === 'seeding' && <SeedingTab />}
        </section>
      </main>
    </div>
  )
}

function NavButton({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean
  icon: typeof LayoutDashboard
  label: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold tracking-[-0.005em] transition ${
        active
          ? 'bg-slate-950 text-white'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
      }`}
    >
      <Icon className="size-4" strokeWidth={2.25} />
      {label}
    </button>
  )
}

function Overview({ onAddProduct }: { onAddProduct: () => void }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Overview
            </p>
            <h2 className="mt-2 break-keep text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-slate-950">
              브랜드 페이지와 등록 상품을 한 곳에서 관리합니다
            </h2>
            <p className="mt-3 break-keep text-[14px] leading-[1.7] tracking-[-0.005em] text-slate-500">
              상품, 판매 상태, 정산, 시딩 진행 상황까지 브랜드 운영자가 매일 확인해야 하는 정보만 모았습니다.
            </p>
          </div>
          <button
            onClick={onAddProduct}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] text-white"
          >
            <PackagePlus className="size-4" strokeWidth={2.25} />
            상품 추가
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Metric title="이번 달 매출" value="$8,420" delta="+18.4%" icon={TrendingUp} />
        <Metric title="정산 예정" value="$6,736" delta="5월 15일" icon={Banknote} />
        <Metric title="시딩 후보" value="18명" delta="매칭 가능" icon={Users} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
            등록 상품
          </h3>
          <span className="text-[12px] tracking-[-0.005em] text-slate-400">
            2 products
          </span>
        </div>
        <div className="divide-y divide-slate-100">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="grid grid-cols-1 gap-3 px-5 py-4 md:grid-cols-[1fr_90px_90px_90px_32px] md:items-center"
            >
              <div className="min-w-0">
                <p className="truncate text-[14px] font-semibold tracking-[-0.01em] text-slate-900">
                  {product.name}
                </p>
                <p className="mt-1 text-[12px] tracking-[-0.005em] text-slate-400">
                  klow.global/dr-oasis-lab
                </p>
              </div>
              <span className="text-[13px] font-medium tabular-nums text-slate-700">
                {product.price}
              </span>
              <span className="text-[13px] tabular-nums text-slate-500">
                재고 {product.stock}
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
              <ChevronRight className="hidden size-4 text-slate-300 md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Metric({
  title,
  value,
  delta,
  icon: Icon,
}: {
  title: string
  value: string
  delta: string
  icon: typeof TrendingUp
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-semibold tracking-[-0.005em] text-slate-500">
          {title}
        </span>
        <Icon className="size-4 text-slate-400" strokeWidth={2.25} />
      </div>
      <p className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-slate-950">
        {value}
      </p>
      <p className="mt-1 text-[12px] font-medium tracking-[-0.005em] text-emerald-600">
        {delta}
      </p>
    </div>
  )
}

function SettlementTab() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          Settlement
        </p>
        <h2 className="mt-2 break-keep text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-slate-950">
          판매 금액, 수수료, 정산 예정액을 투명하게 확인합니다
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Metric title="총 판매 금액" value="$8,420" delta="312 orders" icon={TrendingUp} />
        <Metric title="KLOW 수수료" value="$1,684" delta="20%" icon={Boxes} />
        <Metric title="정산 예정액" value="$6,736" delta="5월 15일 지급 예정" icon={Banknote} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
            정산 내역
          </h3>
          <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[12px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
            상세 보기
            <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
          </button>
        </div>
        <div className="space-y-3">
          {['Hydra Glow Vitamin C Serum', 'Barrier Repair Cream'].map(
            (name, i) => (
              <div
                key={name}
                className="grid grid-cols-2 gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 md:grid-cols-[1fr_100px_100px_110px]"
              >
                <span className="col-span-2 truncate text-[13px] font-semibold text-slate-800 md:col-span-1">
                  {name}
                </span>
                <span className="text-[13px] tabular-nums text-slate-500">
                  ${i === 0 ? '6,090' : '2,330'}
                </span>
                <span className="text-[13px] tabular-nums text-slate-500">
                  -${i === 0 ? '1,218' : '466'}
                </span>
                <span className="text-[13px] font-semibold tabular-nums text-slate-900">
                  ${i === 0 ? '4,872' : '1,864'}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

function SeedingTab() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          Influencer seeding
        </p>
        <h2 className="mt-2 break-keep text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-slate-950">
          KLOW가 브랜드와 맞는 글로벌 인플루언서 시딩을 연결합니다
        </h2>
        <p className="mt-3 break-keep text-[14px] leading-[1.7] tracking-[-0.005em] text-slate-500">
          승인된 브랜드만 시딩을 신청할 수 있어 제품 발송, 콘텐츠 요청, 성과 확인까지 같은 콘솔에서 관리됩니다.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 sm:w-[280px]">
            <Search className="size-4" strokeWidth={2.25} />
            <span className="text-[13px] tracking-[-0.005em]">
              국가, 채널, 피부 고민 검색
            </span>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] text-white">
            <Send className="size-4" strokeWidth={2.25} />
            시딩 캠페인 만들기
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {INFLUENCERS.map((influencer) => (
            <article
              key={influencer.name}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                    {influencer.name}
                  </h3>
                  <p className="mt-1 text-[12px] tracking-[-0.005em] text-slate-400">
                    {influencer.market}
                  </p>
                </div>
                <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-semibold text-sky-700 ring-1 ring-sky-100">
                  {influencer.reach}
                </span>
              </div>
              <p className="mt-4 break-keep text-[13px] leading-[1.6] tracking-[-0.005em] text-slate-600">
                {influencer.fit}
              </p>
              <button className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-[13px] font-semibold tracking-[-0.005em] text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                시딩 제안
                <ChevronRight className="size-3.5" strokeWidth={2.25} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
