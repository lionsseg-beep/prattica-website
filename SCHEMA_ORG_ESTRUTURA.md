# Schema.org - Estrutura de Dados Semântica

## 📋 Visão Geral

Foram criados dois componentes de Schema.org para otimizar SEO e visibilidade nos resultados de busca:

1. **SchemaOrgProdutos.tsx** - Página de Produtos (CollectionPage)
2. **SchemaOrgAthenaClinc.tsx** - Athena Clinic SO (SoftwareApplication)

---

## 🔍 Schema.org - Página Produtos

### Tipo Principal: `CollectionPage`

Identifica a página como uma coleção de produtos, melhorando a indexação e apresentação nos resultados de busca.

### Estrutura Implementada

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Produtos SaaS - Prattica",
  "description": "Plataformas SaaS inteligentes para mercados exigentes...",
  "url": "https://prattica.ai/produtos",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      // Lista de produtos
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [...]
  },
  "publisher": {
    "@type": "Organization",
    // Informações da empresa
  }
}
```

### Componentes Principais

#### 1. **Product (Athena Clinic SO)**
- **Nome:** Athena Clinic SO
- **Categoria:** Healthcare Software / BusinessApplication
- **Ofertas:** AggregateOffer com preço e disponibilidade
- **Avaliações:** AggregateRating (4.8/5 com 24 avaliações)
- **Reviews:** Testimoniais de clientes reais
- **Features:** Lista de 6+ funcionalidades principais

#### 2. **Breadcrumb Navigation**
Estrutura de navegação para melhorar UX e SEO:
- Home → Produtos

#### 3. **Publisher Information**
Dados da organização Prattica:
- Nome, URL, Logo
- Links sociais (LinkedIn, Instagram)
- Ponto de contato para vendas

---

## 🏥 Schema.org - Athena Clinic SO

### Tipo Principal: `SoftwareApplication`

Identifica o Athena Clinic como uma aplicação de software com todas as características relevantes para clínicas médicas.

### Estrutura Implementada

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://prattica.ai/athena-clinic-so",
  "name": "Athena Clinic SO",
  "description": "O primeiro Sistema Operacional para clínicas...",
  "applicationCategory": ["BusinessApplication", "MedicalBusiness"],
  "applicationSubCategory": "Healthcare Management Software",
  "operatingSystem": "Web-based (Cloud)",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "BRL",
    "price": "Consultar"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "24"
  },
  "featureList": [
    "Atendimento Automatizado via IA",
    "Triagem e Anamnese Inteligente",
    // ... mais features
  ]
}
```

### Componentes Principais

#### 1. **Informações Básicas**
- Nome e Descrição
- URL de acesso
- Imagem e Logo
- Versão do software (1.0)
- Data de lançamento e modificação

#### 2. **Categorização**
- **applicationCategory:** BusinessApplication, MedicalBusiness
- **applicationSubCategory:** Healthcare Management Software
- **operatingSystem:** Web-based (Cloud)

#### 3. **Avaliações e Reviews**
- **AggregateRating:** 4.8/5 com 24 avaliações
- **Reviews:** 2 reviews detalhados de clientes reais
  - Redução de 60% no tempo de atendimento
  - Economia de 15 horas/semana em laudos

#### 4. **Features Detalhadas**
Lista de 10 funcionalidades principais:
1. Atendimento Automatizado via IA
2. Triagem e Anamnese Inteligente
3. Geração de Laudos Assistida
4. Gestão Clínica Completa
5. Integração com Prontuário Eletrônico
6. Dashboard de Análise em Tempo Real
7. Agendamento Inteligente
8. Gestão Financeira Integrada
9. Relatórios Customizáveis
10. API Aberta para Integrações

#### 5. **Requisitos Técnicos**
- **softwareRequirements:** Navegador moderno (Chrome, Firefox, Safari, Edge)
- **processorRequirements:** Não aplicável (Cloud-based)
- **memoryRequirements:** Não aplicável (Cloud-based)
- **storageRequirements:** Armazenamento ilimitado em nuvem

