import { Link } from 'wouter';
import ArrowIcon from '@/components/ui/ArrowIcon';

const Statistics = () => {
  const stats = [
    { value: '>250', label: 'Proyek yang diselesaikan' },
    { value: '8', label: 'Tahun pengalaman' },
    { value: '57', label: 'Proyek dikerjakan tahun ini' },
    { value: '121', label: 'Desain konsep dikembangkan' },
  ];

  return (
    <section className="container-custom py-16 border-t border-b border-[#EEEEEE]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center md:text-left">
            <div className="text-3xl font-light">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <Link href="/studio">
          <a className="text-sm flex items-center hover:underline">
            PELAJARI TENTANG STUDIO
            <ArrowIcon />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Statistics;
