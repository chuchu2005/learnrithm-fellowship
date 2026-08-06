import { STUDY_SLUGS, STUDY_PAGES } from '@/lib/studyData'
import { COMPARE_SLUGS } from '@/lib/compareData'

export default function sitemap() {
  const baseUrl = 'https://learnrithm.com'

  // Programmatic study pages (subjects + exams) — high student-search value
  const studyPages = STUDY_SLUGS.map((slug) => ({
    url: `${baseUrl}/study/${slug}`,
    lastModified: new Date(),
    changeFrequency: STUDY_PAGES[slug].type === 'exam' ? 'weekly' : 'monthly',
    priority: STUDY_PAGES[slug].type === 'exam' ? 0.9 : 0.8,
  }))

  // Comparison pages vs top NA + EU competitors
  const comparePages = COMPARE_SLUGS.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Main pages with high priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacypolicy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termsofservice`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refundpolicy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookiepolicy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/requestdeletion`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ai-policies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [...staticPages, ...studyPages, ...comparePages]
}