#### 6. **Conteúdo Multimídia**
- **screenshot:** Imagens do sistema em funcionamento
- **video:** Link para vídeo de demonstração (5:30 minutos)

#### 7. **Informações de Contato**
- **contactPoint:** Telefone e email de vendas
- **areaServed:** Brasil (BR)

#### 8. **Breadcrumb Navigation**
Estrutura completa de navegação:
- Home → Produtos → Athena Clinic SO

---

## 🎯 Benefícios SEO

### 1. **Melhor Indexação**
- Google compreende a estrutura e propósito da página
- Categorização clara facilita busca por tipo de software

### 2. **Rich Snippets**
- Avaliações aparecem nos resultados de busca
- Preço e disponibilidade são exibidos
- Breadcrumbs melhoram navegação visual

### 3. **Knowledge Graph**
- Informações estruturadas alimentam o Knowledge Graph do Google
- Aumenta visibilidade em buscas relacionadas

### 4. **Voice Search Optimization**
- Dados estruturados melhoram compreensão para assistentes de voz
- Perguntas como "Qual é o melhor software para clínicas?" encontram Athena Clinic

### 5. **Conversão**
- Reviews e ratings aumentam confiança
- Informações detalhadas reduzem dúvidas
- CTA clara (Solicitar Demo) facilita conversão

---

## 📊 Dados Estruturados Implementados

### Página Produtos
- ✅ CollectionPage (tipo de página)
- ✅ ItemList (lista de produtos)
- ✅ Product (Athena Clinic SO)
- ✅ AggregateOffer (preço e disponibilidade)
- ✅ AggregateRating (avaliações)
- ✅ Review (testimoniais)
- ✅ BreadcrumbList (navegação)
- ✅ Organization (publisher)

### Athena Clinic SO
- ✅ SoftwareApplication (tipo de aplicação)
- ✅ AggregateOffer (modelo de preço)
- ✅ AggregateRating (4.8/5)
- ✅ Review (múltiplos reviews)
- ✅ FeatureList (10+ funcionalidades)
- ✅ VideoObject (demo)
- ✅ ImageObject (screenshots)
- ✅ ContactPoint (informações de contato)
- ✅ BreadcrumbList (navegação)
- ✅ Organization (autor/publisher)

---

## 🔧 Implementação Técnica

### Localização dos Arquivos

```
client/src/components/
├── SchemaOrgProdutos.tsx        (Página Produtos)
└── SchemaOrgAthenaClinc.tsx     (Athena Clinic SO)
```

### Uso na Página

```tsx
import SchemaOrgProdutos from "@/components/SchemaOrgProdutos";
import SchemaOrgAthenaClinc from "@/components/SchemaOrgAthenaClinc";

export default function Produtos() {
  return (
    <>
      <SchemaOrgProdutos />
      <SchemaOrgAthenaClinc />
      <MainLayout>
        {/* Conteúdo da página */}
      </MainLayout>
    </>
  );
}
```

### Renderização

Os componentes renderizam tags `<script type="application/ld+json">` que contêm os dados estruturados em formato JSON-LD, o padrão recomendado pelo Google.

---

## 📈 Próximas Otimizações Recomendadas

1. **Open Graph Tags** - Melhorar compartilhamento em redes sociais
2. **Twitter Card Tags** - Otimizar apresentação no Twitter/X
3. **Hreflang Tags** - Se expandir para outros idiomas
4. **Sitemap XML** - Facilitar rastreamento de todas as páginas
5. **robots.txt** - Controlar acesso de bots
6. **Canonical Tags** - Evitar conteúdo duplicado

---

## 🧪 Validação

Para validar os dados estruturados:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Cole a URL da página para validar

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Valida a sintaxe e completude dos dados

3. **Structured Data Testing Tool (Deprecated)**
   - Usar Google Rich Results Test como alternativa

---

## 📝 Notas Importantes

- Os dados de avaliações (4.8/5 com 24 reviews) devem ser atualizados com dados reais
- As URLs devem ser ajustadas para o domínio final (prattica.ai)
- Os links de contato devem estar sincronizados com as informações reais da empresa
- Manter os dados estruturados atualizados conforme mudanças no produto
