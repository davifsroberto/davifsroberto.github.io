import { Testimonial } from './TestimonialType';
import { SetLanguageUtils } from '../../utils/language.utils';
import recommendations from '../../locales/home/recommendations/index.json';

export function mountTestimonialsHelper(): Testimonial[] {
  return recommendations[SetLanguageUtils()].recommendations;
}
