import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="container-custom py-10 border-t border-[#EEEEEE]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="logo mb-2">
            <Link href="/" className="text-foreground font-medium">
              HARMONY HOUSE
            </Link>
          </div>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground">Jl. Menteng Raya 58, Jakarta, 10340</p>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground">hello@harmonyhouse.id</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Facebook</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pinterest</a>
        </div>
      </div>
      
      <div className="mt-10 flex flex-col md:flex-row md:justify-between">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/studio" className="text-sm text-muted-foreground hover:text-foreground">
            Nama Studio
          </Link>
          <Link href="/proyek" className="text-sm text-muted-foreground hover:text-foreground">
            Proyek
          </Link>
          <Link href="/layanan" className="text-sm text-muted-foreground hover:text-foreground">
            Layanan
          </Link>
          <Link href="/kontak" className="text-sm text-muted-foreground hover:text-foreground">
            Kontak
          </Link>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground">© 2023 Harmony House. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
