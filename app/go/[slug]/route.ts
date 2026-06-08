import { redirect } from "next/navigation";
import { resolveShortLink } from "@/lib/short-links";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const destination = resolveShortLink(slug);

  if (!destination) {
    redirect("/");
  }

  redirect(destination);
}
