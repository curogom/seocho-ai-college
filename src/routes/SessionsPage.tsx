import { ContactCTA } from '../components/ContactCTA';
import { Section } from '../components/Section';
import { SessionSlotCard } from '../components/SessionSlotCard';
import { sessionSlots, sessions, totalSessionCount } from '../data/sessions';

export function SessionsPage() {
  const publishedCount = sessions.filter(
    (session) => session.status === 'published',
  ).length;
  const previewCount = sessions.filter((session) => session.status === 'planned')
    .length;

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-rust">
            Sessions
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            전체 차시
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">
            상단 메뉴에는 차시를 하나씩 늘리지 않고, 총 {totalSessionCount}
            주차 기준으로 이 화면에서 관리합니다. 실제 콘텐츠는 data 파일에
            추가된 차시만 열립니다.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-md border border-line bg-white p-5">
            <p className="text-sm text-ink/60">총 주차</p>
            <p className="mt-2 text-3xl font-semibold text-ink">
              {totalSessionCount}
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-5">
            <p className="text-sm text-ink/60">공개</p>
            <p className="mt-2 text-3xl font-semibold text-ink">
              {publishedCount}
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-5">
            <p className="text-sm text-ink/60">예고</p>
            <p className="mt-2 text-3xl font-semibold text-ink">
              {previewCount}
            </p>
          </div>
        </div>

        <Section
          eyebrow="Catalog"
          title="차시 카탈로그"
          description="새 차시는 15주 과정 범위 안에서 세션 데이터, 퀴즈, 용어, 시각 노트를 추가하는 방식으로 확장합니다."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sessionSlots.map((slot) => (
              <SessionSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </Section>

        <ContactCTA />
      </div>
    </>
  );
}
