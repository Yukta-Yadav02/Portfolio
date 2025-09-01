import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-purple-50 to-purple-100 rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-700">
          Education
        </h2>

        <div className="space-y-8">
          {/* BCA Education Card */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-purple-100 p-3 rounded-full">
              <GraduationCap className="text-purple-700 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-purple-800">
                BCA — Vikram University
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Currently in 3rd Year — building a strong foundation in Core Java, Web Technologies, and Software Development.
              </p>
            </div>
          </div>

          {/* Additional Courses Card */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-purple-100 p-3 rounded-full">
              <BookOpen className="text-purple-700 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-purple-800">
                Other Courses & Mentorship
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Learning MERN stack, working on real-world projects, and deploying scalable applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
