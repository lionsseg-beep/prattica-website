export default function SchemaOrgProdutos() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Produtos SaaS - Prattica",
    "description": "Plataformas SaaS inteligentes para mercados exigentes. Athena Clinic SO e outras soluções proprietárias.",
    "url": "https://prattica.ai/produtos",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "@id": "https://prattica.ai/produtos#athena-clinic-so",
          "name": "Athena Clinic SO",
          "description": "O primeiro Sistema Operacional para clínicas com IA nativa. Automação total e IA integrada, do agendamento ao laudo médico.",
          "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
          "brand": {
            "@type": "Brand",
            "name": "Prattica"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "Prattica Consultoria",
            "url": "https://prattica.ai",
            "logo": "https://prattica.ai/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/prattica",
              "https://www.instagram.com/prattica"
            ]
          },
          "category": "Healthcare Software",
          "applicationCategory": "BusinessApplication",
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
                "@type": "Person",
                "name": "Clínica Exemplo"
              },
              "reviewBody": "Athena Clinic transformou completamente nossa operação. Reduzimos em 60% o tempo de atendimento."
            }
          ],
          "features": [
            "Atendimento Automatizado via IA",
            "Triagem e Anamnese Inteligente",
            "Geração de Laudos Assistida",
            "Gestão Clínica Completa",
            "Integração com Prontuário Eletrônico",
            "Dashboard de Análise em Tempo Real"
          ],
          "softwareRequirements": "Navegador moderno, conexão internet",
          "operatingSystem": "Web-based (Cloud)",
          "processorRequirements": "Não aplicável",
          "memoryRequirements": "Não aplicável",
          "releaseDate": "2024-01-15",
          "dateModified": "2025-01-15",
          "inLanguage": "pt-BR",
          "isAccessibleForFree": false,
          "downloadUrl": "https://prattica.ai/produtos",
          "url": "https://prattica.ai/produtos#athena-clinic-so"
        }
      ]
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
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
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
        "email": "contato@prattica.ai"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
