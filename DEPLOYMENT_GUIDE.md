# 🚀 Guia Completo de Deployment - Prattica Website

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Pré-requisitos](#pré-requisitos)
3. [Opções de Hospedagem](#opções-de-hospedagem)
4. [Configuração de Domínio](#configuração-de-domínio)
5. [Deploy em Diferentes Plataformas](#deploy-em-diferentes-plataformas)
6. [Variáveis de Ambiente](#variáveis-de-ambiente)
7. [Testes Pós-Deploy](#testes-pós-deploy)
8. [Monitoramento e Manutenção](#monitoramento-e-manutenção)

---

## 🎯 Visão Geral

O site Prattica é uma aplicação **Single Page Application (SPA)** construída com:
- **Frontend:** React 19 + TypeScript + Tailwind CSS 4
- **Backend:** Node.js + Express (para servir arquivos estáticos)
- **Build:** Vite + esbuild
- **Tamanho:** 1.3MB (dist/)

### Características Principais
- ✅ 8 páginas totalmente funcionais
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ SEO otimizado (Schema.org, meta tags, sitemap)
- ✅ Segurança (headers de segurança, HTTPS obrigatório)
- ✅ Performance (Gzip, cache, lazy loading)

---

## ✅ Pré-requisitos

Antes de fazer deploy, certifique-se de:

### Domínio
- [ ] Domínio `prattica.ai` registrado
- [ ] Acesso ao painel de controle DNS

### Certificado SSL
- [ ] Certificado SSL/TLS válido (Let's Encrypt é gratuito)
- [ ] Certificado não expirado
- [ ] Chave privada segura

### Variáveis de Ambiente
- [ ] `VITE_APP_TITLE` definido
- [ ] `VITE_APP_LOGO` definido
- [ ] `VITE_ANALYTICS_ENDPOINT` configurado
- [ ] `VITE_ANALYTICS_WEBSITE_ID` configurado
- [ ] `NODE_ENV=production`
- [ ] `PORT` definido (padrão: 3000)

### Acesso ao Servidor
- [ ] SSH ou acesso administrativo
- [ ] Node.js 18+ instalado
- [ ] pnpm instalado
- [ ] Git instalado (para CI/CD)

---

## 🏢 Opções de Hospedagem

### 1. **Manus (Recomendado)**
**Vantagens:**
- Integração nativa com o projeto
- Deploy automático via Git
- Gerenciamento de domínio integrado
- SSL automático
- Suporte dedicado

**Desvantagens:**
- Custo mensal

**Passos:**
1. Fazer login no painel Manus
2. Conectar repositório Git
3. Configurar variáveis de ambiente
4. Fazer deploy com um clique

---

### 2. **Vercel**
**Vantagens:**
- Deploy automático via Git
- Performance otimizada
- Serverless functions
- Free tier disponível

**Desvantagens:**
- Configuração mais complexa para Node.js

**Passos:**
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel --prod
```

---

### 3. **Netlify**
**Vantagens:**
- Deploy automático via Git
- Free tier generoso
- Fácil configuração

**Desvantagens:**
- Limitações para aplicações Node.js puras

**Passos:**
```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Fazer login
netlify login

# 3. Deploy
netlify deploy --prod
```

---

### 4. **Railway**
**Vantagens:**
- Suporte completo a Node.js
- Fácil escalabilidade
- Banco de dados integrado
- Free tier com créditos

**Passos:**
1. Criar conta em railway.app
2. Conectar repositório Git
3. Configurar variáveis de ambiente
4. Deploy automático

---

### 5. **Render**
**Vantagens:**
- Suporte completo a Node.js
- Free tier disponível
- Auto-deploy via Git
- HTTPS automático

**Passos:**
1. Criar conta em render.com
2. Criar novo Web Service
3. Conectar repositório Git
4. Configurar variáveis de ambiente
5. Deploy automático

---

### 6. **DigitalOcean / AWS / Google Cloud (VPS)**
**Vantagens:**
- Controle total
- Escalabilidade ilimitada
- Custo previsível

**Desvantagens:**
- Configuração manual
- Requer conhecimento de DevOps

**Passos:**
1. Provisionar servidor (Ubuntu 22.04 recomendado)
2. Instalar Node.js e pnpm
3. Clonar repositório
4. Instalar dependências: `pnpm install --prod`
5. Fazer build: `pnpm build`
6. Configurar reverse proxy (Nginx/Apache)
7. Configurar SSL com Let's Encrypt
8. Iniciar aplicação com PM2 ou similar

---

## 🌐 Configuração de Domínio

### 1. Registrar Domínio
- Usar registrador como GoDaddy, Namecheap, ou similar
- Registrar `prattica.ai`

### 2. Configurar DNS

#### Apontamento Simples (A Record)
```
Tipo: A
Nome: @
Valor: IP_DO_SERVIDOR
TTL: 3600
```

#### Apontamento com CNAME (para Vercel, Netlify, etc.)
```
Tipo: CNAME
Nome: www
Valor: seu-dominio.vercel.app (ou similar)
TTL: 3600
```

#### Apontamento de Email (MX Record)
```
Tipo: MX
Nome: @
Valor: mail.seu-dominio.com
Prioridade: 10
TTL: 3600
```

### 3. Validar Configuração DNS
```bash
# Verificar propagação DNS
nslookup prattica.ai

# Ou usar dig
dig prattica.ai

# Ou usar online: https://mxtoolbox.com
```

---

## 🚀 Deploy em Diferentes Plataformas

### Deploy em VPS (Ubuntu/Debian)

#### Passo 1: Preparar Servidor
```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar pnpm
npm install -g pnpm

# Instalar Nginx
sudo apt install -y nginx

# Instalar Certbot (Let's Encrypt)
sudo apt install -y certbot python3-certbot-nginx
```

#### Passo 2: Clonar e Preparar Projeto
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/prattica-website.git
cd prattica-website

# Instalar dependências
pnpm install --prod

# Fazer build
pnpm build
```

#### Passo 3: Configurar Nginx
```bash
# Copiar configuração
sudo cp nginx.conf /etc/nginx/sites-available/prattica.ai

# Ativar site
sudo ln -s /etc/nginx/sites-available/prattica.ai /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

#### Passo 4: Configurar SSL
```bash
# Gerar certificado Let's Encrypt
sudo certbot certonly --nginx -d prattica.ai -d www.prattica.ai

# Renovação automática
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

#### Passo 5: Iniciar Aplicação
```bash
# Instalar PM2 (gerenciador de processos)
npm install -g pm2

# Iniciar aplicação
pm2 start dist/index.js --name "prattica"

# Salvar configuração
pm2 save

# Ativar auto-start
pm2 startup
```

#### Passo 6: Verificar Status
```bash
# Ver logs
pm2 logs prattica

# Ver status
pm2 status

# Monitorar
pm2 monit
```

---

### Deploy com Docker

#### Passo 1: Fazer Build da Imagem
```bash
docker build -t prattica-website:latest .
```

#### Passo 2: Executar Container
```bash
docker run -d \
  --name prattica \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e VITE_APP_TITLE="Prattica - Inteligência que move decisões" \
  -e VITE_ANALYTICS_ENDPOINT="https://analytics.example.com" \
  -e VITE_ANALYTICS_WEBSITE_ID="seu-id" \
  prattica-website:latest
```

#### Passo 3: Usar Docker Compose
```bash
docker-compose up -d
```

---

## 🔐 Variáveis de Ambiente

### Configurar Variáveis no Servidor

#### Método 1: Arquivo .env
```bash
# Criar arquivo .env
cat > /home/ubuntu/prattica-website/.env << EOF
NODE_ENV=production
PORT=3000
VITE_APP_TITLE=Prattica - Inteligência que move decisões
VITE_APP_LOGO=https://prattica.ai/logo.png
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=seu-website-id
EOF

# Proteger arquivo
chmod 600 /home/ubuntu/prattica-website/.env
```

#### Método 2: Variáveis de Sistema
```bash
# Adicionar ao .bashrc ou .profile
export NODE_ENV=production
export PORT=3000
export VITE_APP_TITLE="Prattica - Inteligência que move decisões"
```

#### Método 3: Painel de Controle
- Usar interface da plataforma de hospedagem
- Exemplo: Vercel, Netlify, Railway, etc.

---

## ✅ Testes Pós-Deploy

### 1. Testes de Acesso
```bash
# Verificar se site está acessível
curl -I https://prattica.ai

# Deve retornar: HTTP/2 200
```

### 2. Testes de Performance
- **Google PageSpeed Insights:** https://pagespeed.web.dev
- **GTmetrix:** https://gtmetrix.com
- **WebPageTest:** https://www.webpagetest.org

**Meta:** Score > 90 em todas as métricas

### 3. Testes de Segurança
- **Mozilla Observatory:** https://observatory.mozilla.org
- **SSL Labs:** https://www.ssllabs.com/ssltest/
- **Security Headers:** https://securityheaders.com

**Meta:** A+ em todas as verificações

### 4. Testes de SEO
- **Google Search Console:** https://search.google.com/search-console
- **Schema.org Validator:** https://validator.schema.org
- **Mobile Friendly Test:** https://search.google.com/test/mobile-friendly

### 5. Testes Funcionais
- [ ] Todas as páginas carregam
- [ ] Links internos funcionam
- [ ] Formulário de contato funciona
- [ ] Chat IA (Prattica Assistant) funciona
- [ ] Responsividade em mobile/tablet/desktop
- [ ] Imagens carregam corretamente
- [ ] Fontes carregam corretamente

### 6. Testes de Compatibilidade
- [ ] Chrome (desktop e mobile)
- [ ] Firefox (desktop e mobile)
- [ ] Safari (desktop e mobile)
- [ ] Edge (desktop)

---

## 📊 Monitoramento e Manutenção

### 1. Monitoramento de Uptime
```bash
# Usar ferramentas como:
# - Uptime Robot (gratuito)
# - Pingdom
# - Datadog
# - New Relic
```

### 2. Monitoramento de Performance
```bash
# Configurar alertas para:
# - Tempo de resposta > 2s
# - Taxa de erro > 1%
# - CPU > 80%
# - Memória > 80%
```

### 3. Logs e Análise
```bash
# Ver logs em tempo real
pm2 logs prattica

# Ou com Nginx
tail -f /var/log/nginx/prattica-access.log
tail -f /var/log/nginx/prattica-error.log
```

### 4. Backup Automático
```bash
# Fazer backup diário
0 2 * * * tar -czf /backup/prattica-$(date +\%Y\%m\%d).tar.gz /home/ubuntu/prattica-website
```

### 5. Atualizações
```bash
# Verificar atualizações de dependências
pnpm outdated

# Atualizar dependências
pnpm update

# Fazer rebuild
pnpm build

# Reiniciar aplicação
pm2 restart prattica
```

---

## 🆘 Troubleshooting

### Problema: Site não carrega
**Solução:**
1. Verificar se servidor está rodando: `pm2 status`
2. Verificar logs: `pm2 logs prattica`
3. Verificar DNS: `nslookup prattica.ai`
4. Verificar firewall: `sudo ufw status`

### Problema: HTTPS não funciona
**Solução:**
1. Verificar certificado: `sudo certbot certificates`
2. Renovar certificado: `sudo certbot renew`
3. Verificar Nginx: `sudo nginx -t`

### Problema: Performance lenta
**Solução:**
1. Verificar recursos: `top`, `free -h`
2. Verificar cache: Limpar cache do navegador
3. Verificar CDN: Usar CloudFlare ou similar
4. Otimizar imagens: Usar WebP

### Problema: Formulário não envia
**Solução:**
1. Verificar integração de email (TODO)
2. Verificar logs do servidor
3. Testar com curl: `curl -X POST https://prattica.ai/api/contact`

---

## 📞 Suporte e Contato

Para dúvidas ou problemas:
- **Email:** contato@prattica.ai
- **WhatsApp:** +55 (11) 99999-9999
- **LinkedIn:** linkedin.com/company/prattica

---

## 📝 Checklist Final

Antes de considerar o deploy completo:

- [ ] Domínio registrado e DNS configurado
- [ ] Certificado SSL válido
- [ ] Variáveis de ambiente configuradas
- [ ] Build de produção testado localmente
- [ ] Site acessível via HTTPS
- [ ] Todas as páginas carregam corretamente
- [ ] Formulário de contato funciona
- [ ] Performance > 90 (Lighthouse)
- [ ] Segurança A+ (Observatory)
- [ ] SEO validado (Schema.org)
- [ ] Monitoramento ativo
- [ ] Backups configurados
- [ ] Documentação atualizada

---

**Última atualização:** 23 de Dezembro de 2025
**Status:** Pronto para Deploy
**Versão:** 1.0.0
