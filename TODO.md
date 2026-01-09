# 📋 TODO - Prattica Website

## 🚨 CRÍTICO - Fazer ANTES do Deploy

### Deploy & Hospedagem
- [ ] **Registrar domínio prattica.ai** (se não registrado)
- [ ] **Apontar DNS para Hostinger** (nameservers)
- [ ] **Gerar certificado SSL/TLS** (Let's Encrypt)
- [ ] **Fazer upload dos arquivos** para Hostinger (via SFTP/Git)
- [ ] **Instalar dependências** no servidor (`npm install --prod`)
- [ ] **Iniciar aplicação** com PM2
- [ ] **Testar acesso** via HTTPS (https://prattica.ai)
- [ ] **Verificar todas as páginas** carregam corretamente
- [ ] **Testar responsividade** em mobile/tablet/desktop

### Configuração
- [ ] **Definir variáveis de ambiente** (.env):
  - `NODE_ENV=production`
  - `PORT=3000`
  - `VITE_APP_TITLE=Prattica - Inteligência que move decisões`
  - `VITE_APP_LOGO=https://prattica.ai/logo.png`
  - `VITE_ANALYTICS_ENDPOINT` (se usar analytics)
  - `VITE_ANALYTICS_WEBSITE_ID` (se usar analytics)

### Validação
- [ ] **Lighthouse Score** > 80 em Performance
- [ ] **Security Headers** validados (Observatory A+)
- [ ] **SEO** validado (Schema.org, meta tags)
- [ ] **HTTPS** ativo com certificado válido

---

## ⚠️ IMPORTANTE - Fazer APÓS Deploy (Primeira Semana)

### Integrações
- [ ] **Integrar serviço de email real**
  - Opções: SendGrid, Mailgun, AWS SES
  - Criar endpoint `/api/contact` no backend
  - Testar envio de emails
  - Configurar templates de email

- [ ] **Integrar Manus API** para Prattica Assistant
  - Obter credenciais do Manus
  - Implementar integração no componente PratticaAssistant
  - Testar respostas do chat
  - Configurar prompt do sistema

### Monitoramento
- [ ] **Configurar Google Search Console**
  - Verificar propriedade do domínio
  - Enviar sitemap
  - Monitorar erros de crawling

- [ ] **Configurar Analytics** (Umami ou Google Analytics)
  - Instalar script de rastreamento
  - Configurar eventos personalizados
  - Monitorar tráfego

- [ ] **Configurar Uptime Monitoring**
  - Usar Uptime Robot ou similar
  - Configurar alertas por email
  - Testar notificações

### Conteúdo & SEO
- [ ] **Adicionar imagens reais** (substituir placeholders)
- [ ] **Otimizar imagens** para WebP
- [ ] **Adicionar vídeo demo** do Athena Clinic
- [ ] **Escrever blog posts** para Radar Prattica
- [ ] **Configurar Open Graph tags** para redes sociais

---

## 📋 FUTURO - Fazer DEPOIS (Próximos Meses)

### Performance
- [ ] **Implementar code splitting** (reduzir chunk size)
- [ ] **Adicionar service worker** (PWA)
- [ ] **Implementar cache strategy** avançado
- [ ] **Otimizar imagens** com WebP

### Funcionalidades
- [ ] **Implementar Portal do Cliente** (login/dashboard)
- [ ] **Criar área de download** de recursos
- [ ] **Integrar CRM** para leads
- [ ] **Implementar chatbot** avançado com IA

### Marketing
- [ ] **Configurar campanhas de email** (Mailchimp/SendGrid)
- [ ] **Integrar com redes sociais** (Meta Pixel, etc)
- [ ] **Criar landing pages** específicas por produto
- [ ] **Implementar A/B testing**

### Manutenção
- [ ] **Configurar backups automáticos**
- [ ] **Implementar CI/CD** (GitHub Actions)
- [ ] **Adicionar testes automatizados** (Vitest)
- [ ] **Documentar API** (Swagger/OpenAPI)

---

## 📊 Status Geral

| Categoria | Status | Progresso |
|-----------|--------|-----------|
| **Desenvolvimento** | ✅ Completo | 100% |
| **Auditoria** | ✅ Completo | 100% |
| **Deploy** | ⏳ Pronto | 0% |
| **Crítico** | ⏳ Aguardando | 0% |
| **Importante** | ⏳ Pendente | 0% |
| **Futuro** | ⏳ Planejado | 0% |

---

## 🎯 Próximos Passos Imediatos

1. ✅ **Repositório GitHub criado** (este arquivo)
2. ⏳ **Deploy no Hostinger** (seguir HOSTINGER_DEPLOYMENT.md)
3. ⏳ **Testar site em produção**
4. ⏳ **Integrar email real**
5. ⏳ **Integrar Manus API**

---

## 📞 Contato para Dúvidas

- **Email:** contato@prattica.ai
- **WhatsApp:** +55 (11) 99999-9999
- **Suporte Hostinger:** https://support.hostinger.com.br

---

**Última atualização:** 23 de Dezembro de 2025  
**Versão:** 1.0.0  
**Status:** Pronto para Deploy
