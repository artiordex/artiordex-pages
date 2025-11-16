
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumb from '../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import FeaturedPostsSection from './components/FeaturedPostsSection';
import BlogListSection from './components/BlogListSection';
import CategoriesSection from './components/CategoriesSection';
import NewsletterSection from './components/NewsletterSection';
import CTASection from './components/CTASection';

const BlogPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb items={breadcrumbItems} />
        
        <FeaturedPostsSection />
        <CategoriesSection />
        <BlogListSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;