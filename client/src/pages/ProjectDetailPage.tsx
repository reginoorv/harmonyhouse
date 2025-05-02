import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import ArrowIcon from '@/components/ui/ArrowIcon';

interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  description?: string;
}

const ProjectDetailPage = () => {
  const [, params] = useRoute('/proyek/:slug');
  const slug = params?.slug;

  // Fetch the specific project
  const { data: project, isLoading: isProjectLoading } = useQuery<Project>({
    queryKey: ['/api/projects', slug],
    enabled: !!slug,
  });

  // Fetch all projects to filter for related projects (same category)
  const { data: allProjects = [], isLoading: isRelatedLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
    enabled: !!project?.category,
  });
  
  // Filter projects with the same category and limit to 3
  const relatedProjects = allProjects
    .filter((p) => p.category === project?.category && p.id !== project?.id)
    .slice(0, 3);

  if (isProjectLoading) {
    return (
      <div className="container-custom py-16 animate-pulse">
        <div className="h-8 w-64 bg-muted mb-6"></div>
        <div className="h-80 w-full bg-muted mb-8"></div>
        <div className="h-4 w-full bg-muted mb-2"></div>
        <div className="h-4 w-3/4 bg-muted mb-6"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-custom py-16">
        <h1 className="text-4xl font-light mb-10">Proyek tidak ditemukan</h1>
        <p>Maaf, proyek yang Anda cari tidak dapat ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-light mb-10">{project.title}</h1>
      
      <div className="mb-12">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto max-h-[600px] object-cover rounded-sm"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-light mb-4">Deskripsi Proyek</h2>
          <p className="text-muted-foreground">
            {project.description || 
              `Proyek ${project.title} adalah contoh karya desain interior yang menampilkan keahlian studio kami dalam menciptakan ruang yang fungsional dan estetis. Proyek ini menggabungkan elemen-elemen modern dengan sentuhan klasik, menciptakan keseimbangan yang harmonis dalam ruang.`}
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-light mb-4">Detail Proyek</h3>
          <div className="space-y-4">
            <p className="flex flex-col">
              <span className="text-sm text-muted-foreground">Kategori</span>
              <span>{project.category}</span>
            </p>
            <p className="flex flex-col">
              <span className="text-sm text-muted-foreground">Lokasi</span>
              <span>Jakarta, Indonesia</span>
            </p>
            <p className="flex flex-col">
              <span className="text-sm text-muted-foreground">Tahun</span>
              <span>2023</span>
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href={`https://wa.me/6285703178423?text=Halo, saya tertarik dengan proyek ${project.title} dari Harmony House`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm hover:underline"
            >
              HUBUNGI KAMI TENTANG PROYEK INI
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      
      {relatedProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-light mb-8">Proyek Terkait</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <div key={relatedProject.id}>
                <Link href={`/proyek/${relatedProject.slug}`} className="block">
                  <div className="overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title} 
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-muted-foreground">{relatedProject.title}</span>
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;