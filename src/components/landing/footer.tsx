export default function Footer() {
  return (
    <footer className="py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-6">
        <p>&copy; {new Date().getFullYear()} 1000leads. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
