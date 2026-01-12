import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";

const medicalCertificates = [
  {
    id: 1,
    title: "Справка 086/у",
    description: "Для поступления в ВУЗ, колледж, техникум",
    price: "от 1500 ₽",
    duration: "1 день",
    icon: "GraduationCap",
    link: "/certificate-086",
    details: [
      "Обязательна для всех абитуриентов",
      "Полный медицинский осмотр",
      "Результаты анализов и прививок",
      "Заключение врачей-специалистов"
    ]
  },
  {
    id: 2,
    title: "Справка 095/у",
    description: "Для освобождения от учебы или работы",
    price: "от 700 ₽",
    duration: "30 минут",
    icon: "FileText",
    link: "/certificate-095",
    details: [
      "Подтверждение временной нетрудоспособности",
      "Для студентов и школьников",
      "Для предоставления работодателю",
      "Освобождение от занятий"
    ]
  },
  {
    id: 3,
    title: "Справка 003-В/у",
    description: "Для бассейна, фитнес-клуба, спортивных секций",
    price: "от 800 ₽",
    duration: "30 минут",
    icon: "Waves",
    link: "#",
    details: [
      "Для посещения бассейна",
      "Для фитнес-клубов",
      "Для спортивных секций",
      "Допуск к физическим нагрузкам"
    ]
  },
  {
    id: 4,
    title: "Справка на оружие",
    description: "Для получения лицензии на оружие",
    price: "от 3500 ₽",
    duration: "2-3 дня",
    icon: "Shield",
    link: "#",
    details: [
      "Психиатрическое освидетельствование",
      "Наркологическое освидетельствование",
      "Терапевтический осмотр",
      "Офтальмологическое обследование"
    ]
  },
  {
    id: 5,
    title: "Медицинская книжка",
    description: "Личная медицинская книжка для работы",
    price: "от 2500 ₽",
    duration: "1-2 дня",
    icon: "BookOpen",
    link: "#",
    details: [
      "Обязательна для многих профессий",
      "Медицинские осмотры",
      "Лабораторные анализы",
      "Санитарный минимум"
    ]
  },
  {
    id: 6,
    title: "Справка 302н",
    description: "Для допуска к работе (предварительный осмотр)",
    price: "от 2000 ₽",
    duration: "1 день",
    icon: "Briefcase",
    link: "#",
    details: [
      "Предварительный медосмотр",
      "Периодический медосмотр",
      "Допуск к работе",
      "Заключение врачебной комиссии"
    ]
  },
  {
    id: 7,
    title: "Справка в ГИБДД",
    description: "Для получения или замены водительских прав",
    price: "от 1800 ₽",
    duration: "1 день",
    icon: "Car",
    link: "#",
    details: [
      "Осмотр терапевта",
      "Офтальмологическое обследование",
      "Психиатрическое освидетельствование",
      "Наркологическое освидетельствование"
    ]
  },
  {
    id: 8,
    title: "Справка для визы",
    description: "Медицинская справка для оформления визы",
    price: "от 1200 ₽",
    duration: "1 день",
    icon: "Plane",
    link: "#",
    details: [
      "Для шенгенской визы",
      "Для рабочей визы",
      "Результаты анализов",
      "Заключение о состоянии здоровья"
    ]
  }
];

