import { dbConnect } from "@/mongo/db";
import { setupTestimonial } from "@/mongo/models/Testimonial";
import { NextRequest, NextResponse } from "next/server";
import { Model } from "mongoose";
import { TestimonialType } from "@/app/types/TestimonialTypes";

let TestimonialSchema: Model<TestimonialType> | null;

let dbConnectStatus: Promise<string>;

dbConnectStatus = dbConnect("dog-grooming");

dbConnectStatus
  .then((status) => console.log(status))
  .catch((err) => console.log(err));

export async function GET() {
  if (!TestimonialSchema) {
    TestimonialSchema = setupTestimonial();
  }

  const testimonials = await TestimonialSchema.find();

  return NextResponse.json({ testimonials });
}

export async function POST(request: NextRequest) {
  const { name, testimony } = await request.json();
  if (!TestimonialSchema) {
    TestimonialSchema = setupTestimonial();
  }

  await TestimonialSchema.create({
    name,
    testimony,
  });

  return NextResponse.json({ message: "Testimonial created" }, { status: 201 });
}
