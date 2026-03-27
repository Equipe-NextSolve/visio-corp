import "./globals.css";
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";

export const metadata = {
  title: "VisioCorp - Site Oficial",
  description: "Showroom óptico completo para sua empresa.Empresa dedicada a cuidar da saúde visual como forma de valorizar as pessoas dentro das organizações.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col"> 
                <Header/>
                {children}
                <Footer/>
            </body>
    </html>
    );
}
