import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";
import { OrderForm } from "@/components/certificate/OrderForm";

const Certificate095 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    phone: "",
    comment: ""
  });

  useEffect(() => {
    document.title = "Купить справку 095/у в Москве недорого с доставкой в клинике ИзиМед";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Купить справку 095/у в Москве без прохождения врачей и сдачи анализов с доставкой на сайте клиники \"ИзиМед\".");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Купить справку 095/у в Москве без прохождения врачей и сдачи анализов с доставкой на сайте клиники \"ИзиМед\".";
      document.head.appendChild(meta);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <span className="text-muted-foreground">Справка 095/у</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">Справка 095/у</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Для освобождения от учебы или работы по болезни
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" className="text-primary" size={24} />
                Информация о справке 095/у
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="Wallet" className="text-primary mt-1" size={40} />
                  <div>
                    <p className="font-semibold">Цена</p>
                    <p className="text-muted-foreground">700 ₽</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={40} />
                  <div>
                    <p className="font-semibold">Срок оформления</p>
                    <p className="text-muted-foreground">30 минут</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileCheck" className="text-primary mt-1" size={40} />
                  <div>
                    <p className="font-semibold">Срок действия</p>
                    <p className="text-muted-foreground">Указывается период болезни</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <OrderForm 
              formData={formData}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>Образец справки 095/у</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://cdn.poehali.dev/files/spravka095.jpg" 
                  alt="Образец справки 095/у о временной нетрудоспособности" 
                  className="w-full h-auto rounded-lg border"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Users" className="text-primary" size={28} />
                Кому нужна справка 095/у?
              </CardTitle>
              <CardDescription>Категории людей, для которых справка обязательна</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="GraduationCap" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Студенты</h3>
                  <p className="text-sm text-muted-foreground">Для освобождения от занятий в ВУЗе или колледже</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="School" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Школьники</h3>
                  <p className="text-sm text-muted-foreground">Для пропусков занятий в школе по болезни</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="Briefcase" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Работающие</h3>
                  <p className="text-sm text-muted-foreground">Для предоставления по месту работы</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="Baby" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Дети в детский сад</h3>
                  <p className="text-sm text-muted-foreground">После болезни для возвращения в детский сад</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="ListChecks" className="text-primary" size={28} />
                Как оформить справку 095/у
              </CardTitle>
              <CardDescription>Простой процесс получения справки за 3 шага</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                    <span className="text-5xl">✍️</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Оставляете заявку</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Заполняете форму на сайте с вашими данными и контактной информацией
                  </p>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
                    <span className="text-5xl">📞</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Согласуете время и место</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Наши менеджеры связываются с вами и договариваются о доставке справки
                  </p>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4">
                    <span className="text-5xl">🚚</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Получаете справку</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Курьер доставляет готовую официальную справку в удобное для вас место
                  </p>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="MessageSquare" className="text-primary" size={28} />
                Отзывы о справке 095/у
              </CardTitle>
              <CardDescription>Реальные отзывы наших клиентов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="User" className="text-primary" size={20} />
                      <p className="font-semibold">Анна, студентка</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Нужна была справка в университет после болезни. Оформила через ИзиМед буквально за час. Всё официально, в деканате приняли без вопросов. Очень удобный сервис, рекомендую!
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="User" className="text-primary" size={20} />
                      <p className="font-semibold">Дмитрий</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Понадобилась справка для работы. Позвонил в клинику утром, к обеду уже забрал готовую справку. Всё чётко оформлено, с печатями и подписями. Цена адекватная, сервис на высоте!
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="User" className="text-primary" size={20} />
                      <p className="font-semibold">Екатерина, мама</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ребенок переболел, нужна была справка в детский сад. Оформила онлайн, привезли курьером. Всё официально, воспитатели приняли без проблем. Очень удобно, что не нужно ехать в поликлинику!
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="HelpCircle" className="text-primary" size={28} />
                Часто задаваемые вопросы о справке 095/у
              </CardTitle>
              <CardDescription>Ответы на популярные вопросы наших клиентов</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="FileText" size={18} />
                      Что такое справка 095/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Справка 095/у — это медицинская справка о временной нетрудоспособности студента, учащегося или ребенка по причине болезни. Она подтверждает факт заболевания и освобождает от учебы или работы на указанный период.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="Calendar" size={18} />
                      На какой срок выдается справка 095/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Срок действия справки 095/у определяется в зависимости от заболевания и может составлять от 1 дня до нескольких недель. Период болезни указывается в самой справке.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="FolderOpen" size={18} />
                      Какие документы нужны для оформления справки 095/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Для оформления справки 095/у необходим только паспорт (для взрослых) или свидетельство о рождении (для детей). Никаких дополнительных документов не требуется.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="Clock" size={18} />
                      За какой срок можно получить справку 095/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    В нашей клинике справку 095/у можно получить за 30 минут. Это одна из самых быстрых справок, которую мы оформляем.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="Truck" size={18} />
                      Можно ли получить справку 095/у с доставкой?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Да, мы предлагаем услугу доставки готовой справки курьером в удобное для вас место по Москве. Стоимость доставки обсуждается с менеджером при оформлении заказа.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="BadgeCheck" size={18} />
                      Официальная ли эта справка?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Да, все справки, которые мы выдаём, полностью официальные и заверены печатями и подписями врачей. Они принимаются во всех учебных заведениях и на работе без каких-либо проблем.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Справка 095/у в Москве - быстро и надежно</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Справка 095/у является документом, подтверждающим временную нетрудоспособность по причине болезни. 
                    Наша клиника ИзиМед предлагает услуги по оформлению справки 095/у в Москве за 30 минут.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Мы понимаем, насколько важно получить справку быстро. Поэтому мы предлагаем упрощенную процедуру 
                    оформления без необходимости многократного посещения врачей. Все справки выдаются на официальных 
                    бланках формы 095/у с печатями и подписями врачей.
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Почему выбирают нас?</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Быстрое оформление - от 30 минут</li>
                    <li>Официальные документы с печатями</li>
                    <li>Доставка по Москве</li>
                    <li>Низкие цены</li>
                    <li>Конфиденциальность</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Справка 095/у содержит информацию о периоде болезни, диагнозе и рекомендациях врача. 
                    Документ необходим для подтверждения уважительной причины отсутствия на учебе или работе.
                  </p>
                </div>
                <div className="md:w-80 flex-shrink-0">
                  <img 
                    src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/09fc766c-0d26-4111-b9f6-951520c4c2b2.jpg" 
                    alt="Врачи клиники ИзиМед - консультация специалистов" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
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

export default Certificate095;
