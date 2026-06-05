import type { Instructor } from '../data/sessions';

type InstructorCardProps = {
  instructor: Instructor;
};

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <section className="rounded-md border border-line bg-white p-5 shadow-soft">
      <p className="text-sm font-medium text-ink/55">Instructor</p>
      <h2 className="mt-1 text-xl font-semibold text-ink">
        {instructor.affiliationKo} {instructor.name} 교수
      </h2>
      {instructor.englishName && (
        <p className="mt-1 text-sm text-ink/70">{instructor.englishName}</p>
      )}
      {instructor.title && (
        <p className="mt-3 text-sm font-medium text-ink">{instructor.title}</p>
      )}
      {instructor.affiliationEn && (
        <p className="text-sm text-ink/65">{instructor.affiliationEn}</p>
      )}
      {instructor.lab && (
        <p className="mt-2 text-sm font-medium text-moss">{instructor.lab}</p>
      )}
    </section>
  );
}
