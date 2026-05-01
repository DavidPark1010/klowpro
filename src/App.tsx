import { useState } from 'react'
import { ArrowRight, Globe } from 'lucide-react'
import { ScanningView } from './components/ScanningView'
import { ResultView } from './components/ResultView'
import { SetupView } from './components/SetupView'
import { SettlementView } from './components/SettlementView'
import { ProductView } from './components/ProductView'
import { ProductScanningView } from './components/ProductScanningView'
import { ProductResultView } from './components/ProductResultView'
import { SuccessView } from './components/SuccessView'

type Stage =
  | 'idle'
  | 'scanning'
  | 'result'
  | 'setup'
  | 'settlement'
  | 'product'
  | 'product-scanning'
  | 'product-result'
  | 'success'

export default function App() {
  const [url, setUrl] = useState('')
  const [stage, setStage] = useState<Stage>('idle')

  if (stage === 'scanning') {
    return (
      <ScanningView
        url={url}
        onReset={() => setStage('idle')}
        onComplete={() => setStage('result')}
      />
    )
  }

  if (stage === 'result') {
    return (
      <ResultView
        onReset={() => setStage('idle')}
        onContinue={() => setStage('setup')}
      />
    )
  }

  if (stage === 'setup') {
    return (
      <SetupView
        onReset={() => setStage('idle')}
        onBack={() => setStage('result')}
        onContinue={() => setStage('settlement')}
      />
    )
  }

  if (stage === 'settlement') {
    return (
      <SettlementView
        onReset={() => setStage('idle')}
        onBack={() => setStage('setup')}
        onContinue={() => setStage('product')}
      />
    )
  }

  if (stage === 'product') {
    return (
      <ProductView
        onReset={() => setStage('idle')}
        onBack={() => setStage('settlement')}
        onContinue={(opt) =>
          setStage(opt === 'auto' ? 'product-scanning' : 'idle')
        }
      />
    )
  }

  if (stage === 'product-scanning') {
    return (
      <ProductScanningView
        onReset={() => setStage('idle')}
        onComplete={() => setStage('product-result')}
      />
    )
  }

  if (stage === 'product-result') {
    return (
      <ProductResultView
        onReset={() => setStage('idle')}
        onBack={() => setStage('product')}
        onSubmit={() => setStage('success')}
      />
    )
  }

  if (stage === 'success') {
    return (
      <SuccessView
        onReset={() => setStage('idle')}
        onAddMore={() => setStage('product')}
        onViewStore={() => setStage('idle')}
      />
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="/"
          className="text-xl font-bold tracking-[-0.03em] text-black"
        >
          KLOW
        </a>
        <button className="text-[14px] font-medium tracking-[-0.01em] text-slate-700 transition hover:text-black">
          로그인
        </button>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-12">
        <div className="w-full max-w-3xl text-center">
          <h1 className="mx-auto max-w-3xl break-keep text-[34px] font-semibold leading-[1.18] tracking-[-0.035em] text-black sm:text-[56px] sm:leading-[1.12] lg:text-[64px]">
            개발 없이, 해외 판매 바로 시작하세요
          </h1>

          <p className="mx-auto mt-6 max-w-md whitespace-pre-line break-keep text-[15px] leading-[1.75] tracking-[-0.01em] text-slate-500 sm:mt-7 sm:text-[17px]">
            {'지금 운영 중인 자사몰 그대로\nAI가 글로벌 판매 페이지와 결제까지 자동으로 만들어드립니다'}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setStage('scanning')
            }}
            className="mx-auto mt-12 flex max-w-xl flex-col items-center sm:mt-14"
          >
            <label htmlFor="brand-url" className="sr-only">
              브랜드 웹사이트 주소
            </label>
            <div className="group relative flex w-full items-center rounded-2xl border border-slate-200 bg-white pl-5 pr-2 py-2 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.04)] transition focus-within:border-slate-300 focus-within:shadow-[0_2px_6px_rgba(15,23,42,0.06),0_12px_28px_rgba(15,23,42,0.10)]">
              <Globe
                className="size-5 shrink-0 text-slate-400"
                strokeWidth={1.75}
              />
              <input
                id="brand-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="브랜드 웹사이트 주소를 입력하세요 (예: www.yourbrand.com)"
                className="ml-3 w-full bg-transparent py-3 text-[15px] tracking-[-0.01em] text-black outline-none placeholder:text-slate-400"
                autoComplete="url"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_8px_24px_rgba(0,0,0,0.16)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.20),0_14px_32px_rgba(0,0,0,0.22)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.18)]"
            >
              무료로 시작하기
              <ArrowRight className="size-4" strokeWidth={2.25} />
            </button>

            <p className="mt-5 text-[12px] tracking-[-0.005em] text-slate-400">
              개발 필요 없음 · 초기 비용 없음 · 몇 분 안에 시작
            </p>
          </form>
        </div>
      </main>

      <footer className="px-6 pb-10 sm:px-10">
        <div className="mx-auto max-w-3xl border-t border-slate-100 pt-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <span className="text-[12px] tracking-[-0.005em] text-slate-400">
              이미 많은 K-뷰티 브랜드가 사용 중입니다
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {['LUMINE', 'NUOVA', 'SOOJI', 'HALA', 'BORI&CO', 'YEONHWA'].map(
                (brand) => (
                  <span
                    key={brand}
                    className="text-[13px] font-semibold tracking-[0.04em] text-slate-300"
                  >
                    {brand}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
