import { dbConnect } from "@/mongo/db";
import { setupTestimonial } from "@/mongo/models/Testimonial";
import { NextResponse } from "next/server";
import { Model } from "mongoose";
import { TestimonialType } from "@/app/types/TestimonialTypes";

let TestimonialSchema: Model<TestimonialType> | null;

export async function GET() {
  const mongoDBConnection = dbConnect("dog-grooming");
  if (mongoDBConnection) {
    mongoDBConnection.then(() => console.log("Connection established"));
    if (!TestimonialSchema) {
      TestimonialSchema = setupTestimonial();
    }

    const projection = {
      name: true,
      testimony: true,
    };

    const testimonials = await TestimonialSchema.find({})
      .sort({ name: 1 })
      .select(projection);

    return NextResponse.json({ testimonials }, { status: 200 });
  }
}
