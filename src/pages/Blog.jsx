import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import BlogCard from '../components/blog/BlogCard';
import blogs from '../data/blogs';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Aavya Enterprises | Financial Insights & Articles</title>
        <meta name="description" content="Read our latest articles on loan settlement, debt management, financial planning, and more from the experts at Aavya Enterprises." />
      </Helmet>

      <PageBanner
        title="Our Blog"
        subtitle="Insights, tips, and guides on financial management and debt resolution."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionTitle
            subtitle="Latest Articles"
            title="Financial Insights & Guides"
            description="Stay informed with expert articles on financial management, debt resolution, and more."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
