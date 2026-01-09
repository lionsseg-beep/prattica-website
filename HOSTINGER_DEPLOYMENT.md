# 🚀 Guia Passo a Passo: Deploy no Hostinger

**Nível de Dificuldade:** Intermediário  
**Tempo Estimado:** 30-45 minutos  
**Plataforma:** Hostinger (Shared Hosting ou VPS)

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- [ ] Conta ativa no Hostinger
- [ ] Domínio `prattica.ai` apontando para Hostinger
- [ ] Acesso ao painel de controle do Hostinger (cPanel/hPanel)
- [ ] Acesso SSH ao servidor (se disponível)
- [ ] Cliente SFTP (FileZilla, WinSCP, ou similar)
- [ ] Arquivo `dist/` do projeto pronto (resultado do `pnpm build`)

---

## 🔑 Passo 1: Acessar o Painel Hostinger

### 1.1 Login no Hostinger
1. Acesse [hostinger.com.br](https://www.hostinger.com.br)
2. Clique em **"Entrar"** (canto superior direito)
3. Insira seu email e senha
4. Clique em **"Entrar"**

### 1.2 Acessar o Gerenciador de Hospedagem
1. No painel principal, localize seu domínio `prattica.ai`
2. Clique em **"Gerenciar"** ou **"Manage"**
3. Você será levado ao painel de controle (cPanel ou hPanel)

---

## 📁 Passo 2: Preparar os Arquivos

### 2.1 Fazer Build Local
```bash
# No seu computador, execute:
cd /home/ubuntu/prattica-website
pnpm build

# Isso criará a pasta "dist/" com todos os arquivos prontos
```

### 2.2 Verificar Arquivos
```bash
# Verifique se os arquivos estão prontos:
ls -la dist/

# Deve conter:
# - dist/public/  (arquivos estáticos)
# - dist/index.js (servidor Node.js)
```

---

## 📤 Passo 3: Fazer Upload dos Arquivos

### Opção A: Usando SFTP (Recomendado)

#### 3A.1 Obter Credenciais SFTP
1. No painel Hostinger, vá para **"Contas"** → **"Conta FTP"**
2. Procure por **"Criar Conta FTP"** ou **"Adicionar Conta FTP"**
3. Preencha:
   - **Nome da Conta:** prattica
   - **Diretório:** public_html/prattica.ai (ou similar)
   - **Senha:** Gere uma senha forte
4. Clique em **"Criar"**
5. Anote as credenciais:
   - **Host:** ftp.seu-dominio.com
   - **Usuário:** seu-usuario@prattica.ai
   - **Senha:** sua-senha
   - **Porta:** 22 (para SFTP)

#### 3A.2 Conectar com FileZilla
1. Abra **FileZilla**
2. Vá para **Arquivo** → **Gerenciador de Sites**
3. Clique em **"Novo Site"**
4. Preencha:
   - **Nome:** Prattica Hostinger
   - **Protocolo:** SFTP
   - **Host:** ftp.seu-dominio.com
   - **Porta:** 22
   - **Tipo de Logon:** Normal
   - **Usuário:** seu-usuario@prattica.ai
   - **Senha:** sua-senha
5. Clique em **"Conectar"**

#### 3A.3 Fazer Upload
1. No painel esquerdo (seu computador), navegue até `/home/ubuntu/prattica-website/dist/`
2. Selecione todos os arquivos e pastas
3. Arraste para o painel direito (servidor)
4. Aguarde o upload completar

### Opção B: Usando Git (Se Disponível)

#### 3B.1 Conectar Repositório Git
1. No painel Hostinger, vá para **"Ferramentas"** → **"Git"**
2. Clique em **"Conectar Repositório"**
3. Selecione **"GitHub"** (ou seu provedor)
4. Autentique e selecione o repositório `prattica-website`
5. Clique em **"Conectar"**

#### 3B.2 Fazer Deploy
1. Clique em **"Deploy"** ou **"Sincronizar"**
2. Selecione a branch `main`
3. Aguarde o deploy completar

---

## ⚙️ Passo 4: Configurar Node.js e Dependências

### 4.1 Acessar SSH (Se Disponível)
1. No painel Hostinger, vá para **"Contas"** → **"SSH"**
2. Clique em **"Ativar SSH"** (se não estiver ativo)
3. Anote as credenciais:
   - **Host:** seu-dominio.com
   - **Usuário:** seu-usuario
   - **Porta:** 22

### 4.2 Conectar via SSH
```bash
# No seu terminal local:
ssh seu-usuario@seu-dominio.com -p 22

# Insira a senha quando solicitado
```

### 4.3 Navegar para o Diretório
```bash
# Ir para o diretório do projeto
cd public_html/prattica.ai

# Ou onde você fez upload dos arquivos
```

### 4.4 Verificar Node.js
```bash
# Verificar se Node.js está instalado
node --version

# Se não estiver, solicite ao suporte Hostinger para instalar
```

### 4.5 Instalar Dependências de Produção
```bash
# Instalar apenas dependências de produção
npm install --production

# Ou com pnpm (se disponível)
pnpm install --prod
```

---

## 🌐 Passo 5: Configurar Nginx/Apache

### Opção A: Nginx (Recomendado)

#### 5A.1 Criar Arquivo de Configuração
```bash
# Criar arquivo de configuração
sudo nano /etc/nginx/sites-available/prattica.ai

# Colar o conteúdo do nginx.conf fornecido
```

#### 5A.2 Ativar Site
```bash
# Criar link simbólico
sudo ln -s /etc/nginx/sites-available/prattica.ai /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Opção B: Apache

#### 5B.1 Ativar Módulos Necessários
```bash
# Ativar mod_rewrite
sudo a2enmod rewrite

# Ativar mod_proxy (para Node.js)
sudo a2enmod proxy
sudo a2enmod proxy_http
```

#### 5B.2 Criar Virtual Host
```bash
# Criar arquivo de configuração
sudo nano /etc/apache2/sites-available/prattica.ai.conf

# Adicionar:
<VirtualHost *:80>
    ServerName prattica.ai
    ServerAlias www.prattica.ai
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

#### 5B.3 Ativar Virtual Host
```bash
# Ativar site
sudo a2ensite prattica.ai

# Testar configuração
sudo apache2ctl configtest

# Reiniciar Apache
sudo systemctl restart apache2
```

---

## 🔒 Passo 6: Configurar SSL/TLS

### 6.1 Gerar Certificado Let's Encrypt
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Gerar certificado
sudo certbot certonly --nginx -d prattica.ai -d www.prattica.ai

# Seguir as instruções na tela
```

### 6.2 Configurar Renovação Automática
```bash
# Ativar serviço de renovação
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Testar renovação
sudo certbot renew --dry-run
```

---

## 🚀 Passo 7: Iniciar Aplicação

### 7.1 Instalar PM2
```bash
# Instalar PM2 globalmente
npm install -g pm2

# Ou com pnpm
pnpm add -g pm2
```

### 7.2 Iniciar Aplicação
```bash
# Navegar para o diretório
cd /home/seu-usuario/public_html/prattica.ai

# Iniciar aplicação
pm2 start dist/index.js --name "prattica"

# Salvar configuração
pm2 save

# Ativar auto-start
pm2 startup
```

### 7.3 Verificar Status
```bash
# Ver status
pm2 status

# Ver logs
pm2 logs prattica

# Monitorar em tempo real
pm2 monit
```

---

## 🌍 Passo 8: Configurar Variáveis de Ambiente

### 8.1 Criar Arquivo .env
```bash
# Criar arquivo .env
nano /home/seu-usuario/public_html/prattica.ai/.env

# Adicionar:
NODE_ENV=production
PORT=3000
VITE_APP_TITLE=Prattica - Inteligência que move decisões
VITE_APP_LOGO=https://prattica.ai/logo.png
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=seu-website-id

# Salvar: Ctrl+O, Enter, Ctrl+X
```

### 8.2 Proteger Arquivo
```bash
# Restringir permissões
chmod 600 /home/seu-usuario/public_html/prattica.ai/.env
```

---

## ✅ Passo 9: Testar Acesso

### 9.1 Verificar Site
1. Abra seu navegador
2. Acesse `https://prattica.ai`
3. Verifique se o site carrega corretamente

### 9.2 Testar Páginas
- [ ] Home carrega
- [ ] Menu funciona
- [ ] Links internos funcionam
- [ ] Responsividade em mobile
- [ ] HTTPS está ativo (cadeado verde)

### 9.3 Testar Formulário
- [ ] Formulário de contato acessível
- [ ] Validação funciona
- [ ] Mensagens de erro aparecem

---

## 📊 Passo 10: Monitoramento

### 10.1 Configurar Logs
```bash
# Ver logs da aplicação
pm2 logs prattica

# Ver logs do Nginx
sudo tail -f /var/log/nginx/prattica-access.log
sudo tail -f /var/log/nginx/prattica-error.log
```

### 10.2 Monitorar Performance
```bash
# Usar ferramentas online:
# - Google PageSpeed Insights: https://pagespeed.web.dev
# - GTmetrix: https://gtmetrix.com
# - WebPageTest: https://www.webpagetest.org
```

### 10.3 Configurar Alertas
1. Acesse [Uptime Robot](https://uptimerobot.com)
2. Crie um monitor para `https://prattica.ai`
3. Configure notificações por email

---

## 🆘 Troubleshooting

### Problema: Site não carrega
**Solução:**
```bash
# Verificar se aplicação está rodando
pm2 status

# Se não estiver, reiniciar
pm2 restart prattica

# Verificar logs
pm2 logs prattica
```

### Problema: Erro 502 Bad Gateway
**Solução:**
```bash
# Verificar se Node.js está rodando
ps aux | grep node

# Verificar porta 3000
netstat -tuln | grep 3000

# Se não estiver, reiniciar
pm2 restart prattica
```

### Problema: HTTPS não funciona
**Solução:**
```bash
# Verificar certificado
sudo certbot certificates

# Renovar certificado
sudo certbot renew

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Problema: Permissão negada
**Solução:**
```bash
# Verificar permissões
ls -la /home/seu-usuario/public_html/prattica.ai

# Corrigir permissões
chmod -R 755 /home/seu-usuario/public_html/prattica.ai
chmod 600 /home/seu-usuario/public_html/prattica.ai/.env
```

---

## 📞 Suporte

Se encontrar problemas:

1. **Suporte Hostinger:** https://support.hostinger.com.br
2. **Email:** contato@prattica.ai
3. **WhatsApp:** +55 (11) 99999-9999

---

## ✨ Checklist Final

Após completar todos os passos:

- [ ] Site acessível via HTTPS
- [ ] Todas as páginas carregam
- [ ] Menu funciona
- [ ] Formulário acessível
- [ ] Performance > 80 (Lighthouse)
- [ ] Segurança A+ (Observatory)
- [ ] Logs monitorados
- [ ] Backups configurados
- [ ] Alertas de uptime ativados

---

**Parabéns! 🎉 Seu site está pronto para produção!**

Para dúvidas ou problemas, entre em contato com o suporte.
