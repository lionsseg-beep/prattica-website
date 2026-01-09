# 🔗 Conectar Repositório ao GitHub

## 📋 Passo 1: Criar Repositório no GitHub

### 1.1 Acessar GitHub
1. Acesse [github.com](https://github.com)
2. Faça login com sua conta
3. Clique no ícone **"+"** (canto superior direito)
4. Selecione **"New repository"**

### 1.2 Configurar Repositório
1. **Repository name:** `prattica-website`
2. **Description:** "Prattica - Inteligência que move decisões. Consultoria e plataforma de automação com IA."
3. **Visibility:** `Public` (recomendado para portfólio) ou `Private`
4. **Initialize repository:** Deixe desmarcado (já temos commits locais)
5. Clique em **"Create repository"**

### 1.3 Copiar URL
- Copie a URL do repositório (ex: `https://github.com/seu-usuario/prattica-website.git`)

---

## 🔑 Passo 2: Conectar Repositório Local

### 2.1 Adicionar Remote
```bash
# Navegar para o diretório do projeto
cd /home/ubuntu/prattica-website

# Adicionar remote origin
git remote add origin https://github.com/seu-usuario/prattica-website.git

# Verificar remote
git remote -v
```

**Saída esperada:**
```
origin  https://github.com/seu-usuario/prattica-website.git (fetch)
origin  https://github.com/seu-usuario/prattica-website.git (push)
```

### 2.2 Configurar Branch Principal
```bash
# Renomear branch para 'main' (se necessário)
git branch -M main

# Verificar branch
git branch
```

---

## 📤 Passo 3: Fazer Push para GitHub

### 3.1 Autenticar com GitHub
```bash
# Opção 1: SSH (recomendado)
# Gerar chave SSH (se não tiver)
ssh-keygen -t ed25519 -C "seu-email@example.com"

# Adicionar chave ao SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copiar chave pública e adicionar em GitHub Settings > SSH Keys
cat ~/.ssh/id_ed25519.pub
```

### 3.2 Fazer Push
```bash
# Push da branch main
git push -u origin main

# Verificar
git log --oneline
```

**Saída esperada:**
```
97d5f48 Add comprehensive README with setup, deployment, and documentation
6ab6391 Add TODO: Critical and non-critical tasks for deployment
952a7e8 Initial commit: Prattica website - Production ready v1.0.0
...
```

---

## ✅ Passo 4: Verificar no GitHub

1. Acesse seu repositório: `https://github.com/seu-usuario/prattica-website`
2. Verifique se todos os commits aparecem
3. Verifique se todos os arquivos estão presentes:
   - ✅ `client/` (código React)
   - ✅ `server/` (servidor Node.js)
   - ✅ `dist/` (build de produção)
   - ✅ `README_GITHUB.md`
   - ✅ `TODO.md`
   - ✅ `DEPLOYMENT_GUIDE.md`
   - ✅ `HOSTINGER_DEPLOYMENT.md`
   - ✅ `AUDIT_REPORT.md`
   - ✅ `Dockerfile`
   - ✅ `docker-compose.yml`

---

## 🔄 Passo 5: Configurar Proteção de Branch (Opcional)

### 5.1 Proteger Branch Main
1. Vá para **Settings** → **Branches**
2. Clique em **"Add rule"**
3. Configure:
   - **Branch name pattern:** `main`
   - ✅ **Require pull request reviews before merging**
   - ✅ **Require status checks to pass before merging**
   - ✅ **Include administrators**
4. Clique em **"Create"**

---

## 📝 Passo 6: Adicionar Documentação ao GitHub

### 6.1 Criar Wiki (Opcional)
1. Vá para **Settings** → **Features**
2. Ative **"Wikis"**
3. Clique em **"Create the first page"**
4. Adicione conteúdo de documentação

### 6.2 Adicionar Issues Template
1. Crie pasta `.github/ISSUE_TEMPLATE/`
2. Adicione arquivos como `bug_report.md`, `feature_request.md`

### 6.3 Adicionar Pull Request Template
1. Crie arquivo `.github/pull_request_template.md`
2. Adicione template para PRs

---

## 🚀 Passo 7: Configurar CI/CD (Futuro)

### 7.1 GitHub Actions
1. Vá para **Actions**
2. Clique em **"New workflow"**
3. Selecione template ou crie do zero
4. Configure para:
   - ✅ Rodar testes (Vitest)
   - ✅ Fazer linting (ESLint)
   - ✅ Fazer build
   - ✅ Deploy automático (opcional)

**Exemplo de workflow:**
```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm check
      - run: pnpm build
```

---

## 📊 Passo 8: Monitorar Repositório

### 8.1 Configurar Notificações
1. Vá para **Settings** → **Notifications**
2. Configure alertas por email

### 8.2 Adicionar Badge ao README
```markdown
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://prattica.ai)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org)
```

---

## 🔗 Passo 9: Integrar com Hostinger (Deploy Automático)

### 9.1 Configurar Deploy via Git
1. No painel Hostinger, vá para **Ferramentas** → **Git**
2. Clique em **"Conectar Repositório"**
3. Selecione **GitHub**
4. Autentique e selecione `prattica-website`
5. Configure branch: `main`
6. Clique em **"Conectar"**

### 9.2 Fazer Deploy
1. Clique em **"Deploy"**
2. Selecione a branch `main`
3. Aguarde o deploy completar

---

## 📞 Troubleshooting

### Problema: "fatal: remote origin already exists"
```bash
# Remover remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/seu-usuario/prattica-website.git
```

### Problema: "Permission denied (publickey)"
```bash
# Verificar SSH
ssh -T git@github.com

# Se não funcionar, gerar nova chave
ssh-keygen -t ed25519 -C "seu-email@example.com"
```

### Problema: "fatal: 'origin' does not appear to be a 'git' repository"
```bash
# Verificar remotes
git remote -v

# Se vazio, adicionar
git remote add origin https://github.com/seu-usuario/prattica-website.git
```

---

## ✨ Próximos Passos

1. ✅ **Repositório criado no GitHub**
2. ✅ **Código enviado (push)**
3. ⏳ **Deploy no Hostinger** (seguir HOSTINGER_DEPLOYMENT.md)
4. ⏳ **Configurar CI/CD** (GitHub Actions)
5. ⏳ **Integrar com Hostinger** (deploy automático)

---

## 📚 Recursos Úteis

- **GitHub Docs:** https://docs.github.com
- **Git Documentation:** https://git-scm.com/doc
- **GitHub Actions:** https://docs.github.com/en/actions
- **SSH Setup:** https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

**Última atualização:** 23 de Dezembro de 2025  
**Versão:** 1.0.0
