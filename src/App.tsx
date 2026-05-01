export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
            <span className="text-lg font-semibold">Klow Pro</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#" className="hover:text-slate-900">Overview</a>
            <a href="#" className="hover:text-slate-900">Features</a>
            <a href="#" className="hover:text-slate-900">Docs</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            새 프로젝트 시작
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            여기서 디자인을 시작해보세요
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Vite · React · TypeScript · Tailwind CSS v4 가 세팅된 스타터입니다.
            <br />
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">src/App.tsx</code> 를 수정하면 즉시 반영됩니다.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700">
              디자인 시작하기
            </button>
            <button className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              문서 보기
            </button>
          </div>
        </section>

        <section className="mt-20 grid gap-4 sm:grid-cols-3">
          {[
            { title: '⚡ 빠른 HMR', body: '저장 즉시 화면이 업데이트됩니다.' },
            { title: '🎨 Tailwind v4', body: '유틸리티 클래스로 빠르게 디자인.' },
            { title: '🤝 팀 공유', body: 'git push 한 번으로 팀과 공유.' },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{card.body}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        Klow Pro · {new Date().getFullYear()}
      </footer>
    </div>
  )
}
