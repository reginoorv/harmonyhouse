import { Link } from 'wouter';
import ArrowIcon from '@/components/ui/ArrowIcon';

const Hero = () => {
  return (
    <section className="container-custom pt-10 pb-20 grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
          Ciptakan desain, <br />yang berbicara tentang anda <br />dan untuk anda
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Kami memahami, bahwa bekerja dengan kami, Anda mencari pengalaman profesional yang penuh perhatian. 
          Desainer kami akan memperhatikan setiap kebutuhan Anda saat merancang, sehingga kami dapat 
          menciptakan ruang yang sesuai dengan harapan Anda.
        </p>
        <Link href="/kontak">
          <a className="bg-black text-white px-6 py-3 rounded-full flex items-center inline-flex">
            Ajukan proyek
            <ArrowIcon />
          </a>
        </Link>
      </div>

      <div className="w-full">
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="Interior dapur modern dengan furnitur kayu" 
          className="w-full h-auto object-cover rounded-sm"
        />
      </div>
    </section>
  );
};

export default Hero;
