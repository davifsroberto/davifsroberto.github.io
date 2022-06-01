import { Container } from './styles';
import { TimelineType } from '../../types/timeline.type';

type TimelineProps = {
  times: TimelineType[];
  border?: number;
};

export default function Timeline({ times, border }: TimelineProps) {
  return (
    <Container border={border}>
      {times.map((time) => (
        <section
          key={time.id}
          className="timeline-card timeline-card card shadow-sm"
        >
          <section className="card-body">
            <section className="title-card fw-light h5 mb-1">
              {time.title}
              <span className="fw-light h6"> - </span>
              <span className="fw-normal">{time.subtitle}</span>
            </section>

            <section className="text-muted text-small mb-2">
              {time.period}
            </section>

            <section className="mt-4">{time.description}</section>
          </section>
        </section>
      ))}
    </Container>
  );
}
