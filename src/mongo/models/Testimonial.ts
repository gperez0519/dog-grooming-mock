import mongoose, { Model } from "mongoose";
import { TestimonialType } from "@/app/types/TestimonialTypes";

export let Testimonial: Model<TestimonialType>;

const testimonialSchema = new mongoose.Schema<TestimonialType>({
  name: String,
  testimony: String,
});

export const setupTestimonial = () => {
  if (!mongoose.models.Testimonial) {
    Testimonial = mongoose.model<TestimonialType>(
      "testimonial",
      testimonialSchema
    );
  } else {
    Testimonial = mongoose.models.Testimonial;
  }

  return Testimonial;
};
