import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-8 flex justify-between items-center">
      <h2 className="text-3xl font-bold">Menú</h2>
      <ul className="flex gap-4">
        <li className="list-none"><Link href="/">Home</Link></li>
        <li className="list-none"><Link href="/about">Acerca de</Link></li>
        <li className="list-none"><Link href="/tienda">Tienda</Link></li>
        <li className="list-none"><Link href="/categories">Categorías</Link></li>
        <li className="list-none"><Link href="/posts">Publicaciones</Link></li>
      </ul>
    </nav>
  );
}