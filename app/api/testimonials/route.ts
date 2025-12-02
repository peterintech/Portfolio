import { type NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to store testimonials as JSON (for simplicity)
const testimonialsFilePath = path.join(
  process.cwd(),
  "data",
  "testimonials.json"
);

function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

export async function GET() {
  try {
    ensureDataDirectory();
    if (fs.existsSync(testimonialsFilePath)) {
      const data = fs.readFileSync(testimonialsFilePath, "utf-8");
      return NextResponse.json(JSON.parse(data), { status: 200 });
    }
    return NextResponse.json([], { status: 200 });
  } catch (error) {
    console.error("Error reading testimonials:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, title, review, imgPath } = await request.json();

    if (!name || !title || !review) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    ensureDataDirectory();

    let testimonials = [];
    if (fs.existsSync(testimonialsFilePath)) {
      const data = fs.readFileSync(testimonialsFilePath, "utf-8");
      testimonials = JSON.parse(data);
    }

    const newTestimonial = {
      id: Date.now(),
      name,
      title,
      review,
      imgPath: imgPath || "/images/default-avatar.png",
      createdAt: new Date(),
    };

    testimonials.push(newTestimonial);

    fs.writeFileSync(
      testimonialsFilePath,
      JSON.stringify(testimonials, null, 2)
    );

    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return NextResponse.json(
      { error: "Failed to add testimonial" },
      { status: 500 }
    );
  }
}
