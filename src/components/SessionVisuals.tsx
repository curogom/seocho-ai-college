import type { VisualNote } from '../data/sessions';

type SessionVisualsProps = {
  visuals: VisualNote[];
};

export function SessionVisuals({ visuals }: SessionVisualsProps) {
  if (visuals.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {visuals.map((visual) => (
        <figure
          key={visual.src}
          className="overflow-hidden rounded-md border border-line bg-white shadow-soft"
        >
          <img
            className="aspect-video w-full bg-paper object-contain"
            src={visual.src}
            alt={visual.alt}
            loading="lazy"
          />
          <figcaption className="border-t border-line p-5">
            <p className="text-base font-semibold text-ink">{visual.title}</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {visual.caption}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
