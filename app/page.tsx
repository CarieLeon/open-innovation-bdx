import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">ZECROM</h1>
        <p className="text-2xl text-gray-600 mb-8">"Automatisez. Déployez. Innovez."</p>
        <p className="text-xl max-w-3xl mx-auto">
          ZECROM est une entreprise spécialisée dans l'automatisation du déploiement de solutions informatiques à travers des scripts Docker prêts à l'emploi.
        </p>
      </section>

      {/* Pourquoi Choisir ZECROM */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pourquoi Choisir ZECROM ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon="mdi:clock-fast" className="text-2xl" />
              <h3 className="text-xl font-bold">Gain de temps</h3>
            </CardHeader>
            <CardBody>
              <p>Déploiements en quelques commandes</p>
            </CardBody>
          </Card>
          <Card className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon="mdi:puzzle" className="text-2xl" />
              <h3 className="text-xl font-bold">Modularité</h3>
            </CardHeader>
            <CardBody>
              <p>Scripts adaptables à vos besoins</p>
            </CardBody>
          </Card>
          <Card className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon="mdi:headset" className="text-2xl" />
              <h3 className="text-xl font-bold">Support</h3>
            </CardHeader>
            <CardBody>
              <p>Une communauté et une documentation à portée de main</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon="simple-icons:zabbix" className="text-2xl" />
              <h3 className="text-xl font-bold">Zabbix</h3>
            </CardHeader>
            <CardBody>
              <p>Supervision réseau en un clin d'œil</p>
            </CardBody>
          </Card>
          <Card className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon="simple-icons:postgresql" className="text-2xl" />
              <h3 className="text-xl font-bold">PostgreSQL / PgAdmin</h3>
            </CardHeader>
            <CardBody>
              <p>Base de données robuste avec interface de gestion intuitive</p>
            </CardBody>
          </Card>
          <Card className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon="simple-icons:nextcloud" className="text-2xl" />
              <h3 className="text-xl font-bold">Nextcloud</h3>
            </CardHeader>
            <CardBody>
              <p>Espace de stockage sécurisé et collaboratif</p>
            </CardBody>
          </Card>
          <Card className="p-4">
            <CardHeader className="flex gap-3">
              <Icon icon="mdi:server" className="text-2xl" />
              <h3 className="text-xl font-bold">GLPI</h3>
            </CardHeader>
            <CardBody>
              <p>Gestion des ressources IT simplifiée</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
        <p className="text-xl mb-8">Découvrez nos scripts et commencez à automatiser dès aujourd'hui</p>
        <a href="/scripts" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
          Voir nos scripts
        </a>
      </section>
    </main>
  );
} 