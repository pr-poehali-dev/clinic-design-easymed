import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Certificate086 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    phone: "",
    comment: ""
  });

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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/ca62bbd8-d26f-4ec7-b295-5739d1cc2e30.jpg" 
              alt="ИзиМед - Справки и медкнижки" 
              className="h-12 w-auto"
            />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
          </Link>
        </div>
      </header>

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

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" className="text-primary" size={24} />
                Информация о справке 086/у
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="Wallet" className="text-primary mt-1" size={40} />
                  <div>
                    <p className="font-semibold">Цена</p>
                    <p className="text-muted-foreground">1750 ₽</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={40} />
                  <div>
                    <p className="font-semibold">Срок оформления</p>
                    <p className="text-muted-foreground">1 день</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileCheck" className="text-primary mt-1" size={40} />
                  <div>
                    <p className="font-semibold">Срок действия</p>
                    <p className="text-muted-foreground">6 месяцев с даты выдачи</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Оформить заказ</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">ФИО *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Иванов Иван Иванович"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Дата рождения *</Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Номер телефона *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий к заказу</Label>
                    <Textarea
                      id="comment"
                      name="comment"
                      placeholder="Укажите дополнительные пожелания или вопросы"
                      value={formData.comment}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                    size="lg"
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>Образец справки 086/у</CardTitle>
                <CardDescription>Официальный бланк медицинской справки</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-4">
                <img 
                  src="https://cdn.poehali.dev/files/spravka086u.jpg" 
                  alt="Образец справки 086/у" 
                  className="w-full h-auto rounded-lg border shadow-sm"
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
                      <p className="font-semibold">Дмитрий, практикант</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Перед практикой понадобилась медсправка. Обратился в ИзиМед, всё сделали максимально оперативно. Заполнил форму на сайте, приехал за справкой на следующий день. Документ официальный, все подписи и печати на месте. Очень доволен сервисом!
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
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="HelpCircle" className="text-primary" size={28} />
                Часто задаваемые вопросы
              </CardTitle>
              <CardDescription>Ответы на популярные вопросы о справке 086/у</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-blue-600 font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="FileText" size={20} />
                      <span>Для чего нужна справка 086/у?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Справка 086/у требуется при поступлении в учебные заведения (ВУЗы, колледжи, техникумы) и подтверждает отсутствие медицинских противопоказаний к обучению.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-blue-600 font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="Clipboard" size={20} />
                      <span>Какие документы нужны для оформления?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Для оформления справки понадобится паспорт и прививочный сертификат (если есть). В некоторых случаях может потребоваться фото 3x4.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-blue-600 font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={20} />
                      <span>Сколько действует справка 086/у?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Справка действительна в течение 6 месяцев с даты выдачи. После истечения срока потребуется оформление новой справки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-blue-600 font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={20} />
                      <span>Можно ли оформить справку за один день?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Да, в нашей клинике справка 086/у оформляется за 1 рабочий день. Вы можете оставить заявку онлайн и забрать готовый документ на следующий день.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-blue-600 font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="ShieldCheck" size={20} />
                      <span>Будет ли справка официальной?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Да, справка полностью официальная, заверяется печатями и подписями лицензированных врачей. Принимается всеми учебными заведениями РФ.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Справка 086/у в Москве — быстро и официально</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Медицинская справка формы 086/у является обязательным документом для всех абитуриентов при поступлении в высшие и средние специальные учебные заведения. Документ подтверждает отсутствие противопоказаний к обучению и содержит результаты осмотров специалистов. В нашей клинике вы можете оформить справку за один день с официальными печатями и подписями врачей.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/0031088e-05eb-4645-90a3-44df5591088b.jpg"
                    alt="Оформление справки 086/у в медицинском центре"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        </div>
      </main>

      <footer className="border-t py-8 bg-muted/30 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Icon name="Heart" className="text-primary" size={24} />
                <Icon name="Sparkles" className="text-primary absolute -top-0.5 -right-0.5" size={10} />
              </div>
              <span className="logo-text font-semibold">ИзиМед</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 ИзиМед. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Certificate086;