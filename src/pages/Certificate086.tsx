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
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Icon name="Heart" className="text-primary" size={32} />
              <Icon name="Sparkles" className="text-primary absolute -top-1 -right-1" size={14} />
            </div>
            <span className="logo-text text-2xl text-primary">ИзиМед</span>
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
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1 mb-6">
            <Icon name="ChevronLeft" size={16} />
            Все услуги
          </Link>
          
          <h1 className="text-4xl font-bold mb-2">Справка 086/у</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Для поступления в ВУЗ, колледж, техникум
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" className="text-primary" size={24} />
                Информация о справке
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="Wallet" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Цена</p>
                    <p className="text-muted-foreground">1750 ₽</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Срок оформления</p>
                    <p className="text-muted-foreground">1 день</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileCheck" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Действительность</p>
                    <p className="text-muted-foreground">6 месяцев с даты выдачи</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Оформить заказ</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      rows={4}
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

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Образец справки 086/у</CardTitle>
                <CardDescription>Официальный бланк медицинской справки</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/1be29c7c-404a-448d-b24c-368231e1edac.jpg" 
                  alt="Образец справки 086/у" 
                  className="w-full max-w-md mx-auto rounded-lg border shadow-sm"
                />
              </CardContent>
            </Card>
          </div>
        </div>

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
                  <AccordionTrigger className="text-left">Для чего нужна справка 086/у?</AccordionTrigger>
                  <AccordionContent>
                    Справка 086/у требуется при поступлении в учебные заведения (ВУЗы, колледжи, техникумы) и подтверждает отсутствие медицинских противопоказаний к обучению.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Какие документы нужны для оформления?</AccordionTrigger>
                  <AccordionContent>
                    Для оформления справки понадобится паспорт и прививочный сертификат (если есть). В некоторых случаях может потребоваться фото 3x4.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Сколько действует справка 086/у?</AccordionTrigger>
                  <AccordionContent>
                    Справка действительна в течение 6 месяцев с даты выдачи. После истечения срока потребуется оформление новой справки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Можно ли оформить справку за один день?</AccordionTrigger>
                  <AccordionContent>
                    Да, в нашей клинике справка 086/у оформляется за 1 рабочий день. Вы можете оставить заявку онлайн и забрать готовый документ на следующий день.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Будет ли справка официальной?</AccordionTrigger>
                  <AccordionContent>
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