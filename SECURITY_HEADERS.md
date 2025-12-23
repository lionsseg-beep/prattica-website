# Security Headers Configuration

## Descrição

Este documento descreve os headers de segurança que devem ser configurados no servidor de produção para proteger o site Prattica contra ataques comuns.

## Headers Implementados

### 1. Strict-Transport-Security (HSTS)
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```
**Função:** Força o navegador a usar HTTPS em todas as comunicações.
**Valor:** 1 ano (31536000 segundos)

### 2. X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```
**Função:** Previne MIME type sniffing attacks.
**Efeito:** Força o navegador a respeitar o Content-Type declarado.

### 3. X-Frame-Options
```
X-Frame-Options: SAMEORIGIN
```
**Função:** Previne clickjacking attacks.
**Efeito:** Permite que o site seja embutido apenas em iframes do mesmo domínio.

### 4. X-XSS-Protection
```
X-XSS-Protection: 1; mode=block
```
**Função:** Ativa proteção contra XSS (Cross-Site Scripting).
**Efeito:** Bloqueia a página se um ataque XSS for detectado.

### 5. Referrer-Policy
```
Referrer-Policy: strict-origin-when-cross-origin
```
**Função:** Controla quais informações de referência são enviadas.
**Efeito:** Envia apenas a origem (não a URL completa) para requisições cross-origin.

### 6. Permissions-Policy
```
Permissions-Policy: geolocation=(), microphone=(), camera=()
```
**Função:** Desabilita permissões de navegador desnecessárias.
**Efeito:** Bloqueia acesso a geolocalização, microfone e câmera.

### 7. Content-Security-Policy (CSP)
```
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src 'self' https://fonts.gstatic.com; 
  img-src 'self' data: https:; 
  connect-src 'self' https:;
```
**Função:** Define a política de conteúdo permitido.
**Efeito:** Restringe de onde scripts, estilos e outros recursos podem ser carregados.

## Configuração por Servidor

### Nginx
Os headers estão configurados em `nginx.conf`:
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header Content-Security-Policy "..." always;
```

### Apache
Os headers estão configurados em `.htaccess`:
```apache
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

## Validação de Headers

### Ferramentas Online
1. **Mozilla Observatory:** https://observatory.mozilla.org
2. **Security Headers:** https://securityheaders.com
3. **SSL Labs:** https://www.ssllabs.com/ssltest/

### Teste Local
```bash
curl -I https://prattica.ai
```

Procure pelos headers listados acima na resposta.

## Recomendações Adicionais

### 1. HTTPS/SSL Obrigatório
- Sempre use HTTPS em produção
- Obtenha certificado SSL de uma CA confiável (Let's Encrypt é gratuito)
- Configure redirecionamento de HTTP para HTTPS

### 2. Rate Limiting
Implemente rate limiting para prevenir ataques de força bruta:
```nginx
limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
limit_req zone=general burst=20 nodelay;
```

### 3. Firewall de Aplicação Web (WAF)
Considere usar:
- CloudFlare WAF
- AWS WAF
- ModSecurity (open-source)

### 4. Monitoramento
- Configure logs de acesso e erro
- Use ferramentas de monitoramento (Sentry, DataDog)
- Configure alertas para atividades suspeitas

### 5. Backup e Disaster Recovery
- Faça backups regulares
- Teste restauração de backups
- Mantenha plano de recuperação

## Checklist de Segurança Pré-Deploy

- [ ] SSL/TLS configurado e válido
- [ ] Todos os headers de segurança implementados
- [ ] HTTPS redirecionamento ativo
- [ ] Rate limiting configurado
- [ ] Logs de acesso e erro ativados
- [ ] Firewall configurado
- [ ] Backups automatizados
- [ ] Monitoramento ativo
- [ ] Testes de segurança realizados
- [ ] Documentação atualizada

## Referências

- [OWASP Security Headers](https://owasp.org/www-project-secure-headers/)
- [MDN Web Docs - HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [Mozilla Observatory](https://observatory.mozilla.org)
- [Security Headers](https://securityheaders.com)
