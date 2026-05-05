import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleDollarSign,
  Image as ImageIcon,
  Package,
  Settings2,
  Sparkles,
} from 'lucide-react'
import { StorePreview } from './StorePreview'

type Props = {
  source: string
  onReset: () => void
  onBack: () => void
  onContinue: () => void
}

export function ProductSetupView({ source, onReset, onBack, onContinue }: Props) {
  const [productName, setProductName] = useState('Barrier Calm Serum 30ml')
  const [productPrice, setProductPrice] = useState('29')
  const [stock, setStock] = useState('100')
  const [option, setOption] = useState('30ml')
  const productReady =
    productName.trim().length > 0 &&
    productPrice.trim().length > 0 &&
    stock.trim().length > 0

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={onReset} className="text-xl font-bold tracking-[-0.03em]">
            KLOW
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 transition hover:text-slate-950"
            >
              <ArrowLeft className="size-4" />
              주소 선점으로 돌아가기
            </button>
            <button
              onClick={onContinue}
              disabled={!productReady}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-px disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              글로벌 판매 시작하기
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[430px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 rounded-3xl border border-slate-200 bg-white p-4">
            <p className="text-[12px] font-semibold text-slate-400">
              선점된 브랜드관
            </p>
            <p className="mt-1 truncate text-[15px] font-semibold">
              klow.global/{slugify(source)}
            </p>
          </div>
          <StorePreview
            brand={{
              name: toBrandName(source),
              tagline: 'Gentle skincare made for sensitive skin and simple daily routines.',
              story:
                'A curated global brand page is ready. Add the first product to activate selling.',
            }}
            primaryProduct={{ name: productName, price: `$${productPrice}` }}
          />
        </aside>

        <section className="min-w-0">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  <Check className="size-3.5" strokeWidth={2.6} />
                  로그인 완료
                </div>
                <h1 className="mt-4 break-keep text-[30px] font-semibold leading-[1.16] tracking-[-0.035em] sm:text-[42px]">
                  이제 첫 상품의 가격과 상세 정보를 등록하세요.
                </h1>
                <p className="mt-3 max-w-[640px] break-keep text-[15px] leading-[1.7] text-slate-600">
                  상품 정보는 가격, 재고, 옵션처럼 계정에 저장되어야 하는 데이터입니다.
                  그래서 브랜드관 주소를 선점한 뒤 이 단계에서 받습니다.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 text-white sm:w-[260px]">
                <p className="text-[12px] font-semibold text-emerald-300">
                  다음 단계
                </p>
                <p className="mt-2 break-keep text-[13px] leading-[1.55] text-white/75">
                  첫 상품 등록이 끝나면 해외 결제 활성화 플랜을 선택합니다.
                  첫 판매 전까지 비용 부담 없이 시작할 수 있게 안내합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            <ProductBlock
              number="1"
              icon={Package}
              title="상품 기본 정보"
              description="해외 고객이 바로 이해할 상품명과 대표 옵션을 입력합니다."
              complete={Boolean(productName.trim() && option.trim())}
            >
              <div className="grid gap-4 sm:grid-cols-[1fr_160px]">
                <Field label="상품명">
                  <input
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition focus:border-slate-400"
                  />
                </Field>
                <Field label="대표 옵션">
                  <input
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition focus:border-slate-400"
                  />
                </Field>
              </div>
            </ProductBlock>

            <ProductBlock
              number="2"
              icon={CircleDollarSign}
              title="가격과 재고"
              description="달러 가격과 초기 판매 가능 재고를 입력합니다."
              complete={Boolean(productPrice.trim() && stock.trim())}
              required
            >
              <div className="grid gap-4 sm:grid-cols-[160px_160px]">
                <Field label="달러 가격">
                  <div className="flex rounded-2xl border border-slate-200 px-4 py-3 focus-within:border-slate-400">
                    <span className="text-slate-400">$</span>
                    <input
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      className="min-w-0 flex-1 bg-transparent pl-1 text-[15px] outline-none"
                    />
                  </div>
                </Field>
                <Field label="초기 재고">
                  <input
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition focus:border-slate-400"
                  />
                </Field>
              </div>
            </ProductBlock>

            <ProductBlock
              number="3"
              icon={ImageIcon}
              title="상품 이미지"
              description="지금은 선택 사항입니다. 나중에 상품 블록에서 추가해도 됩니다."
              complete={false}
            >
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50">
                <ImageIcon className="size-4" strokeWidth={2.25} />
                상품 이미지 추가
              </button>
            </ProductBlock>

            <ProductBlock
              number="4"
              icon={Settings2}
              title="판매 조건"
              description="배송, 관세, 정산 조건은 기본값으로 시작하고 나중에 조정할 수 있습니다."
              complete
            >
              <p className="break-keep rounded-2xl bg-slate-50 px-4 py-3 text-[13px] leading-[1.65] text-slate-600">
                기본값: 해외 카드 결제, 달러 표시, 월 1회 정산, 배송 조건은 KLOW 기본 가이드 적용
              </p>
            </ProductBlock>

            {productReady && (
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-5">
                <div className="flex items-center gap-2 text-[14px] font-semibold text-emerald-800">
                  <Sparkles className="size-4" strokeWidth={2.25} />
                  첫 상품 등록이 완료되었습니다.
                </div>
                <p className="mt-2 break-keep text-[13px] leading-[1.6] text-emerald-900">
                  이제 `글로벌 판매 시작하기`를 누르면 해외 결제 활성화 플랜을 선택합니다.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-semibold text-slate-500">
        {label}
      </span>
      {children}
    </label>
  )
}

function ProductBlock({
  number,
  icon: Icon,
  title,
  description,
  complete,
  required = false,
  children,
}: {
  number: string
  icon: typeof Package
  title: string
  description: string
  complete: boolean
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-slate-100 text-[13px] font-semibold text-slate-500">
          {number}
        </span>
        <div
          className={`grid size-10 shrink-0 place-items-center rounded-2xl ${
            complete ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-950 text-white'
          }`}
        >
          {complete ? (
            <Check className="size-5" strokeWidth={2.6} />
          ) : (
            <Icon className="size-5" strokeWidth={2.25} />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-[16px] font-semibold tracking-[-0.015em]">
              {title}
            </h2>
            {required && (
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-100">
                필수
              </span>
            )}
          </div>
          <p className="mt-1 break-keep text-[13px] leading-[1.55] text-slate-500">
            {description}
          </p>
        </div>
      </div>
      {children}
    </article>
  )
}

function slugify(value: string) {
  return (
    value
      .trim()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\..*$/, '')
      .replace(/^klow\.global\//, '')
      .replace(/[^a-zA-Z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase() || 'yourbrand'
  )
}

function toBrandName(value: string) {
  return slugify(value)
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') || 'Your Brand'
}
