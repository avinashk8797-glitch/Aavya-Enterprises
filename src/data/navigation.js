import services from './services';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Founder', path: '/founder-message' },
  {
    label: 'Services',
    path: '/services',
    dropdown: services.map((s) => ({
      label: s.title,
      path: `/services/${s.slug}`,
      icon: s.icon,
    })),
  },
  { label: 'Process', path: '/process' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default navigation;
