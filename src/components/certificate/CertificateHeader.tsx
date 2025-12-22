import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CertificateHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-end gap-2">
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
        </Link>
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
          <Link to="/#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</Link>
          <Link to="/#about" className="text-foreground/80 hover:text-primary transition-colors">О клинике</Link>
          <Link to="/#contacts" className="text-foreground/80 hover:text-primary transition-colors">Контакты</Link>
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
  );
};