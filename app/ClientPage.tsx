"use client"

import { Phone, Mail, MapPin, Clock, CheckCircle, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. María Ignacia Moenne",
  specialty: "Endodoncia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viana 915, of. 208",
    addressLocality: "Viña del Mar",
    addressCountry: "CL",
  },
  telephone: "+56988779315",
  email: "endodentalvina@gmail.com",
  url: "https://endodoncia-vina.vercel.app",
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
}

export default function ClientPage() {
  const whatsappNumber = "56988779315"
  const whatsappMessage = "Hola, me gustaría agendar una consulta de endodoncia"

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Endodoncia Viña</h1>
                  <p className="text-sm text-gray-600">Dra. María Ignacia Moenne</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+56 9 8877 9315</span>
                </div>
                <Button
                  onClick={() =>
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
                  }
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Endodoncia Sin Dolor en <span className="text-blue-600">Viña del Mar</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Especialista en tratamiento de conducto con tecnología avanzada. Salva tu diente natural y elimina el
                  dolor definitivamente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        `https://ff.healthatom.io/uTxTZ6,
                        "_blank",
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                  >
                    Reserva tu Hora
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, me gustaría una consulta")}`,
                        "_blank",
                      )
                    }
                    className="text-lg px-8 py-4"
                  >
                    Consulta Sin Costo Online
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Sin dolor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Tecnología avanzada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Especialista certificada</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Consultorio dental moderno en Viña del Mar"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">+500 pacientes</p>
                      <p className="text-sm text-gray-600">tratados exitosamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Endodontics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">¿Qué es la Endodoncia?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    La endodoncia es el tratamiento que permite salvar dientes que están severamente dañados o
                    infectados, eliminando la pulpa dental infectada y sellando el conducto radicular.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Con técnicas modernas y anestesia local, el procedimiento es completamente indoloro y te permite
                    conservar tu diente natural por muchos años más.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Procedimiento sin dolor</h3>
                        <p className="text-gray-600">Anestesia local efectiva y técnicas modernas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Conserva tu diente natural</h3>
                        <p className="text-gray-600">Evita extracciones y mantiene tu sonrisa</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Resultados duraderos</h3>
                        <p className="text-gray-600">Tratamiento definitivo con alta tasa de éxito</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Procedimiento de endodoncia"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Beneficios del Tratamiento
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Elimina el Dolor</h3>
                  <p className="text-gray-600">
                    Termina definitivamente con el dolor de muelas y la sensibilidad dental.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conserva tu Diente</h3>
                  <p className="text-gray-600">
                    Evita la extracción y mantiene la funcionalidad natural de tu dentadura.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Procedimiento Seguro</h3>
                  <p className="text-gray-600">Tratamiento con alta tasa de éxito y mínimas complicaciones.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Casos Comunes que Tratamos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-2xl">🦷</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dolor Intenso</h3>
                <p className="text-sm text-gray-600">Dolor severo al morder o sensibilidad extrema</p>
              </div>

              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sensibilidad</h3>
                <p className="text-sm text-gray-600">Sensibilidad prolongada al frío o calor</p>
              </div>

              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🔴</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Infección</h3>
                <p className="text-sm text-gray-600">Abscesos o infecciones en la raíz del diente</p>
              </div>

              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">💥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trauma</h3>
                <p className="text-sm text-gray-600">Dientes fracturados o con trauma dental</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Lo que Dicen Nuestros Pacientes
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Excelente atención de la Dra. Moenne. El tratamiento fue completamente sin dolor y pude salvar mi
                    muela. Muy recomendada."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-900">María José R.</p>
                      <p className="text-sm text-gray-600">Paciente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Profesional muy capacitada y con equipos modernos. Me explicó todo el proceso y me sentí muy
                    tranquilo durante el tratamiento."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Carlos M.</p>
                      <p className="text-sm text-gray-600">Paciente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Después de años con dolor, finalmente encontré la solución. La Dra. Moenne es muy profesional y el
                    consultorio muy moderno."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Ana L.</p>
                      <p className="text-sm text-gray-600">Paciente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">¿El tratamiento de endodoncia duele?</h3>
                  <p className="text-gray-600">
                    No, el tratamiento se realiza con anestesia local efectiva. Durante el procedimiento no sentirás
                    dolor. Después puede haber una leve molestia que se controla con analgésicos comunes.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Cuánto tiempo dura el tratamiento?</h3>
                  <p className="text-gray-600">
                    Generalmente se completa en 1-2 sesiones, dependiendo de la complejidad del caso. Cada sesión dura
                    aproximadamente 60-90 minutos.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Cuánto dura un diente con endodoncia?</h3>
                  <p className="text-gray-600">
                    Con el cuidado adecuado, un diente tratado con endodoncia puede durar toda la vida. Es importante
                    mantener una buena higiene oral y visitas regulares al dentista.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ¿Qué cuidados debo tener después del tratamiento?
                  </h3>
                  <p className="text-gray-600">
                    Evita masticar alimentos duros por unos días, mantén una buena higiene oral y toma los medicamentos
                    recetados. Te daremos instrucciones detalladas post-tratamiento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Agenda tu Consulta Hoy</h2>
              <p className="text-xl mb-8 text-blue-100">
                No esperes más para solucionar tu problema dental. Contáctanos y programa tu consulta.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                  <p className="text-blue-100">+56 9 8877 9315</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-blue-100">endodentalvina@gmail.com</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                  <p className="text-blue-100">
                    Viana 915, of. 208
                    <br />
                    Viña del Mar
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() =>
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
                  }
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(`tel:+${whatsappNumber}`, "_self")}
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Endodoncia Viña</h3>
                    <p className="text-gray-400">Dra. María Ignacia Moenne</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Especialista en endodoncia con tecnología avanzada para tratamientos sin dolor en Viña del Mar.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+56 9 8877 9315</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>endodentalvina@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Viana 915, of. 208, Viña del Mar</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Horarios</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Lun - Vie: 9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Sáb: 9:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Endodoncia Viña - Dra. María Ignacia Moenne. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
            }
            className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg"
            size="lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </>
  )
}
