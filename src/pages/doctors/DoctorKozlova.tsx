import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";
import { Badge } from "@/components/ui/badge";

const DoctorKozlova = () => {
  useEffect(() => {
    document.title = "Козлова Марина Сергеевна - врач-терапевт ИзиМед";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Козлова Марина Сергеевна - терапевт, специалист по медицинским книжкам. 12 лет опыта работы в клинике ИзиМед.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Козлова Марина Сергеевна - терапевт, специалист по медицинским книжкам. 12 лет опыта работы в клинике ИзиМед.";
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
            <span className="text-muted-foreground">Козлова М.С.</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <img 
                src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/4c49ae5f-4815-4c7c-b921-01d11955244a.jpg" 
                alt="Козлова Марина Сергеевна" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-2">Козлова Марина Сергеевна</h1>
              <p className="text-xl text-primary mb-4">Врач-терапевт</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">12 лет опыта</Badge>
                <Badge variant="outline">Медицинские книжки</Badge>
                <Badge variant="outline">Терапия</Badge>
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
                      <span className="font-medium">1987</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Стаж работы:</span>
                      <span className="font-medium">12 лет</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Специализация:</span>
                      <span className="font-medium">Терапия, санитарная медицина</span>
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
                    <p className="font-semibold text-lg">Московский государственный медико-стоматологический университет им. А.И. Евдокимова</p>
                    <p className="text-muted-foreground">Лечебный факультет, специальность "Лечебное дело"</p>
                    <p className="text-sm text-muted-foreground">2005-2011 гг.</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Интернатура по специальности "Терапия"</p>
                    <p className="text-muted-foreground">ГКБ №15 им. О.М. Филатова</p>
                    <p className="text-sm text-muted-foreground">2011-2012 гг.</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Профессиональная переподготовка "Санитарно-гигиеническое дело"</p>
                    <p className="text-muted-foreground">РМАПО</p>
                    <p className="text-sm text-muted-foreground">2016 г.</p>
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
                    <p className="text-muted-foreground">Врач-терапевт, специалист по оформлению медицинских книжек</p>
                    <p className="text-sm text-muted-foreground">2015 г. - настоящее время (9 лет)</p>
                    <ul className="mt-2 ml-6 list-disc text-sm text-muted-foreground space-y-1">
                      <li>Оформление личных медицинских книжек</li>
                      <li>Проведение медосмотров для работников общепита, торговли, образования</li>
                      <li>Терапевтический приём</li>
                      <li>Более 6000 оформленных медкнижек</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">Центр гигиены и эпидемиологии</p>
                    <p className="text-muted-foreground">Врач по санитарной медицине</p>
                    <p className="text-sm text-muted-foreground">2012-2015 гг. (3 года)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  Повышение квалификации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-medium">Современные требования к оформлению медицинских книжек</p>
                      <p className="text-sm text-muted-foreground">Роспотребнадзор, 2023 г.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-medium">Гигиеническое обучение и воспитание населения</p>
                      <p className="text-sm text-muted-foreground">РМАПО, 2022 г.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-medium">Актуальные вопросы терапии</p>
                      <p className="text-sm text-muted-foreground">МГМСУ им. А.И. Евдокимова, 2021 г.</p>
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
                    <h3 className="font-semibold mb-2">Медицинская книжка</h3>
                    <p className="text-sm text-muted-foreground mb-2">Оформление для работников общепита, торговли</p>
                    <Link to="/services" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </Link>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold mb-2">Медосмотр</h3>
                    <p className="text-sm text-muted-foreground mb-2">Профилактический осмотр для медкнижки</p>
                    <Link to="/services" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </Link>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold mb-2">Санитарный минимум</h3>
                    <p className="text-sm text-muted-foreground">Гигиеническое обучение и аттестация</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold mb-2">Консультации</h3>
                    <p className="text-sm text-muted-foreground">По вопросам здоровья и санитарных норм</p>
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
                      Запишитесь на приём к Козловой Марине Сергеевне для оформления медицинской книжки
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

export default DoctorKozlova;
