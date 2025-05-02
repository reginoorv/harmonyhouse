import { useQuery } from '@tanstack/react-query';
import Statistics from '@/components/home/Statistics';

interface StudioInfo {
  history: string;
  approach: string;
  team: string;
}

const AboutPage = () => {
  const { data: studioInfo, isLoading } = useQuery<StudioInfo>({
    queryKey: ['/api/studio'],
  });

  return (
    <div>
      <div className="container-custom py-16">
        <h1 className="text-4xl font-light mb-10">Nama Studio</h1>
        
        {isLoading ? (
          <div className="animate-pulse space-y-8 max-w-3xl">
            <div className="bg-muted h-4 w-full"></div>
            <div className="bg-muted h-4 w-full"></div>
            <div className="bg-muted h-4 w-3/4"></div>
            <div className="bg-muted h-4 w-full"></div>
            <div className="bg-muted h-4 w-full"></div>
            <div className="bg-muted h-4 w-2/3"></div>
          </div>
        ) : (
          <div className="space-y-8 max-w-3xl">
            <p className="text-lg">{studioInfo?.history || 
              "Harmony House didirikan pada tahun 2015 dengan visi untuk menciptakan ruang interior yang tidak hanya indah secara visual, tetapi juga fungsional dan mencerminkan kepribadian penghuninya. Kami percaya bahwa desain yang baik harus menggabungkan estetika dengan fungsi, menciptakan keseimbangan sempurna antara keindahan dan kenyamanan."
            }</p>
            
            <p>{studioInfo?.approach || 
              "Pendekatan desain kami berpusat pada kebutuhan klien. Kami bekerja sama dengan setiap klien untuk memahami preferensi, gaya hidup, dan kebutuhan fungsional mereka. Tim desainer berpengalaman kami kemudian menerjemahkan visi ini menjadi rencana desain yang terperinci, memperhatikan setiap detail untuk menciptakan ruang yang benar-benar mencerminkan kepribadian dan kebutuhan klien kami."
            }</p>
            
            <p>{studioInfo?.team || 
              "Tim kami terdiri dari desainer interior berpengalaman, arsitek, dan spesialis teknis yang bekerja sama untuk memberikan hasil terbaik. Dengan kombinasi kreativitas, keahlian teknis, dan perhatian terhadap detail, kami berkomitmen untuk mewujudkan visi klien kami dan menciptakan ruang yang tidak hanya indah tetapi juga fungsional dan nyaman untuk dihuni."
            }</p>
          </div>
        )}
      </div>
      
      <Statistics />
      
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Interior studio" 
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div>
            <h2 className="text-2xl font-light mb-6">Filosofi Desain</h2>
            <p className="text-muted-foreground mb-6">
              Kami percaya bahwa desain interior yang baik harus mencerminkan kepribadian penghuninya sambil menciptakan ruang yang fungsional dan nyaman. Setiap proyek kami dimulai dengan mendengarkan kebutuhan dan keinginan klien, dan kemudian menerjemahkan visi mereka menjadi kenyataan.
            </p>
            <p className="text-muted-foreground">
              Pendekatan kami menggabungkan estetika dengan fungsionalitas, menciptakan ruang yang tidak hanya indah untuk dilihat tetapi juga nyaman untuk dihuni. Kami memperhatikan setiap detail, dari pemilihan material hingga pencahayaan, untuk menciptakan ruang yang benar-benar mencerminkan gaya hidup dan kepribadian klien kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
