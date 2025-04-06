'use client';

import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const nextcloudYaml = `version: '3'
services:
  nextcloud:
    image: nextcloud:latest
    container_name: nextcloud
    restart: always
    ports:
      - "8080:80"
    volumes:
      - nextcloud_data:/var/www/html
      - nextcloud_config:/var/www/html/config
      - nextcloud_apps:/var/www/html/apps
    depends_on:
      - db
    environment:
      - MYSQL_HOST=db
      - MYSQL_DATABASE=\${MYSQL_DATABASE:-nextcloud}
      - MYSQL_USER=\${MYSQL_USER:-nextcloud}
      - MYSQL_PASSWORD=\${MYSQL_PASSWORD:-password}
      - NEXTCLOUD_ADMIN_USER=\${NEXTCLOUD_ADMIN_USER:-admin}
      - NEXTCLOUD_ADMIN_PASSWORD=\${NEXTCLOUD_ADMIN_PASSWORD:-admin}

  db:
    image: mariadb:10.6
    container_name: nextcloud_db
    restart: always
    volumes:
      - nextcloud_db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=\${MYSQL_ROOT_PASSWORD:-root}
      - MYSQL_DATABASE=\${MYSQL_DATABASE:-nextcloud}
      - MYSQL_USER=\${MYSQL_USER:-nextcloud}
      - MYSQL_PASSWORD=\${MYSQL_PASSWORD:-password}

volumes:
  nextcloud_data:
  nextcloud_config:
  nextcloud_apps:
  nextcloud_db:`;

export default function NextcloudPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Nextcloud</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            Nextcloud est une plateforme de stockage et de collaboration open source qui vous permet de stocker, partager et synchroniser vos fichiers de manière sécurisée.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Créez un nouveau dossier pour votre installation Nextcloud</li>
            <li>Copiez le contenu YAML ci-dessous dans un fichier docker-compose.yml</li>
            <li>Créez un fichier .env (optionnel) pour personnaliser les variables d&apos;environnement</li>
            <li>Exécutez la commande : docker-compose up -d</li>
            <li>Accédez à l&apos;interface web à l&apos;adresse : http://localhost:8080</li>
          </ol>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <h3 className="text-xl font-bold">Configuration</h3>
          </CardHeader>
          <CardBody>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">{nextcloudYaml}</pre>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Variables d&apos;environnement optionnelles :</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>MYSQL_DATABASE : Nom de la base de données (par défaut : nextcloud)</li>
                <li>MYSQL_USER : Utilisateur de la base de données (par défaut : nextcloud)</li>
                <li>MYSQL_PASSWORD : Mot de passe de la base de données (par défaut : password)</li>
                <li>NEXTCLOUD_ADMIN_USER : Nom d&apos;utilisateur administrateur (par défaut : admin)</li>
                <li>NEXTCLOUD_ADMIN_PASSWORD : Mot de passe administrateur (par défaut : admin)</li>
                <li>MYSQL_ROOT_PASSWORD : Mot de passe root de la base de données (par défaut : root)</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Button
          color="primary"
          variant="solid"
          className="w-full"
          onClick={() => {
            const blob = new Blob([nextcloudYaml], { type: 'text/yaml' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'nextcloud.yml';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }}
        >
          Télécharger le fichier YAML
        </Button>
      </div>
    </div>
  );
} 