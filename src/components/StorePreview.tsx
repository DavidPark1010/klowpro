import {
  ArrowRight,
  Beaker,
  ChevronRight,
  Compass,
  Droplet,
  Droplets,
  Heart,
  Home,
  Search,
  ShoppingBag,
  Smile,
  Sparkles,
  Sun,
  User,
} from 'lucide-react'

const CATEGORIES = [
  { label: 'Cleanser', Icon: Droplets, tone: 'bg-cyan-50 text-cyan-600' },
  { label: 'Toner', Icon: Droplet, tone: 'bg-sky-50 text-sky-600' },
  { label: 'Serum', Icon: Beaker, tone: 'bg-violet-50 text-violet-600' },
  { label: 'Cream', Icon: Sparkles, tone: 'bg-rose-50 text-rose-500' },
  { label: 'Sunscreen', Icon: Sun, tone: 'bg-amber-50 text-amber-600' },
  { label: 'Mask', Icon: Smile, tone: 'bg-emerald-50 text-emerald-600' },
] as const

const PRODUCTS = [
  {
    name: 'Hydra Glow Vitamin Serum',
    price: '32.00',
    discount: 25,
    tag: 'cruelty-free',
    bottle: 'from-rose-100 via-rose-50 to-amber-50',
    cap: 'bg-rose-300/70',
    body: 'bg-white',
  },
  {
    name: 'Cica Calming Toner Pad',
    price: '18.50',
    discount: 15,
    tag: 'vegan',
    bottle: 'from-emerald-100 via-emerald-50 to-teal-50',
    cap: 'bg-emerald-300/70',
    body: 'bg-white',
  },
  {
    name: 'Retinol Night Cream',
    price: '46.00',
    discount: 30,
    tag: 'anti-aging',
    bottle: 'from-violet-100 via-violet-50 to-indigo-50',
    cap: 'bg-violet-300/70',
    body: 'bg-white',
  },
  {
    name: 'Mineral Sun Essence',
    price: '24.00',
    discount: 20,
    tag: 'reef-safe',
    bottle: 'from-amber-100 via-amber-50 to-orange-50',
    cap: 'bg-amber-300/70',
    body: 'bg-white',
  },
] as const

const NAV = [
  { label: 'Shop', Icon: Home, active: true },
  { label: 'Discover', Icon: Compass, active: false },
  { label: 'Feed', Icon: Sparkles, active: false },
  { label: 'Cart', Icon: ShoppingBag, active: false },
  { label: 'Me', Icon: User, active: false },
] as const

export type Brand = {
  name?: string
  tagline?: string
  image?: string | null
}

type StorePreviewProps = {
  productState?: 'idle' | 'available'
  brand?: Brand
}

export function StorePreview({
  productState = 'idle',
  brand,
}: StorePreviewProps) {
  return (
    <div className="relative w-[300px] sm:w-[320px]">
      <div className="relative rounded-[44px] bg-[#0a0a0a] p-[10px] shadow-[0_30px_70px_-20px_rgba(15,23,42,0.32),0_8px_24px_-12px_rgba(15,23,42,0.18)] ring-1 ring-black/5">
        <div className="relative h-[640px] overflow-hidden rounded-[36px] bg-white">
          <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-7 pt-2.5 text-[10px] font-semibold tracking-tight text-black">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>
          <div className="absolute left-1/2 top-2 z-40 h-[24px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

          <div
            className="relative h-full overflow-hidden pt-9"
            style={{ contain: 'paint' }}
          >
            <StoreBody productState={productState} brand={brand} />
          </div>

          <BottomNav />
        </div>
      </div>
    </div>
  )
}

