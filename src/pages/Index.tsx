import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const medicalCertificates = [
  {
    id: 1,
    title: "Справка 086/у",
    description: "Для поступления в ВУЗ, колледж, техникум",
    price: "от 1500 ₽",
    duration: "1 день",
    icon: "GraduationCap"
  },
  {
    id: 2,
    title: "Справка 003-В/у",
    description: "Для бассейна, фитнес-клуба, спортивных секций",
    price: "от 800 ₽",
    duration: "30 минут",
    icon: "Waves"
  },
  {
    id: 3,
    title: "Справка 095/у",
    description: "Для освобождения от учебы или работы",
    price: "от 700 ₽",
    duration: "30 минут",
    icon: "FileText"
  },
  {
    id: 4,
    title: "Справка на оружие",
    description: "Для получения лицензии на оружие",
    price: "от 3500 ₽",
    duration: "2-3 дня",
    icon: "Shield"
  },
  {
    id: 5,
    title: "Медкнижка",
    description: "Личная медицинская книжка для работы",
    price: "от 2500 ₽",
    duration: "1-2 дня",
    icon: "BookOpen"
  },
  {
    id: 6,
    title: "Справка 302н",
    description: "Для допуска к работе (предварительный осмотр)",
    price: "от 2000 ₽",
    duration: "1 день",
    icon: "Briefcase"
  }
];

const advantages = [
  {
    icon: "Clock",
    title: "Быстрое оформление",
    description: "Оформляем документы от 30 минут до 3 дней"
  },
  {
    icon: "BadgeCheck",
    title: "Официальные документы",
    description: "Все справки заверены печатями и подписями врачей"
  },
  {
    icon: "MapPin",
    title: "Удобное расположение",
    description: "Находимся в центре Москвы с удобной транспортной доступностью"
  },
  {
    icon: "Wallet",
    title: "Доступные цены",
    description: "Прозрачное ценообразование без скрытых платежей"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-end gap-2">
            <img 
              src="https://cdn.poehali.dev/files/Screenshot at Dec 22 23-50-53.png" 
              alt="ИзиМед - Справки и медкнижки" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col gap-0.5 pb-1">
              <div className="text-3xl font-serif font-bold leading-none">
                <span style={{ color: '#7CB5B1' }}>Изи</span>
                <span style={{ color: '#427D98' }}>Мед</span>
              </div>
              <p className="text-xs text-muted-foreground">Справки и медкнижки</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
                Справки
                <Icon name="ChevronDown" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/certificate-086" className="cursor-pointer">
                    086/у
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">О клинике</Link>
            <Link to="/contacts" className="text-foreground/80 hover:text-primary transition-colors">Контакты</Link>
          </nav>
          <div className="hidden md:flex flex-col items-end gap-1">
            <a href="tel:+74999999999" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
              <Icon name="Phone" size={18} />
              +7 (499) 999-99-99
            </a>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Icon name="MapPin" size={14} />
              Москва, Енисейская ул., 2
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/92a2e18b-b6a6-4bc0-ac6e-54775404b458.jpg" 
            alt="Команда врачей ИзиМед" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Медицинские справки и медкнижки за 1 день
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Оформление всех видов медицинских справок в Москве без очередей и с доставкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Оформить справку
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (499) 999-99-99
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-sm animate-scale-in hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр медицинских документов с официальными печатями и подписями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalCertificates.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                    <Icon name={cert.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">{cert.duration}</span>
                    </div>
                    <span className="text-lg font-semibold text-primary">{cert.price}</span>
                  </div>
                  {cert.id === 1 ? (
                    <Link to="/certificate-086">
                      <Button className="w-full">
                        Заказать справку
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full">
                      Заказать справку
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">О клинике ИзиМед</h2>
              <p className="text-xl text-muted-foreground">
                Современный медицинский центр в Москве
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Building2" className="text-primary" />
                    Наша миссия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Мы делаем получение медицинских документов простым и удобным. Никаких очередей, сложных процедур 
                    и траты времени — только профессиональный подход и качественный сервис.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-primary" />
                    Наши преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Все медицинские документы оформляются в соответствии с законодательством РФ. 
                    Работаем с лицензированными врачами и гарантируем полную юридическую чистоту документов.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle>Наши контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@izimed.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle>Обратная связь</CardTitle>
                  <CardDescription>Оставьте заявку и мы перезвоним вам</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваш вопрос или комментарий" rows={4} />
                    </div>
                    <Button className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Icon name="Heart" className="text-primary" size={24} />
                <Icon name="Sparkles" className="text-primary absolute -top-0.5 -right-0.5" size={10} />
              </div>
              <span className="logo-text font-semibold">ИзиМед</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 ИзиМед. Все права защищены. Медицинские услуги в Москве
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;