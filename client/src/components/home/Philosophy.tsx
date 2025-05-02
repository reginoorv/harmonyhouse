import { useEffect, useRef } from 'react';

const Philosophy = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <section className="container-custom py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Desain interior - ini bukan hanya estetika, tetapi juga penciptaan
            ruang fungsional dan nyaman untuk hidup
          </h2>
          <p className="text-muted-foreground mb-8">
            Nama studio mengadopsi pendekatan komprehensif dalam penciptaan ruang
            dengan memperhatikan kebutuhan fungsional klien dan karakteristik teknologi.
          </p>
          <p className="text-muted-foreground mb-8">
            Kami menghadirkan pelatih profesional dan spesialis teknis untuk
            memastikan bahwa elemen-elemen dekorasi tidak hanya indah secara
            visual tetapi juga memenuhi kebutuhan fungsional. Hal ini memastikan
            bahwa setiap proyek akan diimplementasikan sesuai rencana.
          </p>
        </div>
        
        <div className="order-first md:order-none">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Interior modern dengan meja makan"
            className="w-full h-80 object-cover rounded-sm opacity-0 transition-all duration-1000 transform translate-y-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
