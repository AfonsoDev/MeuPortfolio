import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { githubApi } from "@/pages/api/api";
import Particles from "../components/particles";


export default async function Example() {

    const userGit = await githubApi.get('/users/AfonsoDev');
    
	return (
        <>
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">  
                <section id="about" className="none flex flex-col items-center justify-center w-screen h-full overflow-hidden via-zinc-600/20">
                      <Particles
                        className="absolute inset-0 -z-10 animate-fade-in"
                        quantity={5000}
                      />
                    <div className="md:container flex flex-col md:flex-row items-center md:items-start p-6 rounded-lg shadow-md">
                        {/* Seção da imagem e nome */}
                        <div className="flex flex-col items-center justify-center md:items-start md:w-1/3">
                            <img
                            src="https://avatars.githubusercontent.com/u/56160428?v=4" // Substitua pelo caminho real da sua imagem
                            alt="Foto de perfil"
                            className="w-40 h-40 rounded-full object-cover mb-4 lg:ml-auto lg:mr-auto"
                            />
                            <h2 className="text-lg font-semibold text-white text-center md:text-left  lg:ml-auto lg:mr-auto">
                                {userGit.data.name}
                            </h2>
                        </div>

                        {/* Seção de descrição */}
                        <div className="mt-6 md:mt-0 md:ml-8 md:w-2/3">
                            <p className="text-white text-justify text-base leading-relaxed">👨‍💻 Afonso | Desenvolvedor Web</p>
                            <p className="text-white text-justify text-base leading-relaxed">
                             {userGit.data.bio} Com experiência em uma ampla gama de tecnologias, como ReactJS, JavaScript, Node.js, PHP (incluindo Laravel), ElectronJS, CSS, Bootstrap e TailwindCSS, crio soluções modernas, funcionais e otimizadas para web e desktop.
                            🚀 Estou sempre em busca de aprendizado contínuo e de desafios que me permitam expandir minhas habilidades técnicas e criar projetos de impacto.
                            📈 Fora do ambiente de desenvolvimento, tenho como hobby explorar o mercado de criptomoedas, unindo minha curiosidade por finanças e tecnologia.
                            Vamos construir algo incrível juntos? 🌟
                            </p>
                        </div>
                    </div>

                </section>
            </div>
        </div>

        </>
	);
}


