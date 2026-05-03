import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
  Upload,
} from 'lucide-react'

type Props = {
  onReset: () => void
  onBack: () => void
  onContinue: () => void
}

const REQUIREMENTS = [
  '글로벌 결제 정산 계좌 연결',
  '브랜드 소유권 보호 및 사칭 방지',
  'KLOW 인플루언서 시딩 신청 자격 부여',
] as const

export function BusinessVerificationView({
  onReset,
  onBack,
  onContinue,
}: Props) {
  const [uploaded, setUploaded] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <button
          onClick={onReset}
          className="text-xl font-bold tracking-[-0.03em] text-black"
        >
          KLOW
        </button>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[-0.005em] text-slate-500 transition hover:text-black"
        >
          <ArrowLeft className="size-3.5" strokeWidth={2.25} />
          이전
        </button>
      </header>

      <main className="mx-auto grid w-full max-w-[1180px] flex-1 grid-cols-1 items-start gap-10 px-6 pb-24 pt-4 sm:px-10 lg:grid-cols-12 lg:gap-14">
        <section className="lg:col-span-7 lg:pt-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.005em] text-white">
            <LockKeyhole className="size-3.5" strokeWidth={2.5} />
            브랜드 콘솔 입장 전 필수 인증
          </div>

          <h1 className="mt-5 max-w-[680px] break-keep text-[30px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[42px] sm:leading-[1.14]">
            판매 링크는 만들 수 있지만, 브랜드 자산은 승인된 담당자만 관리할 수 있어야 합니다
          </h1>

          <p className="mt-5 max-w-[580px] break-keep text-[15px] leading-[1.75] tracking-[-0.01em] text-slate-500 sm:text-[16px]">
            상품 등록이 끝나면 KLOW가 결제, 정산, 인플루언서 시딩까지 브랜드 운영 영역을 열어드립니다. 그래서 사업자 등록증 확인은 선택이 아니라 브랜드를 보호하기 위한 첫 번째 잠금장치입니다.
          </p>

          <div className="mt-8 grid max-w-[620px] gap-3">
            {REQUIREMENTS.map((text) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span className="break-keep text-[14px] font-medium tracking-[-0.005em] text-slate-800">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-[620px] rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-sky-600 ring-1 ring-slate-200">
                <ShieldCheck className="size-5" strokeWidth={2.25} />
              </span>
              <div>
                <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                  승인 후 바로 열리는 권한
                </h2>
                <p className="mt-1.5 break-keep text-[13px] leading-[1.7] tracking-[-0.005em] text-slate-600">
                  전체 상품 관리, 주문과 정산 확인, KLOW 인플루언서 시딩 요청, 브랜드 페이지 수정 권한이 한 번에 활성화됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-5 lg:pt-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35),0_8px_24px_-14px_rgba(15,23,42,0.12)]">
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-sky-200 ring-1 ring-white/10">
                  <Building2 className="size-5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Brand access
                  </p>
                  <h2 className="mt-1 text-[18px] font-semibold tracking-[-0.02em]">
                    사업자 인증
                  </h2>
                </div>
              </div>
              <p className="mt-4 break-keep text-[13px] leading-[1.65] tracking-[-0.005em] text-slate-300">
                제출된 서류는 KLOW 운영팀이 브랜드명, 사업자명, 대표자 정보를 확인한 뒤 승인합니다.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setUploaded(true)}
              className={`mt-5 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed px-5 py-8 text-center transition ${
                uploaded
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-slate-300 bg-slate-50 text-slate-600 hover:border-slate-400 hover:bg-white'
              }`}
            >
              {uploaded ? (
                <FileCheck2 className="size-8" strokeWidth={2.25} />
              ) : (
                <Upload className="size-8" strokeWidth={2.25} />
              )}
              <span className="mt-3 text-[15px] font-semibold tracking-[-0.01em]">
                {uploaded ? '사업자 등록증 첨부 완료' : '사업자 등록증 업로드'}
              </span>
              <span className="mt-1 text-[12px] tracking-[-0.005em] text-slate-400">
                PDF, JPG, PNG 파일 지원
              </span>
            </button>

            <div className="mt-5 space-y-3">
              <label className="block">
                <span className="text-[12px] font-semibold tracking-[-0.005em] text-slate-700">
                  담당자 이메일
                </span>
                <input
                  defaultValue="brand@dr-oasis-lab.com"
                  className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] tracking-[-0.005em] text-slate-900 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                />
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold tracking-[-0.005em] text-slate-700">
                  정산 받을 계좌 은행
                </span>
                <input
                  defaultValue="신한은행"
                  className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] tracking-[-0.005em] text-slate-900 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                />
              </label>
            </div>

            <button
              onClick={onContinue}
              disabled={!uploaded}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[15px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none disabled:hover:translate-y-0"
            >
              승인 요청하고 브랜드 콘솔 보기
              <ArrowRight
                className="size-4 transition group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </button>
            <p className="mt-3 break-keep text-center text-[12px] leading-[1.55] tracking-[-0.005em] text-slate-400">
              실제 운영에서는 KLOW 확인 후 승인되며, 이 데모에서는 승인 후 콘솔 화면을 바로 확인합니다.
            </p>
          </div>
        </aside>
      </main>
    </div>
  )
}
