import { Heart, CheckCircle, Calendar, MapPin } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
            Why Choose EventFinder?
          </h2>
          <p className="text-xl text-purple-800 max-w-2xl mx-auto">
            Stop wasting time on generic event listings. Get events that
            actually matter to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              Personalized
            </h3>
            <p className="text-purple-800">
              Curated based on your interests and goals
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              Quality Assured
            </h3>
            <p className="text-purple-800">
              Handpicked events by an AI agent trained on your profile
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              Smart Scheduling
            </h3>
            <p className="text-purple-800">
              Events that fit your availability and time preferences
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              Location Based
            </h3>
            <p className="text-purple-800">
              Events within your preferred distance and area
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
