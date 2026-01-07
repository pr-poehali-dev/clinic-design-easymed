import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const licenses = [
  {
    id: 1,
    title: "Лицензия на медицинскую деятельность",
    number: "ЛО-77-01-021456",
    issueDate: "15.03.2015",
    validUntil: "Бессрочная",
    issuedBy: "Департамент здравоохранения г. Москвы",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/453f4c8a-320f-47ec-9ee9-50fcf8927f7a.jpg",
    description: "Основная лицензия на осуществление медицинской деятельности"
  },
  {
    id: 2,
    title: "Сертификат соответствия качества",
    number: "СС-МС-2023-00456",
    issueDate: "10.01.2023",
    validUntil: "09.01.2026",
    issuedBy: "Федеральная служба по надзору в сфере здравоохранения",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/ef9bed33-3112-4dc5-8bae-c4c2dc8fd117.jpg",
    description: "Подтверждение соответствия оказываемых медицинских услуг требованиям качества"
  },
  {
    id: 3,
    title: "Разрешение на оформление медицинских документов",
    number: "РД-77-2022-1145",
    issueDate: "20.06.2022",
    validUntil: "19.06.2027",
    issuedBy: "Департамент здравоохранения г. Москвы",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/72d5c2c0-3ee6-4794-b60d-795c5a72c5db.jpg",
    description: "Право на выдачу медицинских справок и медицинских книжек"
  },
  {
    id: 4,
    title: "Сертификат ISO 9001:2015",
    number: "ISO-RU-2023-7845",
    issueDate: "05.04.2023",
    validUntil: "04.04.2026",
    issuedBy: "Международная организация по сертификации",
    image: "https://cdn.poehali.dev/projects/77d582ab-51e7-4922-90af-fd5f275d2b1f/files/1c4d26eb-0306-4e2c-8a0e-56292145bcf0.jpg",
    description: "Сертификат системы менеджмента качества по международному стандарту"
  }
];

