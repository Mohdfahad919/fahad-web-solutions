import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  if (location.pathname === "/") return null;

  const crumbs = [
    { label: "Home", href: "/" },
    ...pathnames.map((segment, index) => {
      const href = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = routeNames[href] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return { label, href };
    }),
  ];

  // JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `https://fahadwebservicecom.lovable.app${crumb.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="w-full px-4 sm:px-6 lg:px-8 pt-20 pb-0">
        <div className="max-w-[1200px] mx-auto">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {crumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                {i === crumbs.length - 1 ? (
                  <span className="text-foreground font-medium truncate max-w-[200px]">{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {i === 0 && <Home className="w-3.5 h-3.5" />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
