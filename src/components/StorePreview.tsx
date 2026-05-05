import {
  ArrowRight,
  Heart,
  Home,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  User,
} from 'lucide-react'

const PRODUCTS = [
  { name: 'Barrier Calm Serum', price: '$29', color: 'from-emerald-100 to-teal-50' },
  { name: 'Hydra Repair Cream', price: '$34', color: 'from-sky-100 to-cyan-50' },
  { name: 'Daily Mild Sunscreen', price: '$24', color: 'from-amber-100 to-orange-50' },
] as const

const NAV = [
  { label: 'Home', icon: Home, active: true },
  { label: 'Shop', icon: ShoppingBag, active: false },
  { label: 'Saved', icon: Heart, active: false },
  { label: 'Me', icon: User, active: false },
] as const

export type Brand = {
  name?: string
  tagline?: string
  story?: string
  image?: string | null
}

type StorePreviewProps = {
  brand?: Brand
  productState?: 'idle' | 'available'
  primaryProduct?: {
    name: string
    price: string
    color?: string
  }
}

export function StorePreview({ brand, primaryProduct }: StorePreviewProps) {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]">
      <div className="rounded-[42px] bg-[#0a0a0a] p-[10px] shadow-[0_30px_70px_-28px_rgba(15,23,42,0.45)]">
        <div className="relative h-[640px] overflow-hidden rounded-[34px] bg-white">
          <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-7 pt-2.5 text-[10px] font-semibold tracking-tight text-black">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2 w-3 rounded-sm bg-black" />
              <span className="h-2 w-3 rounded-sm bg-black/70" />
              <span className="h-2 w-5 rounded-sm border border-black px-0.5">
                <span className="block h-full w-3 rounded-[2px] bg-black" />
              </span>
            </div>
          </div>
          <div className="absolute left-1/2 top-2 z-40 h-[24px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

          <div className="h-full overflow-y-auto px-4 pb-24 pt-10">
            <div className="flex items-center justify-between">
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

            <BrandHero brand={brand} />

            <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                <ShieldCheck className="size-4" strokeWidth={2.25} />
                Why customers choose us
              </div>
              <p className="mt-2 line-clamp-4 text-[12px] leading-[1.55] text-slate-600">
                {brand?.story ||
                  'AI summarizes the brand promise here so global customers can quickly understand why this brand matters.'}
              </p>
            </section>

            <section className="mt-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-semibold tracking-[-0.015em] text-slate-900">
                  Featured products
                </h3>
                <button className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-slate-500">
                  See all
                  <ArrowRight className="size-3" strokeWidth={2.5} />
                </button>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {(primaryProduct
                  ? [
                      {
                        ...primaryProduct,
                        color: primaryProduct.color || 'from-emerald-100 to-teal-50',
                      },
                      ...PRODUCTS.slice(1),
                    ]
                  : PRODUCTS
                ).map((product, index) => (
                  <article key={product.name} className={index === 2 ? 'col-span-2' : ''}>
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${product.color} ring-1 ring-black/[0.04]`}
                    >
                      <div className="absolute left-1/2 top-1/2 h-[58%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-t-[18px] rounded-b-md bg-white shadow-[0_8px_18px_-12px_rgba(15,23,42,0.5)] ring-1 ring-black/[0.04]" />
                      <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-slate-700">
                        Ready
                      </div>
                    </div>
                    <p className="mt-1.5 line-clamp-1 text-[11px] font-semibold text-slate-900">
                      {product.name}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500">{product.price}</p>
                    <button className="mt-1.5 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-2 py-1.5 text-[10px] font-semibold text-white">
                      Buy now
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-5 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
              <p className="text-[11px] font-semibold text-emerald-700">
                Secure checkout
              </p>
              <p className="mt-1 text-[12px] leading-[1.5] text-slate-600">
                Card payment and global checkout are ready on this brand page.
              </p>
            </section>
          </div>

          <BottomNav />
        </div>
      </div>
    </div>
  )
}

function BrandHero({ brand }: { brand?: Brand }) {
  const name = brand?.name?.trim() || 'Your Brand'
  const tagline =
    brand?.tagline?.trim() ||
    'A clear brand promise appears here for global customers.'

  return (
    <section className="relative mt-3 overflow-hidden rounded-[24px]">
      <div className="absolute inset-0">
        {brand?.image ? (
          <img src={brand.image} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-700 to-emerald-700" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
      </div>

      <div className="relative min-h-[220px] px-4 py-5 text-white">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
          <Sparkles className="size-3" strokeWidth={2.25} />
          Featured brand
        </div>
        <h2 className="mt-14 line-clamp-2 text-[25px] font-semibold leading-[1.05] tracking-[-0.04em]">
          {name}
        </h2>
        <p className="mt-2 line-clamp-2 text-[12px] leading-[1.5] text-white/82">
          {tagline}
        </p>
        <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-black">
          Shop now
          <ArrowRight className="size-3" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  )
}

function BottomNav() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 border-t border-slate-100 bg-white/95 backdrop-blur">
      <div className="grid grid-cols-4 px-4 pb-1 pt-2">
        {NAV.map(({ label, icon: Icon, active }) => (
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
