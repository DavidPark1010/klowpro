import { type ReactNode, useState } from 'react'
import { ArrowRight, Check, Globe, Plus, Sparkles, X } from 'lucide-react'

const SKIN_TYPES = ['Dry', 'Normal', 'Oily', 'Combination', 'Sensitive'] as const
const KRW_PRICE = 39000
const KRW_ORIGINAL = 52000

type Props = {
  onReset: () => void
  onBack: () => void
  onSubmit: () => void
}

export function ProductResultView({ onReset, onBack, onSubmit }: Props) {
  const [name, setName] = useState('Hydra Glow Vitamin C Serum 30ml')
  const [benefits, setBenefits] = useState<string[]>([
    'Brightens dull skin instantly with stable Vitamin C',
    '4× hyaluronic complex for deep, lasting hydration',
    'Smooths fine lines and reinforces skin elasticity',
    'Calms reactive, sensitive skin without irritation',
  ])
  const [ingredients, setIngredients] = useState<string[]>([
    'Niacinamide 5%',
    'Vitamin C derivative',
    '4× Hyaluronic Acid',
    'Centella extract',
    'Beta-glucan',
  ])
  const [price, setPrice] = useState('29.00')
  const [skin, setSkin] = useState<Set<string>>(
    new Set(['Combination', 'Sensitive']),
  )

  const updateBenefit = (i: number, v: string) =>
    setBenefits((prev) => prev.map((b, idx) => (idx === i ? v : b)))

  const removeIngredient = (i: number) =>
    setIngredients((prev) => prev.filter((_, idx) => idx !== i))

  const toggleSkin = (s: string) =>
    setSkin((prev) => {
      const next = new Set(prev)
      if (next.has(s)) next.delete(s)
      else next.add(s)
      return next
    })

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-100 bg-white/90 px-6 py-5 backdrop-blur sm:px-10">
        <button
          onClick={onReset}
          className="text-xl font-bold tracking-[-0.03em] text-black"
        >
          KLOW
        </button>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-emerald-100 sm:inline-flex">
            <Check className="size-3" strokeWidth={3} />
            등록 직전
          </span>
          <button
            onClick={onBack}
            className="text-[13px] font-medium tracking-[-0.005em] text-slate-500 transition hover:text-black"
          >
            이전
          </button>
        </div>
      </header>

      <section className="border-b border-emerald-100/60 bg-gradient-to-r from-emerald-50/70 via-white to-sky-50/70">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-6 py-5 sm:px-10">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_4px_10px_-4px_rgba(16,185,129,0.55)]">
            <Check className="size-4" strokeWidth={3} />
          </span>
          <h1 className="text-[16px] font-semibold tracking-[-0.02em] text-slate-900 sm:text-[18px]">
            글로벌 판매 준비가 완료되었습니다
          </h1>
          <span className="ml-auto hidden text-[13px] tracking-[-0.005em] text-slate-500 sm:inline">
            AI가 모든 정보를 정리했어요 · 검토 후 등록을 완료하세요
          </span>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1280px] flex-1 px-6 pb-32 pt-10 sm:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <section className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                ORIGINAL · 원본 페이지
              </span>
              <span className="h-px flex-1 bg-slate-100" />
            </div>
            <KoreanPDP />
          </section>

          <section className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles
                className="size-3.5 text-sky-500"
                strokeWidth={2.5}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600">
                Global version · AI 자동 생성
              </span>
              <span className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="space-y-3">
              <FieldCard label="Product Name (English)">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] tracking-[-0.005em] text-slate-900 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                />
              </FieldCard>

              <FieldCard label="Key Benefits">
                <div className="space-y-1 rounded-xl border border-slate-200 bg-white px-3 py-2">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="mt-3 size-1 shrink-0 rounded-full bg-slate-400" />
                      <input
                        value={b}
                        onChange={(e) => updateBenefit(i, e.target.value)}
                        className="block w-full bg-transparent py-1.5 text-[13.5px] leading-snug tracking-[-0.005em] text-slate-800 outline-none"
                      />
                    </div>
                  ))}
                </div>
              </FieldCard>

              <FieldCard label="Ingredients Highlights">
                <div className="flex flex-wrap items-center gap-1.5">
                  {ingredients.map((ing, i) => (
                    <span
                      key={ing}
                      className="group inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white py-1 pl-2.5 pr-1.5 text-[12px] font-medium tracking-[-0.005em] text-slate-700"
                    >
                      {ing}
                      <button
                        type="button"
                        onClick={() => removeIngredient(i)}
                        className="grid size-4 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label={`${ing} 제거`}
                      >
                        <X className="size-2.5" strokeWidth={2.5} />
                      </button>
                    </span>
                  ))}
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full border border-dashed border-slate-300 bg-white px-2.5 py-1 text-[12px] font-medium tracking-[-0.005em] text-slate-500 transition hover:border-slate-400 hover:text-slate-700"
                  >
                    <Plus className="size-3" strokeWidth={2.5} />
                    추가
                  </button>
                </div>
              </FieldCard>

              <FieldCard label="Price (USD · auto converted)">
                <div className="flex items-center gap-3">
                  <div className="flex flex-1 items-center rounded-xl border border-slate-200 bg-white pl-4 pr-3 transition focus-within:border-slate-300 focus-within:ring-4 focus-within:ring-slate-100">
                    <span className="text-[14px] font-medium text-slate-400">$</span>
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="block w-full bg-transparent py-3 pl-1 text-[14px] tabular-nums tracking-[-0.005em] text-slate-900 outline-none"
                    />
                    <span className="text-[12px] font-medium text-slate-400">
                      USD
                    </span>
                  </div>
                  <div className="hidden flex-col items-end text-[11px] tracking-[-0.005em] text-slate-400 sm:flex">
                    <span>원본 ₩{KRW_PRICE.toLocaleString()}</span>
                    <span className="text-slate-300">자동 환산</span>
                  </div>
                </div>
              </FieldCard>

              <FieldCard label="Recommended Skin Type">
                <div className="flex flex-wrap gap-1.5">
                  {SKIN_TYPES.map((s) => {
                    const selected = skin.has(s)
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggleSkin(s)}
                        className={`rounded-full px-3 py-1.5 text-[12.5px] font-medium tracking-[-0.005em] transition ${
                          selected
                            ? 'bg-black text-white shadow-[0_1px_2px_rgba(0,0,0,0.18)]'
                            : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </FieldCard>
            </div>

            <PreviewCard
              name={name}
              price={price}
              krwOriginal={KRW_ORIGINAL}
              krwPrice={KRW_PRICE}
            />
          </section>
        </div>
      </main>

      <div className="sticky bottom-0 z-30 border-t border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-6 py-4 sm:px-10">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="grid size-6 place-items-center rounded-full bg-emerald-100">
              <Check className="size-3.5 text-emerald-700" strokeWidth={3} />
            </span>
            <span className="text-[13px] font-medium tracking-[-0.005em] text-slate-700">
              글로벌 판매 준비 완료
            </span>
            <span className="text-[12px] tracking-[-0.005em] text-slate-400">
              · 1개 상품
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={onSubmit}
              className="rounded-full border border-slate-200 bg-white px-4 py-3 text-[13.5px] font-medium tracking-[-0.005em] text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:px-5"
            >
              수정 후 등록
            </button>
            <button
              onClick={onSubmit}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-[14px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.22),0_20px_40px_rgba(0,0,0,0.26)] active:translate-y-0 sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              글로벌 스토어에 등록하기
              <ArrowRight
                className="size-4 transition group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FieldCard({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-[12px] font-semibold tracking-[-0.005em] text-slate-700">
          {label}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-0.5 text-[10.5px] font-semibold tracking-[-0.005em] text-sky-700 ring-1 ring-sky-100">
          <Sparkles className="size-3" strokeWidth={2.5} />
          AI 자동 생성
        </span>
      </div>
      {children}
    </div>
  )
}

function PreviewCard({
  name,
  price,
  krwPrice,
  krwOriginal,
}: {
  name: string
  price: string
  krwPrice: number
  krwOriginal: number
}) {
  const numericPrice = parseFloat(price) || 0
  const discount = Math.max(
    0,
    Math.round((1 - krwPrice / krwOriginal) * 100),
  )
  const compareAt = numericPrice ? (numericPrice / 0.75).toFixed(2) : ''

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50/70 via-white to-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Live preview
          </span>
          <h3 className="mt-1 text-[15px] font-semibold tracking-[-0.015em] text-slate-900">
            이렇게 판매됩니다
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium tracking-[-0.005em] text-slate-600 ring-1 ring-slate-200">
          <Globe className="size-3 text-slate-400" strokeWidth={2.25} />
          klow.global
        </span>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 via-rose-50 to-amber-50 ring-1 ring-black/[0.04]">
          <div className="absolute inset-x-0 bottom-1.5 mx-auto h-[64%] w-[42%] rounded-t-[10px] rounded-b-sm bg-white shadow-[0_4px_10px_-4px_rgba(15,23,42,0.18)]" />
          <div className="absolute inset-x-0 top-[26%] mx-auto h-[6%] w-[24%] rounded-sm bg-rose-300/70" />
          <div className="absolute right-1 top-1 rounded bg-white/85 px-1 py-[1px] text-[8px] font-bold text-rose-500 backdrop-blur">
            -{discount}%
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold tracking-[-0.01em] text-slate-900">
            {name || '상품명'}
          </p>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className="text-[14px] font-bold tracking-[-0.01em] tabular-nums text-slate-900">
              ${price || '0.00'}
            </span>
            {compareAt && (
              <span className="text-[10.5px] tabular-nums text-slate-400 line-through">
                ${compareAt}
              </span>
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <span className="rounded bg-slate-100 px-1.5 py-[1px] text-[9px] font-medium tracking-[-0.005em] text-slate-600">
              #vitamin-c
            </span>
            <span className="rounded bg-slate-100 px-1.5 py-[1px] text-[9px] font-medium tracking-[-0.005em] text-slate-600">
              #vegan
            </span>
            <span className="rounded bg-slate-100 px-1.5 py-[1px] text-[9px] font-medium tracking-[-0.005em] text-slate-600">
              #cruelty-free
            </span>
          </div>
        </div>
        <span className="hidden shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100 sm:inline-flex">
          <span className="size-1 rounded-full bg-emerald-500" />
          구매 가능
        </span>
      </div>
    </div>
  )
}

function KoreanPDP() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_40px_-22px_rgba(15,23,42,0.14)]">
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/70 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-slate-200" />
          <span className="size-2.5 rounded-full bg-slate-200" />
          <span className="size-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1.5 text-[11px] tracking-[-0.005em] text-slate-500 ring-1 ring-slate-200">
          <Globe className="size-3.5 shrink-0 text-slate-400" strokeWidth={2} />
          <span className="truncate">
            dr-oasis-lab.com/products/hydra-glow-vitamin-serum
          </span>
        </div>
      </div>

      <div className="relative h-[680px] overflow-hidden">
        <nav className="flex items-center gap-4 border-b border-slate-100 px-5 py-3 text-[11px] tracking-[-0.005em]">
          <span className="font-bold tracking-[-0.03em] text-slate-900">
            DR. OASIS LAB
          </span>
          <ul className="ml-auto flex items-center gap-3 text-slate-500">
            <li>전 제품</li>
            <li>베스트</li>
            <li>매거진</li>
            <li>고객센터</li>
          </ul>
        </nav>

        <div className="relative mx-5 mt-5 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 via-rose-50 to-amber-50 ring-1 ring-black/[0.04]">
          <div className="absolute inset-x-0 top-[27%] mx-auto h-[5%] w-[20%] rounded-md bg-rose-300/70" />
          <div className="absolute inset-x-0 bottom-3 mx-auto h-[68%] w-[34%] rounded-t-[24px] rounded-b-md bg-white shadow-[0_10px_22px_-10px_rgba(15,23,42,0.20)] ring-1 ring-black/[0.04]" />
          <div className="absolute left-3 top-3 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold tracking-[-0.005em] text-rose-500">
            SALE
          </div>
        </div>

        <div className="px-5 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            DR. OASIS LAB
          </p>
          <h2 className="mt-1 break-keep text-[16px] font-semibold tracking-[-0.02em] text-slate-900">
            [하이드라 글로우] 비타민 C 세럼 30ml
          </h2>
          <div className="mt-1 flex items-center gap-1.5 text-[11px] tracking-[-0.005em] text-slate-500">
            <span className="text-amber-500">★★★★★</span>
            <span className="font-medium text-slate-700">4.9</span>
            <span className="text-slate-300">·</span>
            <span>리뷰 2,341</span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-[18px] font-bold tracking-[-0.02em] text-slate-900">
              ₩39,000
            </span>
            <span className="text-[12px] tracking-[-0.005em] text-slate-400 line-through">
              ₩52,000
            </span>
            <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-[-0.005em] text-rose-600">
              25% 할인
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 border-y border-slate-100 px-5 py-2 text-[11px] tracking-[-0.005em]">
          <span className="border-b-2 border-slate-900 pb-0.5 font-semibold text-slate-900">
            상품정보
          </span>
          <span className="text-slate-500">리뷰 (2,341)</span>
          <span className="text-slate-500">Q&amp;A</span>
          <span className="text-slate-500">배송 / 교환</span>
        </div>

        <div className="space-y-4 px-5 py-4 text-[12px] leading-[1.75] tracking-[-0.005em] text-slate-700">
          <section>
            <h3 className="mb-1.5 text-[13px] font-semibold tracking-[-0.01em] text-slate-900">
              📋 제품 설명
            </h3>
            <p className="break-keep">
              지친 피부에 즉각적인 활력과 광채를 불어넣는 고기능 비타민 세럼입니다. 순도 높은 비타민 C 유도체와 5종의 나이아신아마이드 복합체가 칙칙해진 피부 톤을 환하게 가꾸어주며, 4중 히알루론산 콤플렉스가 깊은 보습감을 선사합니다.
            </p>
            <p className="mt-2 break-keep">
              민감한 피부에도 자극 없이 사용 가능하며, 매일 아침저녁 세안 후 토너 다음 단계에서 사용하시면 됩니다.
            </p>
          </section>

          <section>
            <h3 className="mb-1.5 text-[13px] font-semibold tracking-[-0.01em] text-slate-900">
              ✨ 핵심 효능
            </h3>
            <ul className="space-y-1 break-keep">
              <li>• 즉각적인 광채 부여 및 톤 개선</li>
              <li>• 4중 히알루론산 깊은 수분 공급</li>
              <li>• 잔주름 완화 및 탄력 강화</li>
              <li>• 민감 피부 진정 케어</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-1.5 text-[13px] font-semibold tracking-[-0.01em] text-slate-900">
              💧 주요 성분
            </h3>
            <p className="break-keep">
              나이아신아마이드 5%, 비타민 C 유도체, 4중 히알루론산, 센텔라 추출물, 베타-글루칸, 시카 콤플렉스
            </p>
          </section>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/85 to-transparent" />
      </div>
    </div>
  )
}
