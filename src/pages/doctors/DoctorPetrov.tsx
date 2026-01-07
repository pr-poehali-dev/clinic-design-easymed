import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";
import { Badge } from "@/components/ui/badge";

const DoctorPetrov = () => {
  useEffect(() => {
    document.title = "Петров Дмитрий Александрович - врач общей практики ИзиМед";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Петров Дмитрий Александрович - врач общей практики, эксперт по профосмотрам. 20 лет опыта работы в клинике ИзиМед.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Петров Дмитрий Александрович - врач общей практики, эксперт по профосмотрам. 20 лет опыта работы в клинике ИзиМед.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CertificateHeader />

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-primary hover:underline">
              ИзиМед
            </Link>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            <Link to="/about" className="text-primary hover:underline">
              О клинике
            </Link>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">Петров Д.А.</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <img 
                src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/d2e2dc07-d467-45b2-8977-b44eefab26ce.jpg" 
                alt="Петров Дмитрий Александрович" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-2">Петров Дмитрий Александрович</h1>
              <p className="text-xl text-primary mb-4">Врач общей практики</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">20 лет опыта</Badge>
                <Badge variant="outline">Профосмотры</Badge>
                <Badge variant="outline">Общая практика</Badge>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" className="text-primary" size={20} />
                    Личная информация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Год рождения:</span>
                      <span className="font-medium">1974</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Стаж работы:</span>
                      <span className="font-medium">20 лет</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Специализация:</span>
                      <span className="font-medium">Общая практика</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                  Образование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">Российский национальный исследовательский медицинский университет им. Н.И. Пирогова</p>
                    <p className="text-muted-foreground">Лечебный факультет, специальность "Лечебное дело"</p>
                    <p className="text-sm text-muted-foreground">1992-1998 гг.</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Ординатура по специальности "Общая врачебная практика"</p>
                    <p className="text-muted-foreground">РНИМУ им. Н.И. Пирогова</p>
                    <p className="text-sm text-muted-foreground">1998-2000 гг.</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Кандидат медицинских наук</p>
                    <p className="text-muted-foreground">Диссертация по теме "Современные подходы к профилактической медицине"</p>
                    <p className="text-sm text-muted-foreground">2008 г.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Briefcase" className="text-primary" size={24} />
                  Опыт работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">Медицинский центр "ИзиМед"</p>
                    <p className="text-muted-foreground">Врач общей практики, эксперт по профосмотрам</p>
                    <p className="text-sm text-muted-foreground">2015 г. - настоящее время (9 лет)</p>
                    <ul className="mt-2 ml-6 list-disc text-sm text-muted-foreground space-y-1">
                      <li>Проведение профилактических медицинских осмотров</li>
                      <li>Оформление медицинских книжек</li>
                      <li>Диспансеризация работников предприятий</li>
                      <li>Более 8000 проведенных медосмотров</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Городская больница №67</p>
                    <p className="text-muted-foreground">Врач общей практики, заведующий отделением</p>
                    <p className="text-sm text-muted-foreground">2005-2015 гг. (10 лет)</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Поликлиника №12</p>
                    <p className="text-muted-foreground">Врач-терапевт</p>
                    <p className="text-sm text-muted-foreground">2000-2005 гг. (5 лет)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  Повышение квалификации и сертификаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-medium">Экспертиза профессиональной пригодности</p>
                      <p className="text-sm text-muted-foreground">РМАПО, 2023 г.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-medium">Современные стандарты профилактических осмотров</p>
                      <p className="text-sm text-muted-foreground">НИИ Медицины труда, 2022 г.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-medium">Клиническая диагностика в общей практике</p>
                      <p className="text-sm text-muted-foreground">РНИМУ им. Н.И. Пирогова, 2020 г.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-medium">Сертификат специалиста по общей врачебной практике</p>
                      <p className="text-sm text-muted-foreground">Действителен до 2028 г.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" className="text-primary" size={24} />
                  Услуги врача
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold mb-2">Медицинские книжки</h3>
                    <p className="text-sm text-muted-foreground mb-2">Оформление и продление медкнижек</p>
                    <Link to="/services" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </Link>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold mb-2">Справка 302н</h3>
                    <p className="text-sm text-muted-foreground mb-2">Предварительные и периодические осмотры</p>
                    <Link to="/services" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </Link>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold mb-2">Профосмотры</h3>
                    <p className="text-sm text-muted-foreground">Для работников различных отраслей</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold mb-2">Диспансеризация</h3>
                    <p className="text-sm text-muted-foreground">Комплексное медицинское обследование</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Записаться на приём</h3>
                    <p className="text-muted-foreground mb-4">
                      Запишитесь на приём к Петрову Дмитрию Александровичу для прохождения профосмотра
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="tel:+74951234567" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Icon name="Phone" size={20} />
                      +7 (495) 123-45-67
                    </a>
                    <Link 
                      to="/contacts" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Icon name="MapPin" size={20} />
                      Контакты клиники
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 py-12 mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Hospital" className="text-primary" size={24} />
                ИзиМед
              </h3>
              <p className="text-muted-foreground text-sm">
                Медицинский центр по оформлению справок и медкнижек в Москве
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  info@izimed.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm">
                <Link to="/certificate-086" className="block text-muted-foreground hover:text-primary transition-colors">
                  Справка 086/у
                </Link>
                <Link to="/certificate-095" className="block text-muted-foreground hover:text-primary transition-colors">
                  Справка 095/у
                </Link>
                <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                  Все услуги
                </Link>
                <Link to="/licenses" className="block text-muted-foreground hover:text-primary transition-colors">
                  Лицензии и сертификаты
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ИзиМед. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorPetrov;
