import { useQuery } from '@tanstack/react-query';
import ArrowIcon from '@/components/ui/ArrowIcon';

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
}

const ServicesPage = () => {
  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-light mb-10">Layanan Kami</h1>
      
      {isLoading ? (
        <div className="space-y-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-muted h-8 w-40 mb-4"></div>
                <div className="bg-muted h-4 w-full mb-2"></div>
                <div className="bg-muted h-4 w-full mb-2"></div>
                <div className="bg-muted h-4 w-3/4 mb-6"></div>
                <div className="bg-muted h-4 w-36"></div>
              </div>
              <div className="order-first md:order-none">
                <div className="bg-muted h-64 w-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.longDescription || service.description}</p>
                <a href={`https://wa.me/6285703178423?text=Halo, saya tertarik dengan layanan ${service.title} dari Harmony House`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                  HUBUNGI KAMI UNTUK LAYANAN INI
                  <ArrowIcon />
                </a>
              </div>
              <div className="order-first md:order-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
