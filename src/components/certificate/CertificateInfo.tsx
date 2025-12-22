import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const CertificateInfo = () => {
  return (
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
  );
};
