import mongoose, { Model } from "mongoose";
import { TestimonialType } from "@/app/types/TestimonialTypes";

export let Testimonial: Model<TestimonialType>;

const testimonialSchema = new mongoose.Schema<TestimonialType>({
  name: String,
  testimony: String,
});

export const setupTestimonial = () => {
  if (!mongoose.models.testimonial) {
    Testimonial = mongoose.model<TestimonialType>(
      "testimonial",
      testimonialSchema
    );
  } else {
    Testimonial = mongoose.models.testimonial;
  }

  return Testimonial;
};
