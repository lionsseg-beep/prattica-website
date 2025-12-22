export default function SchemaOrgAthenaClinc() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://prattica.ai/athena-clinic-so",
    "name": "Athena Clinic SO",
    "alternateName": "Athena Clinic System Operating",
    "description": "O primeiro Sistema Operacional para clínicas médicas com IA nativa. Automação total e IA integrada, do agendamento ao laudo médico. Solução proprietária da Prattica para transformação digital em saúde.",
    "url": "https://prattica.ai/produtos",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    "logo": "https://prattica.ai/logo.png",
    "applicationCategory": [
      "BusinessApplication",
      "MedicalBusiness"
    ],
    "applicationSubCategory": "Healthcare Management Software",
    "operatingSystem": "Web-based (Cloud)",
    "softwareVersion": "1.0",
    "releaseDate": "2024-01-15",
    "dateModified": "2025-01-15",
    "inLanguage": "pt-BR",
    "isAccessibleForFree": false,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "price": "Consultar",
      "availability": "https://schema.org/InStock",
      "url": "https://prattica.ai/produtos"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Clínica Exemplo"
        },
        "reviewBody": "Athena Clinic transformou completamente nossa operação. Reduzimos em 60% o tempo de atendimento e aumentamos a satisfação dos pacientes em 45%.",
        "datePublished": "2024-06-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Centro Médico Integrado"
        },
        "reviewBody": "A geração automática de laudos economizou 15 horas por semana para nossa equipe. Excelente ROI.",
        "datePublished": "2024-07-20"
      }
    ],
    "featureList": [
      "Atendimento Automatizado via IA",
      "Triagem e Anamnese Inteligente",
      "Geração de Laudos Assistida",
      "Gestão Clínica Completa",
      "Integração com Prontuário Eletrônico",
      "Dashboard de Análise em Tempo Real",
      "Agendamento Inteligente",
      "Gestão Financeira Integrada",
      "Relatórios Customizáveis",
      "API Aberta para Integrações"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://prattica.ai",
      "name": "Prattica Consultoria",
      "url": "https://prattica.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prattica.ai/logo.png",
        "width": 250,
        "height": 60
      },
      "sameAs": [
        "https://www.linkedin.com/company/prattica",
        "https://www.instagram.com/prattica"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "telephone": "+55-11-99999-9999",
        "email": "contato@prattica.ai",
        "areaServed": "BR"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Prattica Consultoria",
      "url": "https://prattica.ai"
    },
    "downloadUrl": "https://prattica.ai/produtos",
    "installUrl": "https://prattica.ai/produtos",
    "permissions": [
      "Acesso a dados de pacientes",
      "Integração com sistemas de saúde",
      "Armazenamento em nuvem seguro"
    ],
    "softwareRequirements": "Navegador moderno (Chrome, Firefox, Safari, Edge)",
    "processorRequirements": "Não aplicável (Cloud-based)",
    "memoryRequirements": "Não aplicável (Cloud-based)",
    "storageRequirements": "Armazenamento ilimitado em nuvem",
    "screenshot": [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    ],
    "video": {
      "@type": "VideoObject",
      "name": "Athena Clinic SO - Demo",
      "description": "Demonstração completa do Athena Clinic SO",
      "thumbnailUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      "uploadDate": "2024-01-15",
      "duration": "PT5M30S",
      "contentUrl": "https://prattica.ai/demo/athena-clinic"
    },
    "educationalLevel": "Professional",
    "educationalUse": "Professional Training",
    "isPartOf": {
      "@type": "Organization",
      "@id": "https://prattica.ai",
      "name": "Prattica Consultoria"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://prattica.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Produtos",
          "item": "https://prattica.ai/produtos"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Athena Clinic SO",
          "item": "https://prattica.ai/athena-clinic-so"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
