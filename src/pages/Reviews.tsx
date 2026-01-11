import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CertificateHeader } from "@/components/certificate/CertificateHeader";

const reviews = [
  {
    name: "Анна Смирнова",
    role: "Студентка МГУ",
    certificate: "Справка 086/у",
    rating: 5,
    date: "15 декабря 2024",
    text: "Оформляла справку для поступления в университет. Всё сделали быстро, буквально за час! Очень удобно, что можно было забрать справку самостоятельно. Врачи вежливые, всё объяснили. Рекомендую!",
    avatar: "https://ui-avatars.com/api/?name=Anna+Smirnova&background=7CB5B1&color=fff"
  },
  {
    name: "Дмитрий Петров",
    role: "Водитель такси",
    certificate: "Медсправка для водителей",
    rating: 5,
    date: "10 декабря 2024",
    text: "Нужна была срочно медсправка для замены прав. Позвонил утром, к обеду уже всё было готово. Курьер привез прямо на работу. Цена адекватная, сервис на высоте. Спасибо!",
    avatar: "https://ui-avatars.com/api/?name=Dmitry+Petrov&background=427D98&color=fff"
  },
  {
    name: "Елена Волкова",
    role: "Менеджер",
    certificate: "Справка в бассейн",
    rating: 5,
    date: "5 декабря 2024",
    text: "Отличная клиника! Оформила справку в бассейн за 30 минут. Никаких очередей, всё четко и быстро. Персонал приветливый. Теперь буду обращаться только сюда.",
    avatar: "https://ui-avatars.com/api/?name=Elena+Volkova&background=7CB5B1&color=fff"
  },
  {
    name: "Игорь Соколов",
    role: "Школьник",
    certificate: "Справка 095/у",
    rating: 5,
    date: "1 декабря 2024",
    text: "Мама оформляла мне справку для школы после болезни. Сказала, что очень довольна – быстро, недорого, без проблем. Справку доставили до метро, очень удобно!",
    avatar: "https://ui-avatars.com/api/?name=Igor+Sokolov&background=427D98&color=fff"
  },
  {
    name: "Мария Козлова",
    role: "Преподаватель",
    certificate: "Медицинская книжка",
    rating: 5,
    date: "28 ноября 2024",
    text: "Оформляла медкнижку для работы в школе. Все анализы и осмотры сделали за один день! Очень профессиональный подход. Все документы в порядке, санстанция приняла без вопросов. Благодарю!",
    avatar: "https://ui-avatars.com/api/?name=Maria+Kozlova&background=7CB5B1&color=fff"
  },
  {
    name: "Алексей Новиков",
    role: "Спортсмен",
    certificate: "Справка для спортзала",
    rating: 5,
    date: "22 ноября 2024",
    text: "Понадобилась справка для спортивной секции. Записался онлайн, пришел – и за 20 минут получил готовую справку. Цены приемлемые, сервис отличный. Всем советую ИзиМед!",
    avatar: "https://ui-avatars.com/api/?name=Alexey+Novikov&background=427D98&color=fff"
  },
  {
    name: "Ольга Морозова",
    role: "Офис-менеджер",
    certificate: "Справка для работы",
    rating: 5,
    date: "18 ноября 2024",
    text: "Устраивалась на новую работу, нужна была справка о состоянии здоровья. В ИзиМед всё оформили быстро и качественно. Никаких лишних анализов не навязывали. Рекомендую как надежную клинику!",
    avatar: "https://ui-avatars.com/api/?name=Olga+Morozova&background=7CB5B1&color=fff"
  },
  {
    name: "Сергей Лебедев",
    role: "Курьер",
    certificate: "Справка из НД и ПНД",
    rating: 5,
    date: "12 ноября 2024",
    text: "Нужны были справки из диспансеров для оформления на работу. Помогли со всем разобраться, подсказали что и как. Получил справки в короткие сроки. Очень доволен обслуживанием!",
    avatar: "https://ui-avatars.com/api/?name=Sergey+Lebedev&background=427D98&color=fff"
  },
  {
    name: "Татьяна Григорьева",
    role: "Воспитатель",
    certificate: "Справка о прививках",
    rating: 5,
    date: "8 ноября 2024",
    text: "Оформляла справку о вакцинации для работы в детском саду. Врачи очень внимательные, всё проверили по моей медкарте. Справку выдали в тот же день. Спасибо за профессионализм!",
    avatar: "https://ui-avatars.com/api/?name=Tatyana+Grigorieva&background=7CB5B1&color=fff"
  },
  {
    name: "Владимир Кузнецов",
    role: "Программист",
    certificate: "Справка по форме 302н",
    rating: 5,
    date: "3 ноября 2024",
    text: "Впервые обращался в ИзиМед для оформления справки на работу. Приятно удивлен скоростью и качеством обслуживания. Всё сделали за пару часов, цена честная. Буду обращаться ещё!",
    avatar: "https://ui-avatars.com/api/?name=Vladimir+Kuznetsov&background=427D98&color=fff"
  }
];

const Reviews = () => {
  useEffect(() => {
    document.title = "Отзывы клиентов - ИзиМед";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Отзывы клиентов медицинского центра ИзиМед о получении справок и медкнижек. Реальные мнения о качестве обслуживания и скорости оформления документов.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Отзывы клиентов медицинского центра ИзиМед о получении справок и медкнижек. Реальные мнения о качестве обслуживания и скорости оформления документов.";
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
            <span className="text-muted-foreground">Отзывы</span>
          </nav>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Отзывы наших клиентов</h1>
            <p className="text-lg text-muted-foreground">
              Реальные мнения людей, которые уже воспользовались нашими услугами
            </p>
          </div>

          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-bold text-primary">4.9</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">Средняя оценка</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div>
                <div className="text-2xl font-semibold">{reviews.length} отзывов</div>
                <div className="text-sm text-muted-foreground">От реальных клиентов</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    <Icon name="FileText" size={14} />
                    {review.certificate}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-12 text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Поделитесь своим мнением</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Мы ценим каждый отзыв и постоянно работаем над улучшением качества наших услуг. 
              Расскажите о своем опыте обращения в нашу клинику!
            </p>
            <a 
              href="tel:+74999999999" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="Phone" size={20} />
              Связаться с нами
            </a>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Быстрое оформление</h3>
              <p className="text-sm text-muted-foreground">
                Большинство справок готовы в течение 1-2 часов
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="ThumbsUp" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Высокое качество</h3>
              <p className="text-sm text-muted-foreground">
                Все справки соответствуют требованиям законодательства
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Опытные врачи</h3>
              <p className="text-sm text-muted-foreground">
                Команда профессионалов с многолетним стажем
              </p>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Reviews;
