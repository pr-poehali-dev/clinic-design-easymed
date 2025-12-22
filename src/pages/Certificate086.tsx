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
                  <AccordionTrigger>Что такое справка 086/у?</AccordionTrigger>
                  <AccordionContent>
                    Справка 086/у — это медицинская справка установленной формы, которая требуется при поступлении в высшие и средние специальные учебные заведения. Она подтверждает, что студент здоров и может обучаться в выбранном учебном заведении.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Сколько действует справка 086/у?</AccordionTrigger>
                  <AccordionContent>
                    Справка 086/у действует в течение 6 месяцев с момента выдачи. После истечения этого срока необходимо оформлять новую справку.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Какие документы нужны для оформления справки 086/у?</AccordionTrigger>
                  <AccordionContent>
                    Для оформления справки 086/у необходим только паспорт. Если есть медицинская карта или результаты недавних анализов, можно их предоставить, но это не обязательно.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>За какой срок можно получить справку 086/у?</AccordionTrigger>
                  <AccordionContent>
                    В нашей клинике справку 086/у можно получить за 1 рабочий день. Если вам нужно срочно — обратитесь к нашим менеджерам, постараемся оформить быстрее.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Можно ли получить справку 086/у с доставкой?</AccordionTrigger>
                  <AccordionContent>
                    Да, мы предлагаем услугу доставки готовой справки курьером в удобное для вас место по Москве. Стоимость доставки обсуждается с менеджером при оформлении заказа.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Официальная ли эта справка?</AccordionTrigger>
                  <AccordionContent>
                    Да, все справки, которые мы выдаём, полностью официальные и заверены печатями и подписями врачей. Они принимаются во всех учебных заведениях без каких-либо проблем.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
        </div>
      </main>
    </div>
  );
};

export default Certificate086;
