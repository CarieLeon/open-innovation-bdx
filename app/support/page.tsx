import { Card, CardBody, CardHeader, Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function SupportPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <CardHeader className="flex gap-3">
            <Icon icon="mdi:headset" className="text-3xl" />
            <h2 className="text-2xl font-bold">Support Communautaire</h2>
          </CardHeader>
          <CardBody>
            <p className="mb-4">
              Notre communauté est là pour vous aider. Posez vos questions et partagez vos expériences.
            </p>
            <Button 
              color="primary" 
              variant="flat"
              className="w-full"
              as="a"
              href="https://github.com/zecrom"
              target="_blank"
            >
              Accéder à GitHub
            </Button>
          </CardBody>
        </Card>

        <Card className="p-6">
          <CardHeader className="flex gap-3">
            <Icon icon="mdi:tools" className="text-3xl" />
            <h2 className="text-2xl font-bold">Support Premium</h2>
          </CardHeader>
          <CardBody>
            <p className="mb-4">
              Besoin d&apos;une assistance personnalisée ou de modifications spécifiques ? Notre équipe est à votre disposition.
            </p>
            <Button 
              color="primary" 
              variant="flat"
              className="w-full"
              as="a"
              href="/contact"
            >
              Contacter l&apos;équipe
            </Button>
          </CardBody>
        </Card>
      </div>

      <Card className="max-w-2xl mx-auto p-6">
        <CardHeader>
          <h2 className="text-2xl font-bold">Formulaire de Contact</h2>
        </CardHeader>
        <CardBody>
          <form className="space-y-4">
            <Input
              label="Nom"
              placeholder="Votre nom"
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="votre@email.com"
              required
            />
            <Input
              label="Sujet"
              placeholder="Objet de votre message"
              required
            />
            <Textarea
              label="Message"
              placeholder="Décrivez votre demande en détail"
              required
            />
            <Button 
              color="primary" 
              className="w-full"
              type="submit"
            >
              Envoyer
            </Button>
          </form>
        </CardBody>
      </Card>
    </main>
  );
} 