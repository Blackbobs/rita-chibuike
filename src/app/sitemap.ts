import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rita-chibuike.com"

  // Main pages
  const routes = ["", "/awards"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Project pages
  const projects = ["outbound", "nuwellai", "edubridges"]
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Case study pages
  const caseStudies = ["health-genius", "freshpaddy", "doctorme", "educonnect", "talenvo", "healthbridge"]
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...projectRoutes, ...caseStudyRoutes]
}
