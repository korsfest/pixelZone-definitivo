export function Footer() {
  return (
    <footer className="bg-black text-muted py-4 mt-auto border-top border-secondary">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} PixelZone Store. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}