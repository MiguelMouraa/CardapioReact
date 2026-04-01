export default function Header() {
  return (
    <header className="bg-[#f5e6a3] text-gray-800 py-6 shadow-sm rounded-[10px]">
      <div className="container mx-auto flex flex-col items-center gap-4">

        <img
          src="/logo.png"
          alt="Bolos e Tortas da Fabi"
          style={{ width: "200px" }}
          className="object-contain"
        />

        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/5511985053701"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#333333" }}
            className="flex items-center text-sm"
          >
            <img
              src="/logowpp.png"
              alt="WhatsApp Logo"
              style={{ width: "20px" }}
              className="mr-2"
            />
            (11) 98505-3701
          </a>

          <a
            href="https://www.instagram.com/bolossdafabi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#333333" }}
            className="flex items-center text-sm"
          >
            <img
              src="/logoinsta.png"
              alt="Instagram Logo"
              style={{ width: "20px" }}
              className="mr-2"
            />
            Instagram
          </a>
        </div>

      </div>
    </header>
  );
}