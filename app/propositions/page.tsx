import { Card, CardBody, CardHeader, Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function PropositionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Proposez vos Scripts</h1>
      
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 mb-8">
          <CardHeader className="flex gap-3">
            <Icon icon="mdi:lightbulb-on" className="text-3xl" />
            <h2 className="text-2xl font-bold">Partagez votre expertise</h2>
          </CardHeader>
          <CardBody>
            <p className="mb-4">
              Vous avez développé un script Docker utile ? Partagez-le avec la communauté ZECROM !
            </p>
            <p className="mb-4">
              Votre contribution sera examinée par notre équipe et pourra être intégrée à notre catalogue.
            </p>
          </CardBody>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <h2 className="text-2xl font-bold">Formulaire de Proposition</h2>
          </CardHeader>
          <CardBody>
            <form className="space-y-4">
              <Input
                label="Nom du Script"
                placeholder="Nom de votre script"
                required
              />
              <Input
                label="Votre Nom"
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
                label="Lien GitHub"
                placeholder="URL de votre dépôt GitHub"
                required
              />
              <Textarea
                label="Description"
                placeholder="Décrivez votre script et ses fonctionnalités"
                required
              />
              <Textarea
                label="Instructions d'installation"
                placeholder="Comment installer et utiliser votre script"
                required
              />
              <Button 
                color="primary" 
                className="w-full"
                type="submit"
              >
                Soumettre
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </main>
  );
} 