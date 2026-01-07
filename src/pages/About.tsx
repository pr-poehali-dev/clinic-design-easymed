import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";

const doctors = [
  {
    name: "Смирнова Елена Викторовна",
    specialization: "Терапевт, специалист по оформлению медицинских справок",
    experience: "15 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/bd37d2ed-a83e-4c31-b1e2-7e41be0dc61b.jpg"
  },
  {
    name: "Петров Дмитрий Александрович",
    specialization: "Врач общей практики, эксперт по профосмотрам",
    experience: "20 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/6edd5cb2-dd33-4113-89c8-359425ffb2a8.jpg"
  },
  {
    name: "Козлова Марина Сергеевна",
    specialization: "Терапевт, специалист по медкнижкам",
    experience: "12 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/c1bd9252-6ee4-4e1a-a2bd-16cbeccd4cc2.jpg"
  },
  {
    name: "Соколов Андрей Игоревич",
    specialization: "Врач-терапевт, специалист по справкам для студентов",
    experience: "10 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/8d19b907-f82f-4b80-8b03-3a5eb5ab8ece.jpg"
  },
  {
    name: "Волкова Ольга Николаевна",
    specialization: "Терапевт, эксперт по оформлению справок для работников",
    experience: "18 лет опыта",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/5e0b9537-2416-4652-b971-2ded447d09ae.jpg"
  }
];

const About = () => {
  useEffect(() => {
    document.title = "О клинике ИзиМед - медицинский центр в Москве";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "О медицинском центре ИзиМед в Москве: наша команда врачей, услуги по оформлению справок и медкнижек, преимущества работы с нами.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "О медицинском центре ИзиМед в Москве: наша команда врачей, услуги по оформлению справок и медкнижек, преимущества работы с нами.";
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
            <span className="text-muted-foreground">О клинике</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">О клинике ИзиМед</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Медицинский центр с многолетним опытом работы
          </p>

          <section className="mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
                    <p className="text-muted-foreground mb-4">
                      Медицинский центр "ИзиМед" работает с 2015 года и специализируется на оформлении медицинских справок 
                      и медицинских книжек для жителей Москвы и Московской области. Наша цель - сделать процесс получения 
                      медицинских документов максимально простым, быстрым и комфортным для каждого клиента.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Мы понимаем, что время наших пациентов ценно, поэтому разработали упрощенную систему оформления 
                      документов. Все справки выдаются на официальных бланках установленного образца с печатями и 
                      подписями врачей, имеющих действующие лицензии.
                    </p>
                    <p className="text-muted-foreground">
                      За годы работы мы помогли тысячам студентов, работников и родителей быстро получить необходимые 
                      медицинские документы. Наши врачи имеют высокую квалификацию и большой опыт работы в сфере 
                      профилактической медицины.
                    </p>
                  </div>
                  <div className="md:w-96 flex-shrink-0">
                    <img 
                      src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/92a2e18b-b6a6-4bc0-ac6e-54775404b458.jpg" 
                      alt="Команда врачей ИзиМед" 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={28} />
                  Наши преимущества
                </CardTitle>
                <CardDescription>Почему выбирают нашу клинику</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Быстрое оформление</h3>
                      <p className="text-sm text-muted-foreground">
                        Большинство справок готовы за 30 минут - 1 день. Не нужно тратить время на очереди и многократные визиты.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="BadgeCheck" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">100% официально</h3>
                      <p className="text-sm text-muted-foreground">
                        Все документы на бланках установленного образца с печатями врачей и клиники. Принимаются везде.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Опытные врачи</h3>
                      <p className="text-sm text-muted-foreground">
                        Наша команда состоит из квалифицированных специалистов с многолетним стажем работы.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Доставка по Москве</h3>
                      <p className="text-sm text-muted-foreground">
                        Готовые справки можем доставить курьером в любую точку Москвы в удобное для вас время.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Wallet" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Честные цены</h3>
                      <p className="text-sm text-muted-foreground">
                        Прозрачное ценообразование без скрытых платежей. Цена известна заранее и не меняется.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Конфиденциальность</h3>
                      <p className="text-sm text-muted-foreground">
                        Гарантируем полную конфиденциальность ваших персональных и медицинских данных.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={28} />
                  Наши врачи
                </CardTitle>
                <CardDescription>Команда квалифицированных специалистов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {doctors.map((doctor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {doctor.specialization}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Briefcase" size={16} className="text-primary" />
                          {doctor.experience}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="FileText" className="text-primary" size={28} />
                  Наши услуги
                </CardTitle>
                <CardDescription>Полный спектр медицинских документов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Icon name="GraduationCap" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Справка 086/у</h4>
                      <p className="text-sm text-muted-foreground">Для поступления в учебные заведения</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Icon name="FileText" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Справка 095/у</h4>
                      <p className="text-sm text-muted-foreground">Для освобождения от работы или учебы</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Icon name="Waves" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Справка 003-В/у</h4>
                      <p className="text-sm text-muted-foreground">Для бассейна и спортивных секций</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Icon name="BookOpen" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Медицинская книжка</h4>
                      <p className="text-sm text-muted-foreground">Личная медкнижка для работы</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Icon name="Briefcase" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Справка 302н</h4>
                      <p className="text-sm text-muted-foreground">Для допуска к работе</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Icon name="Shield" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Справка на оружие</h4>
                      <p className="text-sm text-muted-foreground">Для получения лицензии</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                    Посмотреть все услуги
                    <Icon name="ArrowRight" size={18} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={28} />
                  Где мы находимся
                </CardTitle>
                <CardDescription>Удобное расположение в Москве</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Контактная информация</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Адрес</p>
                          <p className="text-sm text-muted-foreground">Москва, Енисейская ул., 2</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Phone" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Телефон</p>
                          <a href="tel:+74999999999" className="text-sm text-primary hover:text-primary/80">
                            +7 (499) 999-99-99
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Clock" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Режим работы</p>
                          <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                          <p className="text-sm text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Mail" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:info@izimed.ru" className="text-sm text-primary hover:text-primary/80">
                            info@izimed.ru
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-muted h-64">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c7c0c7c0c7c0c7c0c7c0c7c0c7c0c7c&amp;source=constructor"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Карта расположения клиники ИзиМед"
                      className="border-0"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer className="mt-20 border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/Screenshot at Dec 22 23-50-53.png" 
                  alt="ИзиМед - Справки и медкнижки" 
                  className="h-12 w-auto"
                />
                <div className="flex flex-col gap-0.5">
                  <div className="text-2xl font-serif font-bold leading-none">
                    <span style={{ color: '#7CB5B1' }}>Изи</span>
                    <span style={{ color: '#427D98' }}>Мед</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Справки и медкнижки</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Медицинские справки и медкнижки быстро и надежно
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={18} className="text-primary" />
                Контакты
              </h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+74999999999" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (499) 999-99-99
                </a>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  Москва, Енисейская ул., 2
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="FileText" size={18} className="text-primary" />
                Услуги
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/certificate-086" className="hover:text-primary transition-colors">
                    Справка 086/у
                  </Link>
                </li>
                <li>
                  <Link to="/certificate-095" className="hover:text-primary transition-colors">
                    Справка 095/у
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Справка 003-В/у
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Медицинская книжка
                  </a>
                </li>
                <li>
                  <Link to="/licenses" className="hover:text-primary transition-colors">
                    Лицензии и сертификаты
                  </Link>
                </li>
              </ul>
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

export default About;