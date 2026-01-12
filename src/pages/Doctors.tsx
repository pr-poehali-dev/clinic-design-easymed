import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";

const doctors = [
  {
    name: "Смирнова Елена Викторовна",
    specialization: "Терапевт, специалист по оформлению медицинских справок",
    experience: "15 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/a3976503-a615-45ff-8639-91dc275de51c.jpg",
    link: "/doctor/smirnova"
  },
  {
    name: "Петров Дмитрий Александрович",
    specialization: "Врач общей практики, эксперт по профосмотрам",
    experience: "20 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/d2e2dc07-d467-45b2-8977-b44eefab26ce.jpg",
    link: "/doctor/petrov"
  },
  {
    name: "Козлова Марина Сергеевна",
    specialization: "Терапевт, специалист по медкнижкам",
    experience: "12 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/4c49ae5f-4815-4c7c-b921-01d11955244a.jpg",
    link: "/doctor/kozlova"
  },
  {
    name: "Соколов Андрей Игоревич",
    specialization: "Врач-терапевт, специалист по справкам для студентов",
    experience: "10 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/39bdd17f-9864-4bdb-8504-a5a1b2b88384.jpg",
    link: "/doctor/sokolov"
  },
  {
    name: "Волкова Ольга Николаевна",
    specialization: "Терапевт, эксперт по оформлению справок для работников",
    experience: "18 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/c9a553ac-e5b7-44e6-b666-65f82fa0c724.jpg",
    link: "/doctor/volkova"
  }
];

const Doctors = () => {
  useEffect(() => {
    document.title = "Наши врачи - ИзиМед";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Врачи медицинского центра ИзиМед: квалифицированные специалисты с многолетним опытом работы.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Врачи медицинского центра ИзиМед: квалифицированные специалисты с многолетним опытом работы.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CertificateHeader />

      <main className="container py-12">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-primary hover:underline">
              ИзиМед
            </Link>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">Наши врачи</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">Наши врачи</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Квалифицированные специалисты с многолетним опытом работы
          </p>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                <Link 
                  key={index} 
                  to={doctor.link}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {doctor.specialization}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {doctor.experience}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Doctors;