import HeroSection from '@/components/HeroSection'
import CategorySection from '@/components/CategorySection'
import BundleSection from '@/components/BundleSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import EducationSection from '@/components/EducationSection'

export const metadata = {
  title: 'DetailPro — 專業汽車美容用品',
  description: 'DetailPro 提供頂級汽車美容、洗車精、鍍膜蠟與專業工具。',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BundleSection />
      <BeforeAfterSection />
      <EducationSection />
    </>
  )
}
