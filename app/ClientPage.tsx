"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const whatsappNumber = "525580230731"

export default function ClientPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Set initial value
    handleResize()

    // Listen for window resize events
    window.addEventListener("resize", handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.webp"
            alt="Endodoncia Especializada"
            layout="fill"
            objectFit="cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Endodoncia Especializada
          </h1>
          <p className="mt-6 text-xl text-gray-900 max-w-3xl">
            Salva tu diente con un tratamiento de conducto de alta calidad. Alivio del dolor y recuperación dental
            garantizados.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="#contact"
              className="inline-block bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-lg font-medium text-white hover:bg-indigo-700"
            >
              Agenda tu cita
            </Link>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, me gustaría más información sobre endodoncia")}`,
                  "_blank",
                )
              }
              className="inline-block bg-white py-3 px-8 border border-indigo-600 rounded-md text-lg font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Más Información
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Nuestros Servicios</h2>
              <p className="mt-4 text-lg text-gray-500">
                Ofrecemos tratamientos de endodoncia de vanguardia para resolver tus problemas dentales.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <ul className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="object-cover shadow-lg rounded-lg"
                        src="/images/servicio-1.webp"
                        alt="Tratamiento de Conducto"
                        width={600}
                        height={400}
                        layout="responsive"
                        quality={75}
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Tratamiento de Conducto</h3>
                      <p className="text-gray-500">
                        Eliminación de la pulpa dañada y sellado del conducto para salvar tu diente.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="object-cover shadow-lg rounded-lg"
                        src="/images/servicio-2.webp"
                        alt="Retratamiento de Conducto"
                        width={600}
                        height={400}
                        layout="responsive"
                        quality={75}
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Retratamiento de Conducto</h3>
                      <p className="text-gray-500">
                        Solución para conductos tratados previamente que presentan problemas.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="object-cover shadow-lg rounded-lg"
                        src="/images/servicio-3.webp"
                        alt="Urgencias Endodónticas"
                        width={600}
                        height={400}
                        layout="responsive"
                        quality={75}
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Urgencias Endodónticas</h3>
                      <p className="text-gray-500">
                        Atención inmediata para aliviar el dolor y solucionar problemas urgentes.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="object-cover shadow-lg rounded-lg"
                        src="/images/servicio-4.webp"
                        alt="Diagnóstico Preciso"
                        width={600}
                        height={400}
                        layout="responsive"
                        quality={75}
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>Diagnóstico Preciso</h3>
                      <p className="text-gray-500">
                        Tecnología avanzada para un diagnóstico certero y un tratamiento efectivo.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative h-56 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <Image
                className="object-cover shadow-lg rounded-lg"
                src="/images/about-image.webp"
                alt="Especialista en Endodoncia"
                layout="fill"
                objectFit="cover"
                quality={75}
              />
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8">
              <h2 className="text-3xl font-extrabold text-gray-900">¿Por qué elegirnos?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Somos especialistas en endodoncia con años de experiencia y miles de casos exitosos. Utilizamos
                tecnología de punta y materiales de la más alta calidad para garantizar resultados óptimos.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Atención personalizada y amable
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tecnología de vanguardia
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Resultados duraderos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12" id="contact">
        <div className="max-w-lg mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-3xl text-center font-extrabold text-gray-900">Contáctanos</h2>
          <p className="mt-4 text-xl text-center text-gray-500">
            No esperes más para solucionar tu problema dental. Contáctanos y agenda tu consulta.
          </p>
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900">Información de Contacto</h3>
                <dl className="mt-4 text-base text-gray-500">
                  <div className="mt-2">
                    <dt className="sr-only">Dirección</dt>
                    <dd>
                      <p>Av. Insurgentes Sur 688</p>
                      <p>Col. Del Valle, Benito Juárez, CDMX</p>
                    </dd>
                  </div>
                  <div className="mt-2">
                    <dt className="sr-only">Teléfono</dt>
                    <dd>
                      <a className="hover:text-gray-900" href={`tel:${whatsappNumber}`}>
                        +52 55 8023 0731
                      </a>
                    </dd>
                  </div>
                  <div className="mt-2">
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="hover:text-gray-900" href="mailto:info@endodonciaespecializada.com">
                        info@endodonciaespecializada.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900">Envíanos un Mensaje</h3>
                <form action="#" method="POST" className="mt-4 grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder="Nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder="Teléfono"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder="Mensaje"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-3 py-2 text-gray-400 hover:text-white">
              <a href="#" className="hover:text-white">
                Inicio
              </a>
            </div>
            <div className="px-3 py-2 text-gray-400 hover:text-white">
              <a href="#services" className="hover:text-white">
                Servicios
              </a>
            </div>
            <div className="px-3 py-2 text-gray-400 hover:text-white">
              <a href="#about" className="hover:text-white">
                Acerca de
              </a>
            </div>
            <div className="px-3 py-2 text-gray-400 hover:text-white">
              <a href="#contact" className="hover:text-white">
                Contacto
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">Horarios: Lunes a Viernes de 9:00 a 18:00</p>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Endodoncia Especializada. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
