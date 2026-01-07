import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты клиники ИзиМед в Москве - адрес, телефон, время работы";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Контакты медицинского центра ИзиМед в Москве: адрес, телефон, время работы. Оформление справок и медкнижек.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Контакты медицинского центра ИзиМед в Москве: адрес, телефон, время работы. Оформление справок и медкнижек.";
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
            <span className="text-muted-foreground">Контакты</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">Контакты</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Свяжитесь с нами удобным способом
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" size={24} />
                  Телефон
                </CardTitle>
                <CardDescription>Звоните в любое удобное время</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+74999999999" 
                  className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  <Icon name="Phone" size={28} />
                  +7 (499) 999-99-99
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Наши специалисты ответят на все ваши вопросы и помогут оформить заказ
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="text-primary" size={24} />
                  Режим работы
                </CardTitle>
                <CardDescription>График работы клиники</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Понедельник - Пятница:</span>
                    <span className="text-primary font-semibold">9:00 - 20:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Суббота - Воскресенье:</span>
                    <span className="text-primary font-semibold">10:00 - 18:00</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Работаем без перерывов и выходных
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  Адрес клиники
                </CardTitle>
                <CardDescription>Как нас найти</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-2">Москва, Енисейская ул., 2</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Удобное расположение с хорошей транспортной доступностью
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Train" className="text-primary mt-0.5" size={16} />
                    <span>Метро: Бабушкинская (10 мин пешком)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Car" className="text-primary mt-0.5" size={16} />
                    <span>Бесплатная парковка для посетителей</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" className="text-primary" size={24} />
                  Онлайн-связь
                </CardTitle>
                <CardDescription>Пишите нам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a 
                    href="mailto:info@izimed.ru" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Icon name="Mail" size={20} />
                    <span className="font-medium">info@izimed.ru</span>
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Отправьте нам письмо, и мы ответим в течение часа
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Map" className="text-primary" size={28} />
                Как нас найти
              </CardTitle>
              <CardDescription>Карта с расположением клиники</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c7c0c7c0c7c0c7c0c7c0c7c0c7c0c7c&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта расположения клиники ИзиМед"
                  className="border-0"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Клиника находится в шаговой доступности от станции метро Бабушкинская. 
                Ориентир - жилой комплекс на Енисейской улице.
              </p>
            </CardContent>
          </Card>

          <section>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MessageSquare" className="text-primary" size={28} />
                  Остались вопросы?
                </CardTitle>
                <CardDescription>Мы всегда готовы помочь</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Icon name="Phone" className="text-blue-600" size={32} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Позвоните нам</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Быстрая консультация по телефону
                    </p>
                    <a 
                      href="tel:+74999999999" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      +7 (499) 999-99-99
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Icon name="Mail" className="text-green-600" size={32} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Напишите нам</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Отправьте вопрос на email
                    </p>
                    <a 
                      href="mailto:info@izimed.ru" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      info@izimed.ru
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Icon name="MapPin" className="text-purple-600" size={32} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Приезжайте к нам</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Личная консультация в клинике
                    </p>
                    <span className="text-primary font-medium">
                      Енисейская ул., 2
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Info" className="text-primary" size={20} />
                    Полезная информация
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Прием ведется по предварительной записи и в порядке живой очереди</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Все справки оформляются на официальных бланках с печатями</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Возможна доставка готовых документов курьером по Москве</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      <span>Оплата наличными и картой прямо в клинике</span>
                    </li>
                  </ul>
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

export default Contacts;