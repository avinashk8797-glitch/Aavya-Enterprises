import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Tag } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import BlogCard from '../components/blog/BlogCard';
import CTASection from '../components/cta/CTASection';
import blogs from '../data/blogs';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <Navigate to="/404" replace />;

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Simple markdown to JSX renderer
  const renderContent = (content) => {
    return content
      .trim()
      .split('\n')
      .map((line, i) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} className="font-poppins font-bold text-navy text-2xl mt-10 mb-4">
              {trimmed.replace('## ', '')}
            </h2>
          );
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="font-poppins font-bold text-navy text-xl mt-8 mb-3">
              {trimmed.replace('### ', '')}
            </h3>
          );
        }
        if (trimmed.startsWith('- **')) {
          const parts = trimmed.replace('- **', '').split('**');
          return (
            <li key={i} className="font-inter text-gray-600 leading-relaxed mb-2 ml-4 list-disc">
              <strong className="text-navy">{parts[0]}</strong>
              {parts[1]?.replace(':', '')}
            </li>
          );
        }
        if (trimmed.startsWith('- ')) {
          return (
            <li key={i} className="font-inter text-gray-600 leading-relaxed mb-2 ml-4 list-disc">
              {trimmed.replace('- ', '')}
            </li>
          );
        }
        if (trimmed === '') return <br key={i} />;
        return (
          <p key={i} className="font-inter text-gray-600 leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      });
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} - Aavya Enterprises Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <PageBanner
        title={blog.title}
        breadcrumbs={[
          { label: 'Blog', path: '/blog' },
          { label: blog.title },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <span className="flex items-center gap-2 text-gray-500 text-sm font-inter">
                  <User size={14} />
                  {blog.author}
                </span>
                <span className="flex items-center gap-2 text-gray-500 text-sm font-inter">
                  <Calendar size={14} />
                  {formatDate(blog.date)}
                </span>
                <span className="flex items-center gap-2 text-gray-500 text-sm font-inter">
                  <Clock size={14} />
                  {blog.readTime}
                </span>
                <span className="flex items-center gap-2 text-gold text-sm font-inter font-medium">
                  <Tag size={14} />
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {renderContent(blog.content)}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                <Link
                  to="/blog"
                  className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-inter font-medium text-sm"
                >
                  <ArrowLeft size={16} />
                  Back to Blog
                </Link>
                <Link
                  to="/contact"
                  className="btn-primary text-sm px-6 py-2.5"
                >
                  Get Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-32 space-y-8">
                {/* About Author */}
                <div className="premium-card">
                  <h4 className="font-poppins font-semibold text-navy text-lg mb-3">About the Author</h4>
                  <div className="gold-line mb-4" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-navy flex items-center justify-center">
                      <span className="text-gold font-poppins font-bold">SD</span>
                    </div>
                    <div>
                      <p className="font-poppins font-semibold text-navy text-sm">Shankar Dubey</p>
                      <p className="text-gray-500 text-xs font-inter">Founder, Aavya Enterprises</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">
                    With over 10 years in financial services, Shankar shares his expertise
                    to help readers make informed financial decisions.
                  </p>
                </div>

                {/* Related Articles */}
                <div>
                  <h4 className="font-poppins font-semibold text-navy text-lg mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {relatedBlogs.map((rb) => (
                      <Link
                        key={rb.id}
                        to={`/blog/${rb.slug}`}
                        className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                      >
                        <span className="text-gold text-xs font-inter font-medium">{rb.category}</span>
                        <h5 className="font-poppins font-semibold text-navy text-sm mt-1 group-hover:text-gold transition-colors duration-200 line-clamp-2">
                          {rb.title}
                        </h5>
                        <span className="text-gray-400 text-xs font-inter mt-1 block">{rb.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-navy rounded-2xl p-6 text-center">
                  <h4 className="font-poppins font-bold text-white text-lg mb-2">
                    Need Help?
                  </h4>
                  <p className="text-gray-300 text-sm font-inter mb-4">
                    Get a free consultation today.
                  </p>
                  <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="font-poppins font-bold text-navy text-2xl mb-8 text-center">
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default BlogDetail;
