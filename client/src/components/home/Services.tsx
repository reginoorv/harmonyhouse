import { Link } from 'wouter';
import ArrowIcon from '@/components/ui/ArrowIcon';

const Services = () => {
  const services = [
    {
      title: 'Perencanaan',
      description: 'Ciptakan pendekatan teknis-rancangan mendalam dengan mengambil pertimbangan dimensi, penyusunan objek-objek dalam ruang, indikasi dan penempatan outlet listrik, pencahayaan, ventilasi dan perpipaan dalam proyek.',
      image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      slug: 'perencanaan'
    },
    {
      title: 'Perlengkapan',
      description: 'Perlengkapan projek ini meliputi elemen-elemen kecil. Tim studio kami akan membantu Anda memilih semua elemen interior, mulai dari peralatan, furnitur dan finishing hingga peralatan sanitasi. Ini memastikan hasil akhir yang sangat harmonis.',
      image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      slug: 'perlengkapan'
    },
    {
      title: 'Desain-proyek',
      description: 'Ciptakan gambaran komprehensif dan konseptual yang menampilkan semua detail bentuk interior Anda. Desain-proyek mencakup deskripsi, pilihan bahan, tata letak, daftar furnitur dan pengerjaan, sketsa artis dan representasi fotorealistik.',
      image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      slug: 'desain-proyek'
    }
  ];

  return (
    <section className="container-custom py-16 border-t border-[#EEEEEE]">
      <h2 className="text-2xl font-light mb-10">Layanan</h2>

      {services.map((service, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-12 mb-12 last:mb-0">
          <div>
            <h3 className="text-xl font-light mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <Link href={`/layanan/${service.slug}`}>
              <a className="flex items-center text-sm hover:underline">
                SELENGKAPNYA
                <ArrowIcon />
              </a>
            </Link>
          </div>
          <div className="order-first md:order-none">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-sm"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
