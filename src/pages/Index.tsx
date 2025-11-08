import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const collections = [
    {
      id: 1,
      name: "Meteorite Cosmos",
      price: "15 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/b06c830f-5839-4210-9a2f-4c093bf872de/files/0e9b0c94-82c2-459b-a564-3529b0c69096.jpg",
      description: "Циферблат из настоящего метеорита Gibeon"
    },
    {
      id: 2,
      name: "Stellar Voyage",
      price: "21 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/b06c830f-5839-4210-9a2f-4c093bf872de/files/964493f2-6d13-4dc4-a8d1-91554bc81f80.jpg",
      description: "Коллекция с фрагментами космической пыли"
    },
    {
      id: 3,
      name: "Lunar Eclipse",
      price: "27 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/b06c830f-5839-4210-9a2f-4c093bf872de/files/38affc3a-f298-4b34-ace6-a827717a7026.jpg",
      description: "Интеграция метеоритных фрагментов в механизм"
    }
  ];

  const services = [
    {
      icon: "Rocket",
      title: "Материалы из космоса",
      description: "Каждые часы содержат настоящие метеориты возрастом 4.5 млрд лет"
    },
    {
      icon: "Globe",
      title: "Made on Earth",
      description: "Созданы на Земле из материалов, прилетевших из глубин космоса"
    },
    {
      icon: "Star",
      title: "Сертификат подлинности",
      description: "Документальное подтверждение космического происхождения материалов"
    },
    {
      icon: "Infinity",
      title: "Вечная гарантия",
      description: "Как и сам метеорит — ваши часы созданы на века"
    }
  ];

  return (
    <div className="min-h-screen bg-background star-pattern">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <h1 className="text-3xl font-cormorant font-bold text-primary">LUXURUSS</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#collections" className="text-sm font-montserrat hover:text-primary transition-colors">
              Коллекции
            </a>
            <a href="#service" className="text-sm font-montserrat hover:text-primary transition-colors">
              Обслуживание
            </a>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Консультация
            </Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full" />
          <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary/30 rounded-full" />
        </div>
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <Icon name="Star" size={20} className="text-primary" />
              <span className="text-sm font-montserrat tracking-[0.3em] text-primary font-medium">MADE ON EARTH</span>
              <Icon name="Star" size={20} className="text-primary" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <h2 className="text-7xl md:text-8xl font-cormorant font-light mb-6 tracking-tight relative">
              <span className="relative inline-block">
                Часы из
                <div className="absolute -top-8 -left-8 text-6xl text-primary/30">✦</div>
              </span>
              <span className="block text-primary font-medium relative">
                космических метеоритов
                <div className="absolute -bottom-8 -right-8 text-6xl text-primary/30">✦</div>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Эксклюзивные швейцарские часы с циферблатами из настоящих метеоритов. Материалы возрастом 4.5 миллиарда лет, созданные на Земле для тех, кто ценит уникальность космоса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat text-base px-8">
                Смотреть коллекцию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat text-base px-8">
                Записаться на просмотр
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="py-20 px-6 bg-secondary/30 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-primary" />
              <Icon name="Sparkles" size={32} className="text-primary" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-primary/50 to-primary" />
            </div>
            <h3 className="text-5xl md:text-6xl font-cormorant font-medium mb-4 relative inline-block">
              Космические коллекции
              <div className="absolute -top-4 left-0 text-4xl text-primary/20">◆</div>
              <div className="absolute -bottom-4 right-0 text-4xl text-primary/20">◆</div>
            </h3>
            <p className="text-muted-foreground text-lg mt-6">Часы с настоящими метеоритами • Made on Earth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((watch, index) => (
              <Card 
                key={watch.id} 
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img 
                    src={watch.image} 
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-3 right-3 text-primary/20 text-2xl">✦</div>
                  <h4 className="text-2xl font-cormorant font-medium mb-2">{watch.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{watch.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-cormorant text-primary">{watch.price}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="py-20 px-6 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <Icon name="Globe" size={32} className="text-primary" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h3 className="text-5xl md:text-6xl font-cormorant font-medium mb-4 relative inline-block">
              Made on Earth
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-3xl text-primary/30">❋</div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-3xl text-primary/30">❋</div>
            </h3>
            <p className="text-muted-foreground text-lg mt-6">Земное мастерство • Космические материалы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 left-4 text-primary/10 text-xl">✦</div>
                  <div className="absolute bottom-4 right-4 text-primary/10 text-xl">✦</div>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 border-2 border-primary/20">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-cormorant font-medium mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 border border-primary/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary/10 rounded-full" />
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="relative inline-block">
              <Icon name="Orbit" size={48} className="text-primary mx-auto mb-6" />
              <div className="absolute -top-2 -left-2 text-2xl text-primary/30">✦</div>
              <div className="absolute -bottom-2 -right-2 text-2xl text-primary/30">✦</div>
            </div>
            <h3 className="text-4xl md:text-5xl font-cormorant font-medium mb-6">Прикоснитесь к космосу</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Каждые часы — это фрагмент истории Вселенной на вашем запястье. Наши эксперты расскажут об уникальных свойствах метеоритов и помогут выбрать вашу космическую коллекцию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на встречу
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} className="text-primary" />
                <h4 className="text-2xl font-cormorant font-bold text-primary">LUXURUSS</h4>
              </div>
              <p className="text-sm text-muted-foreground">Космические часы • Made on Earth</p>
            </div>
            <div>
              <h5 className="font-montserrat font-medium mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">История бренда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-montserrat font-medium mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@luxuruss.com</li>
                <li>Москва, ул. Петровка, 10</li>
              </ul>
            </div>
            <div>
              <h5 className="font-montserrat font-medium mb-4">Социальные сети</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 LUXURUSS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;