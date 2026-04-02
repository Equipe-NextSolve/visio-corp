import { FaRegCalendarCheck, FaUserFriends } from "react-icons/fa";
import { TbHeartRateMonitor } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { BiSolidUserCheck } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

const features = [
  {
    id: 1,
    title: "04 Dias de Atendimento",
    description: "Atendimento oftalmológico in company por semestre",
    icon: FaRegCalendarCheck,
  },
  {
    id: 2,
    title: "Exames Gratuitos",
    description: "Sem custo para colaboradores",
    icon: TbHeartRateMonitor,
  },
  {
    id: 3,
    title: "Parceria com Laboratório",
    description: "Qualidade e precisão garantidas",
    icon: FaUserFriends,
  },
  {
    id: 4,
    title: "Agenda Completa",
    description: "Organização total dos horários",
    icon: IoCalendarOutline,
  },
  {
    id: 5,
    title: "Consultoria Óptica",
    description: "Atendimento personalizado",
    icon: BiSolidUserCheck,
  },
  {
    id: 6,
    title: "Logística Completa",
    description: "Entrega dos óculos na empresa",
    icon: BsBoxSeam,
  },
];

export default function Operation() {
  return (
    <section className="relative w-full min-h-screen bg-gray px-4 sm:px-6 py-12 flex flex-col items-center justify-center">
    
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 relative inline-block">
          Entregamos o Serviço Completo para sua Empresa!
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold shadow-lg shadow-gold/50"></span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl place-items-center">
        {features.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="
              w-full max-w-sm
              bg-black/50 border border-gold/20 
              p-6 rounded-xl 
              hover:border-gold transition-all duration-300
              flex flex-col justify-center
              text-center sm:text-left
            "
          >
            <div className="text-gold text-3xl mb-4 flex justify-center sm:justify-start">
              <Icon />
            </div>

            <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
              {title}
            </h2>

            <p className="text-white text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}