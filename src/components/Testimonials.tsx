import { Star, Quote, MessageSquare } from "lucide-react";
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
    <section id="testimonials" className="section-padding bg-card relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-5">
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="fade-up"
              delay={index * 120}
            >
              <div className="group relative h-full">
                {/* Card background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative card-premium p-8 lg:p-10 h-full flex flex-col rounded-3xl">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <Quote className="w-6 h-6 text-primary/40 group-hover:text-primary/60 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-10 leading-relaxed flex-1 text-lg">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
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
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}