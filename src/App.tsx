import { useState } from 'react'
import { ArrowRight, Lock, Sparkles } from 'lucide-react'
import { SetupView } from './components/SetupView'
import { AccountGateView } from './components/AccountGateView'
import { ProductSetupView } from './components/ProductSetupView'
import { PlanGateView } from './components/PlanGateView'
import { DashboardView } from './components/DashboardView'

type Stage = 'start' | 'setup' | 'account' | 'product' | 'plan' | 'dashboard'

export default function App() {
  const [stage, setStage] = useState<Stage>('start')
  const [brandAddress, setBrandAddress] = useState('')

  const sourceLabel = brandAddress.trim() || 'yourbrand'

  if (stage === 'setup') {
    return (
      <SetupView
        source={sourceLabel}
        mode="brand"
        onReset={() => setStage('start')}
        onBack={() => setStage('start')}
        onContinue={() => setStage('account')}
      />
    )
  }

  if (stage === 'account') {
    return (
      <AccountGateView
        source={sourceLabel}
        mode="brand"
        onReset={() => setStage('start')}
        onBack={() => setStage('setup')}
        onContinue={() => setStage('product')}
      />
    )
  }

  if (stage === 'product') {
    return (
      <ProductSetupView
        source={sourceLabel}
        onReset={() => setStage('start')}
        onBack={() => setStage('account')}
        onContinue={() => setStage('plan')}
      />
    )
  }

  if (stage === 'plan') {
    return (
      <PlanGateView
        onReset={() => setStage('start')}
        onBack={() => setStage('product')}
        onContinue={() => setStage('dashboard')}
      />
    )
  }

  if (stage === 'dashboard') {
    return (
      <DashboardView
        onReset={() => setStage('start')}
        onEdit={() => setStage('setup')}
      />
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-950 antialiased">
      <header className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-5 sm:px-8">
        <button className="text-xl font-bold tracking-[-0.03em]">KLOW</button>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-[13px] font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          관리자 로그인
        </button>
      </header>

      <main className="flex flex-1 items-center justify-center px-5 pb-16 pt-6">
        <section className="w-full max-w-[680px] text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-700">
            <Sparkles className="size-3.5" strokeWidth={2.25} />
            글로벌 판매관 바로 만들기
          </div>

          <h1 className="mx-auto mt-6 max-w-[640px] break-keep text-[38px] font-semibold leading-[1.1] tracking-[-0.045em] sm:text-[62px]">
            판매하고 싶은 브랜드 주소만 입력하세요.
          </h1>

          <p className="mx-auto mt-5 max-w-[540px] break-keep text-[16px] leading-[1.7] tracking-[-0.01em] text-slate-600 sm:text-[18px]">
            먼저 매력적인 브랜드관을 만들어드립니다. 마음에 들면 그때 주소를
            선점하고, 로그인 이후 상품 가격과 상세 정보를 등록하면 됩니다.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setStage('setup')
            }}
            className="mx-auto mt-10 rounded-[28px] border border-slate-200 bg-white p-3 text-left shadow-[0_34px_90px_-52px_rgba(15,23,42,0.45)]"
          >
            <label className="block rounded-3xl border border-slate-950 bg-white p-5">
              <span className="block text-[16px] font-semibold tracking-[-0.015em]">
                글로벌 판매관 주소
              </span>
              <span className="mt-1 block break-keep text-[13px] leading-[1.5] text-slate-500">
                대부분 브랜드명을 그대로 입력하면 됩니다. 나중에 변경할 수 있습니다.
              </span>
              <div className="mt-4 flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-slate-400">
                <span className="shrink-0 text-[15px] font-semibold text-slate-400">
                  klow.global/
                </span>
                <input
                  value={brandAddress}
                  onChange={(e) => setBrandAddress(e.target.value)}
                  placeholder="yourbrand"
                  className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-slate-400"
                  autoComplete="off"
                />
              </div>
            </label>

            <button
              type="submit"
              className="mt-3 inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 text-[15px] font-semibold text-white transition hover:-translate-y-px"
            >
              브랜드관 먼저 만들기
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] font-medium text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="size-3.5" />
              가입 없이 먼저 보기
            </span>
            <span>브랜드관 완성 후 로그인</span>
            <span>상품 등록은 로그인 이후</span>
          </div>
        </section>
      </main>
    </div>
  )
}
