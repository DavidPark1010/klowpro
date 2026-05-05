import { useMemo, useRef, useState, type ChangeEvent } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Image as ImageIcon,
  Link,
  Lock,
  Sparkles,
  Type,
  Upload,
} from 'lucide-react'
import { StorePreview } from './StorePreview'

type Props = {
  source: string
  mode: 'store' | 'brand'
  onReset: () => void
  onBack: () => void
  onContinue: () => void
}

export function SetupView({ source, onReset, onBack, onContinue }: Props) {
  const inferredName = useMemo(() => toBrandName(source), [source])
  const [name, setName] = useState(inferredName)
  const [tagline, setTagline] = useState(
    'Gentle skincare made for sensitive skin and simple daily routines.',
  )
  const [bio, setBio] = useState(
    '민감한 피부도 편안하게 사용할 수 있는 저자극 스킨케어 브랜드입니다. 순한 성분, 산뜻한 사용감, 매일 지속 가능한 루틴을 중요하게 생각합니다.',
  )
  const [instagram, setInstagram] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const imageRef = useRef<HTMLInputElement>(null)
  const docRef = useRef<HTMLInputElement>(null)

  const publicUrl = `klow.global/${slugify(source)}`
  const completedCount =
    1 +
    Number(Boolean(bio.trim())) +
    Number(Boolean(image)) +
    Number(Boolean(instagram.trim()))

  const onImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImage(reader.result as string)
    reader.readAsDataURL(file)
  }

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
              주소 다시 입력
            </button>
            <button
              onClick={onContinue}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-px"
            >
              이 주소 선점하기
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[430px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 rounded-3xl border border-slate-200 bg-white p-4">
            <p className="text-[12px] font-semibold text-slate-400">
              지금 만들어진 브랜드관
            </p>
            <p className="mt-1 truncate text-[15px] font-semibold">{publicUrl}</p>
          </div>
          <StorePreview brand={{ name, tagline, story: bio, image }} />
        </aside>

        <section className="min-w-0">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-100">
                  <Sparkles className="size-3.5" strokeWidth={2.25} />
                  브랜드관 기본 레이아웃 완성
                </div>
                <h1 className="mt-4 break-keep text-[30px] font-semibold leading-[1.16] tracking-[-0.035em] sm:text-[42px]">
                  먼저 브랜드관을 매력적으로 완성하세요.
                </h1>
                <p className="mt-3 max-w-[640px] break-keep text-[15px] leading-[1.7] text-slate-600">
                  상품 가격이나 상세 옵션은 아직 필요 없습니다. 대표 이미지,
                  소개 문구, SNS 링크만 채워도 “내 브랜드관”처럼 보입니다.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 text-white sm:w-[260px]">
                <p className="text-[12px] font-semibold text-emerald-300">
                  선점 타이밍
                </p>
                <p className="mt-2 text-[28px] font-semibold tracking-[-0.04em]">
                  {completedCount}/4
                </p>
                <p className="mt-1 break-keep text-[12px] leading-[1.55] text-white/65">
                  마음에 들면 다음 단계에서 로그인하고 이 주소를 확정합니다.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <UploadButton
                icon={Upload}
                title="브랜드 소개서가 있다면 업로드"
                body="PDF/PPT가 있으면 소개 문구를 더 쉽게 채울 수 있습니다."
                onClick={() => docRef.current?.click()}
              />
              <UploadButton
                icon={ImageIcon}
                title="대표 이미지 넣기"
                body="제품 컷이나 브랜드 이미지를 넣으면 상단 화면이 바로 살아납니다."
                onClick={() => imageRef.current?.click()}
              />
            </div>
            <input ref={docRef} type="file" className="hidden" accept=".pdf,.ppt,.pptx" />
            <input ref={imageRef} type="file" className="hidden" accept="image/*" onChange={onImage} />
          </div>

          <div className="mt-5 grid gap-4">
            <GuideBlock
              number="1"
              icon={Type}
              title="브랜드 기본 정보"
              description="주소에서 브랜드명을 먼저 넣어두었습니다. 필요한 문구만 고치세요."
              complete={Boolean(name.trim() && tagline.trim())}
            >
              <div className="grid gap-4">
                <Field label="브랜드명">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition focus:border-slate-400"
                  />
                </Field>
                <Field label="영문 한 줄 소개">
                  <input
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition focus:border-slate-400"
                  />
                </Field>
              </div>
            </GuideBlock>

            <GuideBlock
              number="2"
              icon={Sparkles}
              title="브랜드 소개"
              description="국문으로 편하게 적으면, 영문 판매관에는 짧고 자연스럽게 반영됩니다."
              complete={Boolean(bio.trim())}
            >
              <Field label="국문 소개 문구">
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-[15px] leading-[1.65] outline-none transition focus:border-slate-400"
                />
              </Field>
            </GuideBlock>

            <GuideBlock
              number="3"
              icon={ImageIcon}
              title="대표 이미지"
              description="이미지를 넣으면 왼쪽 모바일 미리보기 상단에 바로 반영됩니다."
              complete={Boolean(image)}
            >
              <button
                type="button"
                onClick={() => imageRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <ImageIcon className="size-4" strokeWidth={2.25} />
                이미지 선택
              </button>
              {image && (
                <p className="mt-3 text-[13px] font-semibold text-emerald-700">
                  대표 이미지가 적용되었습니다.
                </p>
              )}
            </GuideBlock>

            <GuideBlock
              number="4"
              icon={Link}
              title="SNS 링크"
              description="인스타그램이나 틱톡 주소가 있으면 신뢰도가 올라갑니다."
              complete={Boolean(instagram.trim())}
            >
              <Field label="Instagram 또는 TikTok">
                <input
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="https://instagram.com/yourbrand"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition placeholder:text-slate-400 focus:border-slate-400"
                />
              </Field>
            </GuideBlock>

            <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex items-start gap-3">
                <Lock className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                <div>
                  <h2 className="text-[16px] font-semibold text-emerald-950">
                    이제 이 주소를 선점할 수 있습니다.
                  </h2>
                  <p className="mt-1 break-keep text-[13px] leading-[1.6] text-emerald-900">
                    상품 등록은 로그인 이후에 진행합니다. 가격, 재고, 옵션처럼
                    저장이 필요한 정보이기 때문입니다.
                  </p>
                </div>
              </div>
            </div>
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

function GuideBlock({
  number,
  icon: Icon,
  title,
  description,
  complete,
  children,
}: {
  number: string
  icon: typeof Type
  title: string
  description: string
  complete: boolean
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
          <h2 className="text-[16px] font-semibold tracking-[-0.015em]">
            {title}
          </h2>
          <p className="mt-1 break-keep text-[13px] leading-[1.55] text-slate-500">
            {description}
          </p>
        </div>
      </div>
      {children}
    </article>
  )
}

function UploadButton({
  icon: Icon,
  title,
  body,
  onClick,
}: {
  icon: typeof Upload
  title: string
  body: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-slate-300 hover:bg-white"
    >
      <Icon className="size-5 text-slate-600" strokeWidth={2.25} />
      <p className="mt-3 text-[15px] font-semibold">{title}</p>
      <p className="mt-1 break-keep text-[13px] leading-[1.55] text-slate-500">
        {body}
      </p>
    </button>
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
