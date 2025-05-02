import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import ArrowIcon from '@/components/ui/ArrowIcon';

interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  category: string;
}

const ProjectCategoryPage = () => {
  const [, params] = useRoute('/proyek/kategori/:category');
  const category = params?.category;
  
  // Get all projects to filter by category
  const { data: allProjects = [], isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });
  
  // Filter projects by category
  const categoryProjects = allProjects.filter(
    project => project.category.toLowerCase() === decodeURIComponent(category || '').toLowerCase()
  );
  
  // Get category name (original case)
  const categoryName = categoryProjects.length > 0 
    ? categoryProjects[0].category 
    : decodeURIComponent(category || '');

  if (isLoading) {
    return (
      <div className="container-custom py-16">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-muted mb-10"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div className="bg-muted h-64 w-full"></div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="bg-muted h-4 w-40"></div>
                  <div className="bg-muted h-5 w-5 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-light mb-4">Proyek {categoryName}</h1>
      <p className="text-muted-foreground mb-10">
        Lihat koleksi desain {categoryName.toLowerCase()} kami yang mengutamakan fungsionalitas dan estetika
      </p>
      
      {categoryProjects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Tidak ada proyek ditemukan untuk kategori ini.</p>
          <Link href="/proyek" className="inline-flex items-center mt-4 text-sm hover:underline">
            Kembali ke semua proyek
            <ArrowIcon />
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProjects.map((project) => (
            <div key={project.id}>
              <Link href={`/proyek/${project.slug}`} className="block">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-muted-foreground">{project.title}</span>
                  <ArrowIcon />
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-12 text-center">
        <Link href="/proyek" className="inline-flex items-center text-sm hover:underline">
          Lihat semua proyek kami
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCategoryPage;