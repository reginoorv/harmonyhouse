import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import ArrowIcon from '@/components/ui/ArrowIcon';

interface ContactFormData {
  name: string;
  project: string;
  email: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    project: '',
    email: '',
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await apiRequest('POST', '/api/contact', data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: 'Permintaan terkirim',
        description: 'Terima kasih! Kami akan menghubungi Anda segera.',
      });
      setFormData({ name: '', project: '', email: '' });
    },
    onError: (error) => {
      toast({
        title: 'Gagal mengirim',
        description: `Terjadi kesalahan: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: 'destructive',
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section className="container-custom py-16 grid md:grid-cols-2 gap-12 border-t border-[#EEEEEE]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Interior dapur"
          className="w-full h-80 object-cover rounded-sm"
        />
      </div>
      
      <div>
        <h2 className="text-2xl font-light mb-6">
          Tinggalkan permintaan untuk diskusi gratis tentang proyek Anda
        </h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm text-muted-foreground mb-1">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-[#E5E5E5] py-2 focus:outline-none focus:border-foreground transition bg-transparent"
              placeholder="Masukkan nama"
              required
            />
          </div>
          
          <div>
            <label htmlFor="project" className="block text-sm text-muted-foreground mb-1">
              Deskripsi proyek
            </label>
            <input
              type="text"
              id="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full border-b border-[#E5E5E5] py-2 focus:outline-none focus:border-foreground transition bg-transparent"
              placeholder="Tuliskan deskripsi singkat"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm text-muted-foreground mb-1">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-[#E5E5E5] py-2 focus:outline-none focus:border-foreground transition bg-transparent"
              placeholder="Masukkan email"
              required
            />
          </div>
          
          <div>
            <button 
              type="submit" 
              className="flex items-center text-sm hover:underline mt-4"
              disabled={contactMutation.isPending}
            >
              {contactMutation.isPending ? 'MENGIRIM...' : 'KIRIM PERMINTAAN'}
              <ArrowIcon />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