function StoreBody({
  productState,
  brand,
}: {
  productState: 'idle' | 'available'
  brand?: Brand
}) {
  const hasBrand = Boolean(brand?.name || brand?.tagline || brand?.image)

  return (
    <div className="px-4 pb-24">
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[16px] font-bold tracking-[-0.04em]">KLOW</span>
        <div className="flex items-center gap-2">
          <button className="grid size-8 place-items-center rounded-full border border-slate-200 bg-white">
            <Search className="size-3.5 text-slate-700" strokeWidth={2.25} />
          </button>
          <button className="grid size-8 place-items-center rounded-full border border-slate-200 bg-white">
            <Heart className="size-3.5 text-slate-700" strokeWidth={2.25} />
          </button>
        </div>
      </div>

      <button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-1 pl-2.5 pr-1.5 text-[10px] font-medium">
        <span className="text-slate-500">MY SKIN</span>
        <span className="text-slate-900">Combination</span>
        <ChevronRight className="size-3 text-slate-400" strokeWidth={2.5} />
      </button>

      {hasBrand ? <BrandBanner brand={brand!} /> : <PromoBanner />}

      <div className="mt-4 grid grid-cols-6 gap-1">
        {CATEGORIES.map(({ label, Icon, tone }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className={`grid size-10 place-items-center rounded-2xl ${tone}`}
            >
              <Icon className="size-4" strokeWidth={2} />
            </div>
            <span className="text-[8.5px] font-medium leading-tight text-slate-700">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <h3 className="text-[14px] font-semibold tracking-[-0.015em] text-slate-900">
          Pick for your skin
        </h3>
        <button className="inline-flex items-center gap-0.5 text-[10px] font-medium text-slate-500">
          See all
          <ChevronRight className="size-3" strokeWidth={2.5} />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {PRODUCTS.map((p) => (
          <article key={p.name} className="space-y-1.5">
            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br ${p.bottle} ring-1 ring-black/[0.04]`}
            >
              <div className="absolute left-2 top-2 rounded-md bg-white/85 px-1.5 py-0.5 text-[8.5px] font-semibold text-rose-500 backdrop-blur">
                -{p.discount}%
              </div>
              {productState === 'available' && (
                <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-1.5 py-[2px] text-[8.5px] font-semibold tracking-[-0.005em] text-emerald-600 shadow-[0_2px_6px_-2px_rgba(15,23,42,0.18)] ring-1 ring-emerald-100 backdrop-blur">
                  <span className="size-1 rounded-full bg-emerald-500" />
                  구매 가능
                </div>
              )}
              <div
                className={`absolute inset-x-0 bottom-3 mx-auto h-[64%] w-[40%] rounded-t-[20px] rounded-b-md ${p.body} shadow-[0_4px_10px_-4px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.04]`}
              />
              <div
                className={`absolute inset-x-0 bottom-[68%] mx-auto h-[6%] w-[26%] rounded-md ${p.cap}`}
              />
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span className="rounded bg-slate-100 px-1.5 py-[1px] text-[8.5px] font-medium text-slate-600">
                #{p.tag}
              </span>
            </div>
            <p className="line-clamp-2 text-[11px] font-medium leading-tight text-slate-900">
              {p.name}
            </p>
            <div className="flex items-baseline gap-1.5">
              <p className="text-[12px] font-semibold tracking-[-0.01em] text-slate-900">
                ${p.price}
              </p>
              <p className="text-[10px] text-slate-400 line-through">
                ${(parseFloat(p.price) / (1 - p.discount / 100)).toFixed(2)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function PromoBanner() {
  return (
    <div className="relative mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 via-violet-600 to-fuchsia-500 p-4 text-white">
      <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-white/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-4 size-20 rounded-full bg-fuchsia-300/30 blur-2xl" />
      <div className="relative">
        <div className="text-[14px] font-semibold leading-tight tracking-[-0.02em]">
          Not even on Amazon?
        </div>
        <div className="mt-1 text-[11.5px] leading-snug text-white/85">
          We'll ship any K-beauty
          <br />
          to your door
        </div>
        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium ring-1 ring-white/25 backdrop-blur-sm">
          Find now
          <ArrowRight className="size-3" strokeWidth={2.5} />
        </div>
      </div>
      <div className="pointer-events-none absolute right-3 top-3 flex size-10 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur-sm">
        <Sparkles className="size-4 text-white" strokeWidth={2} />
      </div>
    </div>
  )
}

function BrandBanner({ brand }: { brand: Brand }) {
  const name = brand.name?.trim() || '브랜드명'
  const tagline = brand.tagline?.trim() || '한 줄 소개를 입력하면 여기에 표시됩니다'

  return (
    <div className="relative mt-3 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_10px_28px_-14px_rgba(15,23,42,0.25)]">
      <div className="absolute inset-0">
        {brand.image ? (
          <img
            src={brand.image}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-rose-200 via-rose-100 to-amber-100" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
      </div>

      <div className="relative px-4 py-5 text-white">
        <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/75">
          Featured brand
        </div>
        <div className="mt-1.5 line-clamp-1 text-[16px] font-semibold tracking-[-0.02em]">
          {name}
        </div>
        <div className="mt-1 line-clamp-2 text-[11.5px] leading-snug text-white/85">
          {tagline}
        </div>
        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold tracking-[-0.005em] text-black">
          Visit store
          <ArrowRight className="size-3" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  )
}

function BottomNav() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 border-t border-slate-100 bg-white/95 backdrop-blur">
      <div className="grid grid-cols-5 px-2 pb-1 pt-2">
        {NAV.map(({ label, Icon, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center gap-0.5 ${
              active ? 'text-black' : 'text-slate-400'
            }`}
          >
            <Icon className="size-[18px]" strokeWidth={active ? 2.25 : 2} />
            <span className="text-[9px] font-medium tracking-[-0.005em]">
              {label}
            </span>
          </button>
        ))}
      </div>
      <div className="mx-auto mb-1 mt-0.5 h-[3px] w-24 rounded-full bg-black/85" />
    </div>
  )
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 16 10" className="h-2 w-3.5 fill-black" aria-hidden>
      <rect x="0" y="6" width="2" height="4" rx="0.5" />
      <rect x="4" y="4" width="2" height="6" rx="0.5" />
      <rect x="8" y="2" width="2" height="8" rx="0.5" />
      <rect x="12" y="0" width="2" height="10" rx="0.5" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 16 12" className="h-2.5 w-3.5 fill-black" aria-hidden>
      <path d="M8 12a1.2 1.2 0 1 0 0-2.4A1.2 1.2 0 0 0 8 12Z" />
      <path d="M3.6 7.6a6 6 0 0 1 8.8 0l-1.4 1.4a4 4 0 0 0-6 0L3.6 7.6Z" />
      <path d="M.8 4.8a10 10 0 0 1 14.4 0L13.8 6.2a8 8 0 0 0-11.6 0L.8 4.8Z" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg
      viewBox="0 0 26 12"
      className="h-2.5 w-[26px]"
      aria-hidden
    >
      <rect
        x="0.5"
        y="0.5"
        width="22"
        height="11"
        rx="2.5"
        className="fill-none stroke-black/40"
      />
      <rect x="2" y="2" width="18" height="8" rx="1.5" className="fill-black" />
      <rect x="23" y="4" width="2" height="4" rx="1" className="fill-black/40" />
    </svg>
  )
}
