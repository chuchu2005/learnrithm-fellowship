import ApplyForm from "./ApplyForm";

export const metadata = {
  title: "Apply",
  description:
    "Apply to the Learnrithm AI Software Engineering Fellowship — a free 12-week program. Learn to build real AI apps with engineers from Google, OpenAI, and Grok.",
};

export default function ApplyPage() {
  return (
    <main>
      <ApplyForm />
    </main>
  );
}
