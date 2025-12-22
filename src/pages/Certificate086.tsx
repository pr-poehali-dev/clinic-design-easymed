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
import { CertificateInfo } from "@/components/certificate/CertificateInfo";
import { OrderForm } from "@/components/certificate/OrderForm";
import { CertificateSample } from "@/components/certificate/CertificateSample";

const Certificate086 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    phone: "",
    comment: ""
  });

  useEffect(() => {
    document.title = "Купить справку 086/у в Москве недорого с доставкой в клинике ИзиМед";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Купить справку 086/у в Москве без прохождения врачей и сдачи анализов с доставкой на сайте клиники \"ИзиМед\".");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Купить справку 086/у в Москве без прохождения врачей и сдачи анализов с доставкой на сайте клиники \"ИзиМед\".";
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
            <span className="text-muted-foreground">Справка 086/у</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">Справка 086/у</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Для поступления в ВУЗ, колледж, техникум
          </p>

          <CertificateInfo />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <OrderForm 
              formData={formData}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <CertificateSample />
          </div>
        </div>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Users" className="text-primary" size={28} />
                Кому нужна справка 086/у?
              </CardTitle>
              <CardDescription>Категории людей, для которых справка обязательна</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="GraduationCap" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Абитуриенты ВУЗов</h3>
                  <p className="text-sm text-muted-foreground">При поступлении в университеты и институты</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="BookOpen" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Студенты колледжей</h3>
                  <p className="text-sm text-muted-foreground">Для поступления в средние специальные учебные заведения</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="School" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Учащиеся техникумов</h3>
                  <p className="text-sm text-muted-foreground">При зачислении в технические училища</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                  <Icon name="Briefcase" className="text-primary mb-3" size={48} />
                  <h3 className="font-semibold mb-2">Студенты на практику</h3>
                  <p className="text-sm text-muted-foreground">Перед началом производственной практики</p>
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
                Как оформить справку 086/у
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
                Отзывы о справке 086/у
              </CardTitle>
              <CardDescription>Реальные отзывы наших клиентов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="User" className="text-primary" size={20} />
                      <p className="font-semibold">Алексей, студент колледжа</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Нужна была справка для поступления в колледж, времени было мало. Оформил заявку онлайн, на следующий день получил готовую справку. Все печати на месте, в приёмной комиссии приняли без вопросов. Очень удобно и быстро!
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
                      <p className="font-semibold">Мария, студентка 1 курса</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Поступала в университет, требовалась справка 086/у. В клинике всё оформили за день, персонал вежливый, цена адекватная. Справка полностью официальная, деканат принял сразу. Рекомендую всем абитуриентам, экономит кучу времени!
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
                      <p className="font-semibold">Дмитрий, студент техникума</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Получил справку 086/у через ИзиМед перед практикой. Сделали всё чётко, быстро и без лишних вопросов. Заполнил форму вечером, к обеду следующего дня уже всё было готово. Цена честная, качество на высоте. Всем советую этот способ!
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
                Часто задаваемые вопросы о справке 086/у
              </CardTitle>
              <CardDescription>Ответы на популярные вопросы наших клиентов</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="FileText" size={18} />
                      Что такое справка 086/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Справка 086/у — это медицинская справка установленной формы, которая требуется при поступлении в высшие и средние специальные учебные заведения. Она подтверждает, что студент здоров и может обучаться в выбранном учебном заведении.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="Calendar" size={18} />
                      Сколько действует справка 086/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Справка 086/у действует в течение 6 месяцев с момента выдачи. После истечения этого срока необходимо оформлять новую справку.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="FolderOpen" size={18} />
                      Какие документы нужны для оформления справки 086/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    Для оформления справки 086/у необходим только паспорт. Если есть медицинская карта или результаты недавних анализов, можно их предоставить, но это не обязательно.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="Clock" size={18} />
                      За какой срок можно получить справку 086/у?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    В нашей клинике справку 086/у можно получить за 1 рабочий день. Если вам нужно срочно — обратитесь к нашим менеджерам, постараемся оформить быстрее.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-primary hover:text-primary/80">
                    <span className="flex items-center gap-2">
                      <Icon name="Truck" size={18} />
                      Можно ли получить справку 086/у с доставкой?
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
                    Да, все справки, которые мы выдаём, полностью официальные и заверены печатями и подписями врачей. Они принимаются во всех учебных заведениях без каких-либо проблем.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Справка 086/у в Москве - быстро и надежно</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/d8e4458d-b64d-423e-ba2f-f4ee46d4c9dc.jpg" 
                  alt="Образец справки 086/у с печатями и подписями врачей" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Справка 086/у является обязательным медицинским документом для поступления в высшие и средние учебные заведения. 
                Наша клиника ИзиМед предлагает услуги по оформлению справки 086/у в Москве с минимальными временными затратами.
              </p>
              <p className="text-muted-foreground mb-4">
                Мы понимаем, насколько важно получить справку быстро и качественно. Поэтому мы предлагаем упрощенную процедуру 
                оформления без необходимости многократного посещения врачей и сдачи анализов. Все справки выдаются на официальных 
                бланках с печатями и подписями врачей.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Почему выбирают нас?</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Быстрое оформление - от 1 дня</li>
                <li>Официальные документы с печатями</li>
                <li>Доставка по Москве</li>
                <li>Доступные цены</li>
                <li>Конфиденциальность</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Справка 086/у содержит информацию о состоянии здоровья абитуриента, результаты медицинских осмотров и анализов. 
                Документ необходим для подтверждения того, что студент может обучаться в выбранном учебном заведении без 
                ограничений по состоянию здоровья.
              </p>
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
                  <a href="#" className="hover:text-primary transition-colors">
                    Справка 003-В/у
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Справка 095/у
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

export default Certificate086;