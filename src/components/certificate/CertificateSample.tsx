import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CertificateSample = () => {
  return (
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
  );
};
