import { Card, CardBody, CardHeader, CardFooter, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const solutions = [
  {
    name: "Zabbix",
    description: "Supervision réseau en un clin d'œil",
    icon: "simple-icons:zabbix",
    features: [
      "Surveillance complète du réseau",
      "Alertes en temps réel",
      "Tableaux de bord personnalisables"
    ]
  },
  {
    name: "PostgreSQL / PgAdmin",
    description: "Base de données robuste avec interface de gestion intuitive",
    icon: "simple-icons:postgresql",
    features: [
      "Base de données performante",
      "Interface d'administration web",
      "Gestion des utilisateurs"
    ]
  },
  {
    name: "Nextcloud",
    description: "Espace de stockage sécurisé et collaboratif",
    icon: "simple-icons:nextcloud",
    features: [
      "Stockage sécurisé",
      "Partage de fichiers",
      "Collaboration en temps réel"
    ]
  },
  {
    name: "GLPI",
    description: "Gestion des ressources IT simplifiée",
    icon: "mdi:server",
    features: [
      "Gestion des tickets",
      "Inventaire des actifs",
      "Gestion des contrats"
    ]
  }
];

export default function ScriptsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nos Scripts Docker</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Découvrez nos scripts Docker prêts à l&apos;emploi pour déployer rapidement vos solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution) => (
          <Card key={solution.name} className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon={solution.icon} className="text-3xl" />
              <div>
                <h2 className="text-2xl font-bold">{solution.name}</h2>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc list-inside space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button 
                color="primary" 
                variant="flat"
                className="w-full"
                as="a"
                href={`/scripts/${solution.name.toLowerCase()}`}
              >
                Voir le script
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
} 