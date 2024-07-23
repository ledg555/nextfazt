import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>Menú</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Acerca de</Link></li>
        <li><Link href="tienda">Tienda</Link></li>
        <li><Link href="categories">Categorías</Link></li>
      </ul>
    </nav>
  );
}