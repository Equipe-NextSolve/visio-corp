import "./globals.css";
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";

export const metadata = {
    title: "VisioCorp | Saúde Visual Corporativa e Showroom Óptico para Empresas",

    description:
        "A VisioCorp oferece soluções em saúde visual corporativa com showroom óptico completo dentro da sua empresa. Mais bem-estar, produtividade e cuidado com seus colaboradores.",

    keywords: [
        "saúde visual corporativa",
        "showroom óptico empresarial",
        "óptica para empresas",
        "exames de vista em empresas",
        "benefícios corporativos visão",
        "programa de saúde visual"
    ],

    authors: [{ name: "VisioCorp" }],

    icons: {
        icon: "/Logoviso.png",
    },

    openGraph: {
        title: "VisioCorp | Saúde Visual para Empresas",
        description:
            "Showroom óptico completo dentro da sua empresa. Cuidamos da saúde visual dos seus colaboradores.",
        url: "https://visiocorp.com", 
        siteName: "VisioCorp",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "pt_BR",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={''}>
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
