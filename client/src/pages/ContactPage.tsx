import Contact from '@/components/home/Contact';

const ContactPage = () => {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-light mb-10">Kontak Kami</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-light mb-6">Informasi Kontak</h2>
          <div className="space-y-4">
            <p className="flex flex-col">
              <span className="text-sm text-muted-foreground">Alamat</span>
              <span>Jl. Menteng Raya 58, Jakarta, 10340</span>
            </p>
            <p className="flex flex-col">
              <span className="text-sm text-muted-foreground">Email</span>
              <span>hello@harmonyhouse.id</span>
            </p>
            <p className="flex flex-col">
              <span className="text-sm text-muted-foreground">Telepon</span>
              <span>+62 21 123 4567</span>
            </p>
            <p className="flex flex-col">
              <span className="text-sm text-muted-foreground">Jam Kerja</span>
              <span>Senin - Jumat: 09:00 - 18:00</span>
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-light mb-4">Ikuti Kami</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Pinterest</a>
            </div>
          </div>
        </div>
        
        <div>
          <img 
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Kantor Harmony House" 
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default ContactPage;
