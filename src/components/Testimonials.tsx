import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content: "Clean design, mobile friendly and great support. My website looks exactly how I imagined it! The team delivered beyond expectations.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rohit Verma",
    role: "E-commerce Store Owner",
    content: "E-commerce site fast bani. Payment links and product system easy hai. Very happy with the results! Sales increased 40% after launch.",
    rating: 5,
    avatar: "RV",
  },
  {
    name: "Imran Khan",
    role: "Education Consultant",
    content: "Student portal and login system exactly as required. Professional work! The dashboard is intuitive and easy to manage.",
    rating: 5,
    avatar: "IK",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="card-base p-8 relative h-full flex flex-col group">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-8 leading-relaxed flex-1 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
                    <span className="font-display font-bold text-primary-foreground text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
