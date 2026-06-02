import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="py-8 sm:py-10">
      <div className="mb-5">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-normal text-rust">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 w-full text-base leading-7 text-ink/70">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
