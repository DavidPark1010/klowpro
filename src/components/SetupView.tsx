import { useRef, useState, type ChangeEvent } from 'react'
import { ArrowRight, Check, Image as ImageIcon, X } from 'lucide-react'
import { StorePreview } from './StorePreview'

const COUNTRIES = [
  '미국',
  '일본',
  '싱가포르',
  '홍콩',
  '대만',
  '베트남',
  '태국',
  '호주',
  '영국',
  '프랑스',
] as const

const SHIPPING_OPTIONS = [
  { value: 'direct', label: '직접 배송' },
  { value: 'managed', label: '협의 배송' },
] as const

type Shipping = (typeof SHIPPING_OPTIONS)[number]['value']

type Props = {
  onReset: () => void
  onBack: () => void
  onContinue: () => void
}

export function SetupView({ onReset, onBack, onContinue }: Props) {
  const [name, setName] = useState('닥터 오아시스 랩')
  const [tagline, setTagline] = useState(
    '고기능 안티에이징 프리미엄 스킨케어',
  )
  const [image, setImage] = useState<string | null>(null)
  const [countries, setCountries] = useState<Set<string>>(
    new Set(['미국', '일본']),
  )
  const [shipping, setShipping] = useState<Shipping>('direct')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImage(reader.result as string)
    reader.readAsDataURL(file)
  }

  const toggleCountry = (c: string) => {
    setCountries((prev) => {
      const next = new Set(prev)
      if (next.has(c)) next.delete(c)
      else next.add(c)
      return next
    })
  }

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
          <span className="hidden items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-700 sm:inline-flex">
            <Check className="size-3" strokeWidth={3} />
            브랜드 설정
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
              <span className="text-slate-400">Step 03</span>
              <span className="size-1 rounded-full bg-slate-300" />
              <span className="tracking-[0.12em] text-slate-500">브랜드 설정</span>
            </div>

            <h1 className="mt-4 max-w-[640px] break-keep text-[30px] font-semibold leading-[1.22] tracking-[-0.03em] text-black sm:text-[40px] sm:leading-[1.16] lg:text-[44px]">
              브랜드 기본 정보를 입력하세요
            </h1>

            <p className="mt-5 max-w-[520px] break-keep text-[15px] leading-[1.7] tracking-[-0.01em] text-slate-500 sm:text-[16px]">
              글로벌 고객에게 보여질 브랜드 정보를 설정합니다
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                onContinue()
              }}
              className="mt-9 max-w-[560px] space-y-7"
            >
              <Field label="브랜드명" hint="자동 입력된 정보를 확인해주세요">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="브랜드명을 입력하세요"
                  className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] tracking-[-0.005em] text-black outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                />
              </Field>

              <Field label="브랜드 한 줄 소개">
                <input
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="예: 고기능 안티에이징 프리미엄 스킨케어"
                  className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] tracking-[-0.005em] text-black outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                  maxLength={60}
                />
              </Field>

              <Field
                label="대표 이미지"
                hint="권장 1200 × 800 · PNG / JPG"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onFile}
                />
                {image ? (
                  <div className="relative h-36 w-full overflow-hidden rounded-xl ring-1 ring-slate-200">
                    <img
                      src={image}
                      alt="대표 이미지 미리보기"
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setImage(null)}
                      className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm transition hover:bg-black/85"
                    >
                      <X className="size-3" strokeWidth={2.5} />
                      제거
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-36 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    <ImageIcon
                      className="size-5 text-slate-400"
                      strokeWidth={1.75}
                    />
                    <span className="text-[13px] font-medium tracking-[-0.005em] text-slate-700">
                      이미지 업로드
                    </span>
                    <span className="text-[11px] tracking-[-0.005em] text-slate-400">
                      클릭하여 파일 선택
                    </span>
                  </button>
                )}
              </Field>

              <Field
                label="배송 국가"
                hint={`${countries.size}개 국가 선택됨`}
              >
                <div className="flex flex-wrap gap-1.5">
                  {COUNTRIES.map((c) => {
                    const selected = countries.has(c)
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleCountry(c)}
                        className={`rounded-full px-3 py-1.5 text-[13px] font-medium tracking-[-0.005em] transition ${
                          selected
                            ? 'bg-black text-white shadow-[0_1px_2px_rgba(0,0,0,0.18)]'
                            : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {c}
                      </button>
                    )
                  })}
                </div>
              </Field>

              <Field label="배송 방식">
                <div className="inline-flex w-full rounded-xl bg-slate-100 p-1">
                  {SHIPPING_OPTIONS.map((o) => {
                    const active = shipping === o.value
                    return (
                      <button
                        key={o.value}
                        type="button"
                        onClick={() => setShipping(o.value)}
                        className={`flex-1 rounded-lg px-3 py-2 text-[13px] font-semibold tracking-[-0.01em] transition ${
                          active
                            ? 'bg-white text-black shadow-[0_1px_2px_rgba(15,23,42,0.06),0_2px_8px_-4px_rgba(15,23,42,0.10)]'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {o.label}
                      </button>
                    )
                  })}
                </div>
              </Field>

              <div className="pt-3">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[16px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.22),0_20px_40px_rgba(0,0,0,0.26)] active:translate-y-0 sm:w-auto sm:px-9"
                >
                  다음 단계로
                  <ArrowRight
                    className="size-4 transition group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </form>
          </section>

          <aside className="relative flex flex-col items-center lg:col-span-5 lg:pt-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.005em] text-slate-600 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.10)]">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              입력한 내용이 실시간으로 반영됩니다
            </div>

            <StorePreview brand={{ name, tagline, image }} />

            <p className="mt-5 text-center text-[12px] tracking-[-0.005em] text-slate-400">
              klow.global/dr-oasis-lab · Live preview
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-[12px] font-semibold tracking-[-0.005em] text-slate-700">
          {label}
        </span>
        {hint && (
          <span className="text-[11px] tracking-[-0.005em] text-slate-400">
            {hint}
          </span>
        )}
      </div>
      {children}
    </label>
  )
}
