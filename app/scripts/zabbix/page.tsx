import { Card, CardBody, CardHeader, Button, Code } from "@heroui/react";
import { Icon } from "@iconify/react";

const zabbixYaml = `version: '3.7'

services:
  zabbix-server-pgsql:
    image: zabbix/zabbix-server-pgsql:alpine-6.4-latest
    networks:
      - zabbix-net
    environment:
      - DB_SERVER_HOST=postgres-server
      - POSTGRES_USER=zabbix
      - POSTGRES_PASSWORD=zabbix_pwd
      - POSTGRES_DB=zabbix
      - ZBX_ENABLE_SNMP_TRAPS=true
    ports:
      - "10051:10051"
    volumes:
      - ./zabbix-server-pgsql:/var/lib/zabbix
    depends_on:
      - postgres-server

  postgres-server:
    image: postgres:latest
    networks:
      - zabbix-net
    environment:
      - POSTGRES_USER=zabbix
      - POSTGRES_PASSWORD=zabbix_pwd
      - POSTGRES_DB=zabbix
    volumes:
      - ./postgres-data:/var/lib/postgresql/data

  zabbix-web-nginx-pgsql:
    image: zabbix/zabbix-web-nginx-pgsql:alpine-6.4-latest
    networks:
      - zabbix-net
    ports:
      - "80:8080"
      - "443:8443"
    environment:
      - ZBX_SERVER_HOST=zabbix-server-pgsql
      - DB_SERVER_HOST=postgres-server
      - POSTGRES_USER=zabbix
      - POSTGRES_PASSWORD=zabbix_pwd
      - POSTGRES_DB=zabbix
    depends_on:
      - zabbix-server-pgsql

networks:
  zabbix-net:
    driver: bridge`;

export default function ZabbixPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Icon icon="simple-icons:zabbix" className="text-4xl text-primary" />
          <h1 className="text-4xl font-bold">Zabbix</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold">Description</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 mb-4">
              Zabbix est une solution de supervision réseau complète qui vous permet de surveiller l&apos;ensemble de votre infrastructure.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Surveillance complète du réseau</li>
              <li>Alertes en temps réel</li>
              <li>Tableaux de bord personnalisables</li>
              <li>Support SNMP</li>
              <li>Interface web intuitive</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold">Installation</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 mb-4">
              Pour installer Zabbix avec Docker, suivez ces étapes :
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-600">
              <li>Créez un nouveau dossier pour votre installation Zabbix</li>
              <li>Copiez le contenu du fichier docker-compose.yml ci-dessous</li>
              <li>Exécutez la commande : <Code>docker-compose up -d</Code></li>
              <li>Accédez à l&apos;interface web via : <Code>http://localhost:80</Code></li>
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
                {zabbixYaml}
              </Code>
              <Button 
                color="primary" 
                className="mt-4"
                as="a"
                href={`data:text/yaml;charset=utf-8,${encodeURIComponent(zabbixYaml)}`}
                download="zabbix.yml"
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
