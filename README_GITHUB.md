# 🚀 Prattica Website - Repositório GitHub

[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://prattica.ai)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org)

---

## 📌 Sobre o Projeto

**Prattica** é uma consultoria e plataforma de automação e inteligência analítica voltada para estratégia, gestão e inovação. Este repositório contém o site institucional completo, desenvolvido com React 19, TypeScript e Tailwind CSS.

**Slogan:** "Inteligência que move decisões."

---

## ✨ Características Principais

- ✅ **8 Páginas Completas:** Home, Produtos, Sobre, Soluções, Metodologia, Academy, Radar (Blog), Contato
- ✅ **Design Moderno:** Minimalista, tecnológico e humano com cores #171717, #00C2A0, branco e cinza
- ✅ **SEO Otimizado:** Schema.org, meta tags, sitemap, robots.txt
- ✅ **Segurança:** Headers de segurança, HTTPS obrigatório, validação de formulários
- ✅ **Performance:** Build otimizado (1.3MB), Gzip compression, lazy loading
- ✅ **Responsividade:** 100% mobile-first, testado em todos os breakpoints
- ✅ **Chat IA:** Prattica Assistant integrado (pronto para Manus API)
- ✅ **Documentação:** Completa com guias de deployment

---

## 🛠️ Stack Técnico

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 19 | Framework frontend |
| **TypeScript** | 5.6 | Tipagem estática |
| **Tailwind CSS** | 4 | Estilização |
| **Vite** | 7.1 | Build tool |
| **Node.js** | 18+ | Runtime |
| **Express** | 4.21 | Servidor |
| **Wouter** | 3.3 | Roteamento |
| **shadcn/ui** | Latest | Componentes UI |

---

## 📁 Estrutura do Projeto

```
prattica-website/
├── client/
│   ├── public/               # Arquivos estáticos
│   │   ├── robots.txt        # SEO crawler rules
│   │   ├── sitemap.xml       # XML sitemap
│   │   ├── manifest.json     # PWA manifest
│   │   └── images/           # Imagens do site
│   ├── src/
│   │   ├── pages/            # Páginas (Home, Produtos, etc)
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utilitários
│   │   ├── App.tsx           # Roteamento principal
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Estilos globais
│   └── index.html            # HTML template
├── server/
│   └── index.ts              # Servidor Express
├── dist/                      # Build de produção
├── Dockerfile                 # Containerização
├── docker-compose.yml         # Orquestração
├── nginx.conf                 # Configuração Nginx
├── DEPLOYMENT_GUIDE.md        # Guia de deployment
├── HOSTINGER_DEPLOYMENT.md    # Guia Hostinger
├── AUDIT_REPORT.md            # Relatório de auditoria
├── TODO.md                    # Tarefas críticas e futuras
└── package.json               # Dependências
```

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm
- Git

### Instalação Local

```bash
# 1. Clonar repositório
git clone https://github.com/seu-usuario/prattica-website.git
cd prattica-website

# 2. Instalar dependências
pnpm install

# 3. Iniciar servidor de desenvolvimento
pnpm dev

# 4. Abrir no navegador
# http://localhost:5173
```

### Build para Produção

```bash
# 1. Fazer build
pnpm build

# 2. Testar build localmente
pnpm preview

# 3. Iniciar servidor de produção
pnpm start
```

---

## 📋 Tarefas Críticas vs. Não-Críticas

### 🚨 CRÍTICO - Fazer ANTES do Deploy

1. **Registrar domínio** `prattica.ai`
2. **Apontar DNS** para Hostinger
3. **Gerar certificado SSL** (Let's Encrypt)
4. **Fazer upload** dos arquivos
5. **Instalar dependências** no servidor
6. **Iniciar aplicação** com PM2
7. **Testar acesso** via HTTPS
8. **Validar Lighthouse** > 80
9. **Validar Security Headers** (Observatory A+)

Veja **[TODO.md](TODO.md)** para lista completa.

### ⚠️ IMPORTANTE - Fazer APÓS Deploy

1. **Integrar serviço de email** (SendGrid, Mailgun, AWS SES)
2. **Conectar Manus API** para Prattica Assistant
3. **Configurar Google Search Console**
4. **Configurar Analytics** (Umami/Google Analytics)
5. **Configurar Uptime Monitoring**

---

## 📚 Documentação

| Documento | Descrição |
|-----------|-----------|
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Guia completo de deployment em diferentes plataformas |
| **[HOSTINGER_DEPLOYMENT.md](HOSTINGER_DEPLOYMENT.md)** | Guia passo a passo específico para Hostinger |
| **[AUDIT_REPORT.md](AUDIT_REPORT.md)** | Relatório completo de auditoria técnica |
| **[TODO.md](TODO.md)** | Tarefas críticas e não-críticas |
| **[SECURITY_HEADERS.md](SECURITY_HEADERS.md)** | Configurações de segurança |

---

## 🌐 Páginas do Site

### Home (`/`)
- Hero section com tagline "Inteligência, automação e estratégia em movimento"
- Destaque para Athena Clinic SO
- Seção de soluções
- Metodologia Prattica DNA
- CTA "Agende uma demonstração"

### Produtos (`/produtos`)
- Athena Clinic SO - SaaS para clínicas com IA
- Produtos em desenvolvimento (Retail OS, Legal Mind, Agro Sense)
- Features detalhadas
- Pricing (futuro)

### Sobre (`/sobre`)
- Missão, Visão e Valores
- Manifesto Legacy
- Cultura Prattica

### Soluções (`/solucoes`)
- IA Analítica
- Academy
- Automação
- Consultoria Estratégica
- Portal do Cliente

### Metodologia (`/metodologia`)
- 5 Fases Prattica DNA
- Infográfico animado
- Descrições detalhadas

### Academy (`/academy`)
- Trilhas de aprendizado
- Workshops corporativos
- Treinamentos

### Radar (`/radar`)
- Blog com artigos e estudos
- Relatórios técnicos
- Insights de mercado

### Contato (`/contato`)
- Formulário com validação
- Informações de contato
- Links para redes sociais
- WhatsApp direto

---

## 🔐 Segurança

### Headers Implementados
- ✅ Strict-Transport-Security (HSTS)
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Content-Security-Policy

### Validações
- ✅ Validação de formulários no frontend
- ✅ Sanitização de inputs
- ✅ HTTPS obrigatório
- ✅ Sem hardcoded secrets

---

## 📊 Performance

| Métrica | Esperado | Meta |
|---------|----------|------|
| Lighthouse Performance | 85-90 | > 80 |
| Lighthouse Accessibility | 95+ | > 90 |
| Lighthouse Best Practices | 95+ | > 90 |
| Lighthouse SEO | 100 | 100 |
| First Contentful Paint | ~1.5s | < 2s |
| Largest Contentful Paint | ~2.5s | < 2.5s |

---

## 🐳 Docker

### Build da Imagem
```bash
docker build -t prattica-website:latest .
```

### Executar Container
```bash
docker run -d \
  --name prattica \
  -p 3000:3000 \
  -e NODE_ENV=production \
  prattica-website:latest
```

### Usar Docker Compose
```bash
docker-compose up -d
```

---

## 🔄 CI/CD (GitHub Actions)

Adicionar workflow automático para:
- ✅ Testes (Vitest)
- ✅ Linting (ESLint)
- ✅ Build
- ✅ Deploy automático

*Implementação futura - veja [TODO.md](TODO.md)*

---

## 📝 Variáveis de Ambiente

```env
# Produção
NODE_ENV=production
PORT=3000
VITE_APP_TITLE=Prattica - Inteligência que move decisões
VITE_APP_LOGO=https://prattica.ai/logo.png
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=seu-website-id

# Opcional (futuro)
# MANUS_API_KEY=sk-...
# MANUS_API_ENDPOINT=https://api.manus.ai
# SENDGRID_API_KEY=SG-...
```

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

- **Email:** contato@prattica.ai
- **WhatsApp:** +55 (11) 99999-9999
- **Website:** https://prattica.ai
- **LinkedIn:** linkedin.com/company/prattica

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🎯 Roadmap

### v1.0.0 (Atual)
- ✅ Site institucional completo
- ✅ SEO otimizado
- ✅ Design responsivo
- ✅ Documentação completa

### v1.1.0 (Próximo)
- ⏳ Integração com Manus API
- ⏳ Serviço de email real
- ⏳ Analytics avançado
- ⏳ PWA completo

### v2.0.0 (Futuro)
- 📋 Portal do Cliente (login/dashboard)
- 📋 Área de download de recursos
- 📋 Integração com CRM
- 📋 Chatbot avançado com IA

---

## 👥 Autores

- **CTO:** Manus IA
- **Empresa:** Prattica - Inteligência que move decisões

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS.

---

**Última atualização:** 23 de Dezembro de 2025  
**Versão:** 1.0.0  
**Status:** ✅ Production Ready
