export default function Footer() {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-6">
        <p className="font-semibold text-lg">1000leads</p>
        <p className="text-sm opacity-80">
          CNPJ: 60.745.275/0001-00 | Andre Luiz da Rosa
        </p>
        <p className="text-sm opacity-80 mt-2">
          Travessa Herbert 32, Bloco 3, Apt 402 - Passo das Pedras, Gravataí - RS, 94035-210
        </p>
        <p className="mt-4 text-xs opacity-70">&copy; {new Date().getFullYear()} 1000leads. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