const Services = () => {
  useEffect(() => {
    document.title = "Услуги клиники ИзиМед - медицинские справки и медкнижки в Москве";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Полный перечень услуг медицинского центра ИзиМед: справки 086/у, 095/у, 003-В/у, медкнижки, справки на оружие и для ГИБДД. Быстрое оформление в Москве.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Полный перечень услуг медицинского центра ИзиМед: справки 086/у, 095/у, 003-В/у, медкнижки, справки на оружие и для ГИБДД. Быстрое оформление в Москве.";
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
            <span className="text-muted-foreground">Услуги</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">Наши услуги</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Полный спектр медицинских справок и медицинских книжек
          </p>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground">
                  Медицинский центр "ИзиМед" предлагает широкий спектр услуг по оформлению медицинских справок 
                  и медицинских книжек. Мы работаем быстро, качественно и с полным соблюдением всех требований 
                  законодательства. Все наши документы имеют юридическую силу и принимаются во всех учреждениях 
                  и организациях.
                </p>
              </div>
            </CardContent>
          </Card>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Медицинские справки и документы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalCertificates.map((cert) => (
                <Card 
                  key={cert.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => {
                    if (cert.link !== "#") {
                      window.location.href = cert.link;
                    }
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon name={cert.icon as any} className="text-primary" size={32} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {cert.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-primary">
                        {cert.price}
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {cert.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {cert.link !== "#" && (
                        <Link 
                          to={cert.link}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm mt-4"
                        >
                          Подробнее
                          <Icon name="ArrowRight" size={16} />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Типы медицинских справок</CardTitle>
                <CardDescription>Подробная информация о каждом виде документов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Briefcase" className="text-primary" size={20} />
                      Справки для работы
                    </h3>
                    <p className="text-muted-foreground">
                      Медицинские справки для трудоустройства включают справку 302н для предварительного и периодического медосмотра, 
                      медицинские книжки для работников торговли, общепита, образования и других сфер. Оформление происходит 
                      после прохождения комплексного обследования у специалистов и сдачи необходимых анализов.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Dumbbell" className="text-primary" size={20} />
                      Справки для спорта
                    </h3>
                    <p className="text-muted-foreground">
                      Справка 003-В/у требуется для посещения бассейна, фитнес-клубов, спортивных секций и тренажерных залов. 
                      Документ подтверждает отсутствие противопоказаний к физическим нагрузкам. Включает осмотр терапевта 
                      и необходимые анализы для допуска к занятиям спортом.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="GraduationCap" className="text-primary" size={20} />
                      Справки для учебы
                    </h3>
                    <p className="text-muted-foreground">
                      Справка 086/у обязательна при поступлении в университет, колледж или техникум. Включает полный медицинский 
                      осмотр, результаты анализов, данные о прививках и заключения профильных специалистов. Справка 095/у 
                      используется для освобождения от занятий по болезни.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Car" className="text-primary" size={20} />
                      Справки для водителей
                    </h3>
                    <p className="text-muted-foreground">
                      Медицинская справка для ГИБДД необходима для получения, замены или восстановления водительских прав. 
                      Включает осмотр терапевта, офтальмолога, психиатра и нарколога. Срок действия справки — 12 месяцев. 
                      Оформляется в течение одного дня.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Building2" className="text-primary" size={20} />
                      Справки из диспансеров
                    </h3>
                    <p className="text-muted-foreground">
                      Справки из психоневрологического и наркологического диспансеров требуются для получения лицензии 
                      на оружие, водительских прав, трудоустройства на ряд должностей. Подтверждают отсутствие учета 
                      в специализированных медицинских учреждениях.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Syringe" className="text-primary" size={20} />
                      Справки о вакцинации
                    </h3>
                    <p className="text-muted-foreground">
                      Справка о прививках (форма 063/у) содержит информацию о проведенной вакцинации. Требуется для 
                      поступления в учебные заведения, устройства на работу, получения визы и других целей. 
                      Содержит данные о датах прививок и типах используемых вакцин.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Stethoscope" className="text-primary" size={20} />
                      Справки от врача
                    </h3>
                    <p className="text-muted-foreground">
                      Справка от врача по форме 095/у подтверждает факт обращения к врачу и временной нетрудоспособности. 
                      Используется для освобождения от работы или учебы. Не требует оплаты больничного листа и может быть 
                      оформлена для студентов и школьников.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="FileText" className="text-primary" size={20} />
                      Справки по форме
                    </h3>
                    <p className="text-muted-foreground">
                      Помимо стандартных форм, существуют специализированные медицинские справки: для получения 
                      путевки в санаторий, для визы, для усыновления, для опеки и другие. Каждая справка оформляется 
                      по утвержденному образцу с соблюдением всех требований законодательства.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="TestTube" className="text-primary" size={20} />
                      Анализы
                    </h3>
                    <p className="text-muted-foreground">
                      Лабораторные анализы являются неотъемлемой частью медицинского обследования. Включают общий 
                      анализ крови и мочи, биохимию, анализы на инфекции. Результаты готовы в течение 1-2 дней. 
                      Все анализы выполняются в сертифицированной лаборатории с соблюдением стандартов качества.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={28} />
                  Почему выбирают наши услуги
                </CardTitle>
                <CardDescription>Преимущества работы с ИзиМед</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Быстрое оформление</h3>
                      <p className="text-sm text-muted-foreground">
                        Большинство справок готовы за 30 минут - 1 день. Экономьте своё время.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="BadgeCheck" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">100% официально</h3>
                      <p className="text-sm text-muted-foreground">
                        Все документы на бланках установленного образца с печатями и подписями.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Wallet" className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Прозрачные цены</h3>
                      <p className="text-sm text-muted-foreground">
                        Честное ценообразование без скрытых платежей. Цена известна заранее.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Доставка</h3>
                      <p className="text-sm text-muted-foreground">
                        Курьерская доставка готовых документов по Москве в удобное время.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="ListChecks" className="text-primary" size={28} />
                  Как заказать справку
                </CardTitle>
                <CardDescription>Простой процесс в 3 шага</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Выберите справку</h3>
                    <p className="text-sm text-muted-foreground">
                      Определитесь с нужным документом и ознакомьтесь с ценой и сроками
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Оставьте заявку</h3>
                    <p className="text-sm text-muted-foreground">
                      Заполните форму на сайте или позвоните нам по телефону
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Получите документ</h3>
                    <p className="text-sm text-muted-foreground">
                      Заберите справку в клинике или закажите доставку курьером
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Нужна консультация?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Наши специалисты помогут подобрать нужную справку и ответят на все вопросы
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:+74999999999" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <Icon name="Phone" size={20} />
                    +7 (499) 999-99-99
                  </a>
                  <Link 
                    to="/contacts" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                  >
                    <Icon name="MapPin" size={20} />
                    Наши контакты
                  </Link>
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

export default Services;