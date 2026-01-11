import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";

const Delivery = () => {
  useEffect(() => {
    document.title = "Доставка и оплата - ИзиМед";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Доставка справок и медкнижек в Москве: самовывоз бесплатно, доставка до метро 200 руб, доставка по адресу 400 руб. Оплата наличными при получении.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Доставка справок и медкнижек в Москве: самовывоз бесплатно, доставка до метро 200 руб, доставка по адресу 400 руб. Оплата наличными при получении.";
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
            <span className="text-muted-foreground">Доставка и оплата</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">Доставка и оплата</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Удобные способы получения справок и медкнижек
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Способы доставки</h2>
            <p className="text-muted-foreground mb-6">
              Нашим клиентам мы предлагаем 3 способа доставки справок и медкнижек:
            </p>

            <div className="grid gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name="Store" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Самовывоз</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        Бесплатно
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Заберите готовую справку в нашем медицинском центре по адресу: Москва, Енисейская ул., 2
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name="Train" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Доставка до станции метро</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        200 рублей
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Курьер доставит справку до любой станции метро Москвы в удобное для вас время
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name="MapPin" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Доставка по адресу</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        400 рублей
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Курьер доставит справку до любого адреса в Москве в удобное для вас время
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <Card className="bg-muted/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon name="Wallet" size={32} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Способ оплаты</CardTitle>
                    <CardDescription className="text-base">
                      Простой и удобный способ расчета
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Оплата справок осуществляется <span className="font-semibold text-foreground">наличными курьеру при получении заказа</span>.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Важная информация</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Доставка осуществляется в течение 24 часов после оформления заказа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Курьер свяжется с вами заранее для уточнения времени доставки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>При самовывозе справка будет готова в течение 1-2 часов</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Нужна консультация?</h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами любым удобным способом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+74999999999" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="Phone" size={20} />
                +7 (499) 999-99-99
              </a>
              <Link 
                to="/contacts" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Icon name="MapPin" size={20} />
                Наши контакты
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Delivery;
