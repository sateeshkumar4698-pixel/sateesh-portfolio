"use client";
import { resumePdf } from "@/lib/data";

export default function DownloadButton() {
  return (
    <a
      href={resumePdf}
      download
      className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition-colors shadow"
    >
      Download PDF
    </a>
  );
}
