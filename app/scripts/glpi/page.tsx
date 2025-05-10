import { Card, CardBody, CardHeader, Button, Code } from "@heroui/react";
import { Icon } from "@iconify/react";

const glpiYaml = `version: '3'
services:
  glpi:
    image: glpi:latest    
    container_name: glpi_pp2
    restart: always
    ports:
      - "8080:80"
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=glpidb
      - MYSQL_USER=glpiuser
      - MYSQL_PASSWORD=glpipassword
    depends_on:
      - mysql
    command: ["bash", "-c", "apt-get update && apt-get install -y mariadb-client && apache2-foreground"]

  mysql:
    image: mysql:5.7
    container_name: mysql-glpi2
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=glpidb
      - MYSQL_USER=glpiuser
      - MYSQL_PASSWORD=glpipassword`;

export default function GlpiPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Icon icon="mdi:server" className="text-4xl text-primary" />
          <h1 className="text-4xl font-bold">GLPI</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold">Description</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 mb-4">
              GLPI est un outil de gestion des ressources IT qui vous permet de gérer efficacement votre parc informatique.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Gestion des tickets d&apos;incident</li>
              <li>Inventaire des actifs informatiques</li>
              <li>Gestion des contrats et des fournisseurs</li>
              <li>Suivi des interventions</li>
              <li>Rapports et statistiques</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold">Installation</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 mb-4">
              Pour installer GLPI avec Docker, suivez ces étapes :
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-600">
              <li>Créez un nouveau dossier pour votre installation GLPI</li>
              <li>Copiez le contenu du fichier docker-compose.yml ci-dessous</li>
              <li>Exécutez la commande : <Code>docker-compose up -d</Code></li>
              <li>Accédez à l&apos;interface web via : <Code>http://localhost:8080</Code></li>
              <li>Identifiants par défaut : admin / admin</li>
            </ol>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Configuration</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <p className="text-gray-600">
                Voici le fichier docker-compose.yml à utiliser :
              </p>
              <Code className="w-full overflow-x-auto">
                {glpiYaml}
              </Code>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">
                  Identifiants par défaut :
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Base de données : glpidb</li>
                  <li>Utilisateur : glpiuser</li>
                  <li>Mot de passe : glpipassword</li>
                  <li>Root password : root</li>
                </ul>
              </div>
              <Button 
                color="primary" 
                className="mt-4"
                as="a"
                href={`data:text/yaml;charset=utf-8,${encodeURIComponent(glpiYaml)}`}
                download="glpi.yml"
              >
                Télécharger le fichier
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
} 