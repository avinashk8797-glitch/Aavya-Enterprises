import StatsCard from '../common/StatsCard';
import stats from '../../data/stats';

const TrustSection = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-x-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent -z-10" />

      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(stats || []).map((stat, index) => (
            <StatsCard
              key={stat?.id || index}
              icon={stat?.icon}
              value={stat?.value}
              suffix={stat?.suffix}
              label={stat?.label}
              description={stat?.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
