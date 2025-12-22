import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface OrderFormProps {
  formData: {
    fullName: string;
    birthDate: string;
    phone: string;
    comment: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const OrderForm = ({ formData, onSubmit, onChange }: OrderFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Оформить заказ</CardTitle>
        <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">ФИО *</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Иванов Иван Иванович"
              value={formData.fullName}
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
  );
};