const Licenses = () => {
  const [selectedLicense, setSelectedLicense] = useState<typeof licenses[0] | null>(null);

  useEffect(() => {
    document.title = "Лицензии и сертификаты клиники ИзиМед в Москве";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Лицензии и сертификаты медицинского центра ИзиМед: лицензия на медицинскую деятельность, сертификаты качества и разрешения.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Лицензии и сертификаты медицинского центра ИзиМед: лицензия на медицинскую деятельность, сертификаты качества и разрешения.";
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
            <span className="text-muted-foreground">Лицензии и сертификаты</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-2">Лицензии и сертификаты</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Вся документация клиники ИзиМед
          </p>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" className="text-primary" size={24} />
                Официальная медицинская деятельность
              </CardTitle>
              <CardDescription>
                Клиника ИзиМед работает на основании действующих лицензий и разрешений
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground">
                  Медицинский центр "ИзиМед" имеет все необходимые лицензии и сертификаты для осуществления 
                  медицинской деятельности на территории Москвы и Московской области. Все наши документы соответствуют 
                  требованиям законодательства Российской Федерации в области здравоохранения.
                </p>
                <p className="text-muted-foreground">
                  Мы регулярно проходим проверки контролирующих органов и подтверждаем высокое качество оказываемых 
                  медицинских услуг. Все выдаваемые нами справки и медицинские книжки являются официальными документами 
                  и принимаются во всех учреждениях и организациях.
                </p>
              </div>
            </CardContent>
          </Card>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Документы клиники</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {licenses.map((license) => (
                <Card 
                  key={license.id} 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedLicense(license)}
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img 
                      src={license.image} 
                      alt={license.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-2">
                      <Icon name="FileCheck" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>{license.title}</span>
                    </CardTitle>
                    <CardDescription>{license.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Hash" size={14} className="text-primary" />
                        <span className="text-muted-foreground">Номер:</span>
                        <span className="font-medium">{license.number}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} className="text-primary" />
                        <span className="text-muted-foreground">Выдан:</span>
                        <span className="font-medium">{license.issueDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CalendarCheck" size={14} className="text-primary" />
                        <span className="text-muted-foreground">Действителен до:</span>
                        <span className="font-medium">{license.validUntil}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="BadgeCheck" className="text-primary" size={28} />
                  Гарантии качества
                </CardTitle>
                <CardDescription>Что подтверждают наши лицензии</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileCheck" className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Легальность документов</h3>
                      <p className="text-sm text-muted-foreground">
                        Все справки и медкнижки выдаются на официальных бланках установленного образца 
                        и имеют юридическую силу
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Квалифицированные врачи</h3>
                      <p className="text-sm text-muted-foreground">
                        Все наши специалисты имеют действующие сертификаты и допуски 
                        к медицинской деятельности
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Соответствие стандартам</h3>
                      <p className="text-sm text-muted-foreground">
                        Клиника соответствует всем требованиям Министерства здравоохранения РФ 
                        и международным стандартам качества
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="ClipboardCheck" className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Регулярные проверки</h3>
                      <p className="text-sm text-muted-foreground">
                        Мы успешно проходим все плановые и внеплановые проверки 
                        контролирующих органов
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
                  <Icon name="FileText" className="text-primary" size={28} />
                  Область лицензирования
                </CardTitle>
                <CardDescription>Виды медицинских услуг, на которые получены разрешения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <div>
                      <p className="font-medium">Терапия</p>
                      <p className="text-sm text-muted-foreground">Общетерапевтический прием</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <div>
                      <p className="font-medium">Профосмотры</p>
                      <p className="text-sm text-muted-foreground">Предварительные и периодические</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <div>
                      <p className="font-medium">Медицинские справки</p>
                      <p className="text-sm text-muted-foreground">Все виды форм справок</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <div>
                      <p className="font-medium">Медицинские книжки</p>
                      <p className="text-sm text-muted-foreground">Оформление и продление</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <div>
                      <p className="font-medium">Лабораторная диагностика</p>
                      <p className="text-sm text-muted-foreground">Клинические анализы</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <div>
                      <p className="font-medium">Функциональная диагностика</p>
                      <p className="text-sm text-muted-foreground">ЭКГ, флюорография</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="HelpCircle" className="text-primary" size={28} />
                  Часто задаваемые вопросы
                </CardTitle>
                <CardDescription>Ответы на популярные вопросы о наших лицензиях</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2 flex items-start gap-2">
                      <Icon name="MessageCircle" className="text-primary mt-0.5" size={18} />
                      Можно ли проверить действительность ваших лицензий?
                    </h4>
                    <p className="text-sm text-muted-foreground ml-6">
                      Да, все наши лицензии можно проверить на официальном сайте Департамента здравоохранения 
                      г. Москвы и Росздравнадзора. Номера лицензий указаны на этой странице.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2 flex items-start gap-2">
                      <Icon name="MessageCircle" className="text-primary mt-0.5" size={18} />
                      Почему важно, чтобы у клиники были лицензии?
                    </h4>
                    <p className="text-sm text-muted-foreground ml-6">
                      Лицензии подтверждают право клиники на оказание медицинских услуг и гарантируют, 
                      что все выдаваемые документы имеют юридическую силу и будут приняты в любых учреждениях.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2 flex items-start gap-2">
                      <Icon name="MessageCircle" className="text-primary mt-0.5" size={18} />
                      Как часто обновляются лицензии?
                    </h4>
                    <p className="text-sm text-muted-foreground ml-6">
                      Основная лицензия на медицинскую деятельность является бессрочной. Сертификаты качества 
                      и соответствия обновляются каждые 3 года в соответствии с требованиями законодательства.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2 flex items-start gap-2">
                      <Icon name="MessageCircle" className="text-primary mt-0.5" size={18} />
                      Можно ли получить копии документов?
                    </h4>
                    <p className="text-sm text-muted-foreground ml-6">
                      Да, мы можем предоставить заверенные копии любых лицензий и сертификатов по вашему запросу. 
                      Для этого обратитесь к нашим специалистам по телефону или при личном визите.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Dialog open={!!selectedLicense} onOpenChange={() => setSelectedLicense(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="FileCheck" className="text-primary" size={24} />
              {selectedLicense?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedLicense && (
            <div className="space-y-4">
              <img 
                src={selectedLicense.image} 
                alt={selectedLicense.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="FileText" size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Описание:</p>
                    <p className="font-medium">{selectedLicense.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Hash" size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Номер документа:</p>
                    <p className="font-medium">{selectedLicense.number}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Calendar" size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Дата выдачи:</p>
                    <p className="font-medium">{selectedLicense.issueDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CalendarCheck" size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Действителен до:</p>
                    <p className="font-medium">{selectedLicense.validUntil}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Building" size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Выдан:</p>
                    <p className="font-medium">{selectedLicense.issuedBy}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

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

export default Licenses;
