import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area"; // Import from Radix UI
import { cn } from "../../lib/utils"; // Import the utility function
export default function PublicationDetails() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 lg:p-6 ">
      <Card className="max-w-3xl w-full shadow-xl rounded-3xl bg-white border border-gray-200">
        <CardContent className="lg:p-8 pt-2">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
            📜 Publication Details
          </h1>
          <ScrollArea className=" overflow-y-auto p-4 border rounded-lg bg-gray-50 shadow-inner">
            <p className="text-gray-800 text-lg mb-4 leading-relaxed">
              <strong>Selected accepted & presented papers</strong> will be published in
              <strong> The Indian Journal of Technical Education (IJTE, UGC Care listed).</strong>
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 border-b pb-2">About the Journal</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              The Indian Journal of Technical Education is published by the Indian Society for Technical Education on a quarterly basis...
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 border-b pb-2">Guidelines for Submission</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-3 pl-4">
              <li>Manuscripts will be initially screened by editors and checked for plagiarism.</li>
              <li>Reviewed by an expert in the relevant discipline.</li>
              <li>Authors are fully responsible for their contributions.</li>
              <li>Copyright clearance is the sole responsibility of the authors.</li>
              <li>Accepted papers must be submitted in Microsoft Word format.</li>
              <li>Selection is based on relevance, clarity, originality, and research contribution.</li>
              <li>Manuscripts should include author details only at the beginning.</li>
              <li>Publication may take up to 6 months from submission.</li>
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
