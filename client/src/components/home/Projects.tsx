import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import ArrowIcon from '@/components/ui/ArrowIcon';

interface ProjectPreview {
  id: number;
  title: string;
  image: string;
  slug: string;
}

const Projects = () => {
  const { data: projects = [], isLoading } = useQuery<ProjectPreview[]>({
    queryKey: ['/api/projects/featured'],
  });

  return (
    <section className="container-custom py-16">
      <h2 className="text-2xl font-light mb-10">Proyek kami</h2>
      
      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-muted h-64 md:h-80 w-full"></div>
              <div className="mt-3 flex justify-between items-center">
                <div className="bg-muted h-4 w-40"></div>
                <div className="bg-muted h-5 w-5 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id}>
                <Link href={`/proyek/${project.slug}`}>
                  <a className="block">
                    <div className="overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-muted-foreground">{project.title}</span>
                      <ArrowIcon />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-8">
            <Link href="/proyek">
              <a className="text-sm flex items-center hover:underline">
                LIHAT SEMUA PROYEK
                <ArrowIcon />
              </a>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
