# Sistema de Controle de Estoque - EstoqueTI

Sistema completo de controle de estoque com leitor de código de barras e QR code, desenvolvido com tecnologias modernas e boas práticas de arquitetura.

## 🚀 Funcionalidades

- **Gestão de Produtos**: Cadastro, edição e exclusão de produtos
- **Controle de Estoque**: Entrada, saída e movimentação de itens
- **Leitura de Códigos**: Suporte a código de barras e QR code
- **Autenticação**: Sistema de login com JWT e controle de permissões
- **Painel Administrativo**: Interface para gestores e administradores
- **Relatórios**: Dashboard com métricas e relatórios de estoque
- **API REST**: Backend robusto para integração com outros sistemas
- **Responsivo**: Interface adaptável para desktop e mobile

## 🛠️ Stack Tecnológica

### Frontend
- React 18 + TypeScript
- Vite para build
- Tailwind CSS para estilização
- React Router para navegação
- React Hook Form para formulários
- Zustand para estado global
- Axios para requisições HTTP

### Backend
- Node.js + Express.js + TypeScript
- Prisma como ORM
- PostgreSQL como banco principal
- Redis para cache e sessões
- JWT para autenticação
- Bcrypt para hash de senhas

### Infraestrutura
- Docker para containerização
- Nginx como proxy reverso
- PM2 para gerenciamento de processos

## 📁 Estrutura do Projeto

```
EstoqueTI/
├── backend/                 # API Backend
│   ├── src/
│   │   ├── controllers/     # Controladores da API
│   │   ├── middleware/      # Middlewares (auth, validação)
│   │   ├── models/          # Modelos de dados
│   │   ├── routes/          # Rotas da API
│   │   ├── services/        # Lógica de negócio
│   │   ├── utils/           # Utilitários
│   │   └── app.ts           # Configuração da aplicação
│   ├── prisma/              # Schema e migrações do banco
│   └── package.json
├── frontend/                # Interface do usuário
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # Serviços de API
│   │   ├── stores/          # Gerenciamento de estado
│   │   ├── types/           # Tipos TypeScript
│   │   └── utils/           # Utilitários
│   │   └── App.tsx          # Componente principal
│   │   └── main.tsx         # Ponto de entrada
│   └── package.json
├── docker/                  # Configurações Docker
├── docs/                    # Documentação
└── package.json             # Scripts principais
```

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- PostgreSQL 14+
- Redis 6+
- Docker (opcional)

### 1. Clone o repositório
```bash
git clone https://github.com/coderlucianasena/EstoqueTI.git
cd EstoqueTI
```

### 2. Instale as dependências
```bash
npm run install:all
```

### 3. Configure as variáveis de ambiente
```bash
# Backend (.env)
cp backend/.env.example backend/.env
# Edite o arquivo com suas configurações

# Frontend (.env)
cp frontend/.env.example frontend/.env
```

### 4. Configure o banco de dados
```bash
npm run db:migrate
npm run db:seed
```

### 5. Execute o projeto
```bash
# Desenvolvimento (frontend + backend)
npm run dev

# Apenas backend
npm run dev:backend

# Apenas frontend
npm run dev:frontend
```

## 🔧 Configuração das Variáveis de Ambiente

### Backend (.env)
```env
# Servidor
PORT=3001
NODE_ENV=development

# Banco de dados
DATABASE_URL="postgresql://user:password@localhost:5432/estoque_ti"
REDIS_URL="redis://localhost:6379"

# JWT
JWT_SECRET="minha-chave"
JWT_EXPIRES_IN="24h"

# CORS
CORS_ORIGIN="http://localhost:3000"

# Upload
UPLOAD_PATH="./uploads"
MAX_FILE_SIZE=5242880
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=EstoqueTI
```

## 📱 Uso da Aplicação

### 1. Acesso
- **URL**: http://localhost:3000
- **Usuário padrão**: admin@estoque.com
- **Senha**: admin123

### 2. Funcionalidades Principais
- **Dashboard**: Visão geral do estoque
- **Produtos**: Gestão de produtos e categorias
- **Estoque**: Controle de entrada/saída
- **Relatórios**: Métricas e relatórios
- **Usuários**: Gestão de usuários e permissões

### 3. Leitura de Códigos
- **Código de Barras**: Use um leitor USB ou câmera
- **QR Code**: Use a câmera do dispositivo
- **Busca Manual**: Digite o código manualmente

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Testes do backend
npm run test:backend

# Testes do frontend
npm run test:frontend
```

## 📦 Deploy

### Docker
```bash
# Build das imagens
docker-compose build

# Executar
docker-compose up -d
```

### Produção
```bash
# Build de produção
npm run build

# Iniciar
npm start
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Email**: englucianasena@icloud.com
- **Documentação**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/coderlucianasena/EstoqueTI.git/issues)

## 🔮 Roadmap

- [ ] Integração com sistemas ERP
- [ ] App mobile nativo
- [ ] IA para previsão de estoque
- [ ] Integração com fornecedores
- [ ] Sistema de alertas por email/SMS
- [ ] Backup automático na nuvem
- [ ] Múltiplos idiomas
- [ ] Temas personalizáveis
