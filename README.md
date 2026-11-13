# Vitalis Fisioterapia — site institucional (demonstrativo)

Site one-page completo para a clínica fictícia **Vitalis Fisioterapia**.
HTML, CSS e JavaScript puros — sem dependências, sem build. Basta publicar.

## Estrutura

```
index.html                  Página única (hero, sobre, tratamentos, equipe,
                            diferenciais, depoimentos, CTA, contato, rodapé)
politica-privacidade.html   Política de privacidade (LGPD)
assets/css/styles.css       Design system + estilos
assets/js/main.js           Menu mobile, animações, validação do formulário
assets/img/*.jpg|webp       Fotografias (JPG + WebP otimizado)
robots.txt / sitemap.xml    SEO técnico
```

## O que substituir antes de publicar

| Onde | O quê |
|---|---|
| `index.html` (todas as ocorrências de `wa.me/5511999990000`) | Número real do WhatsApp da clínica |
| `index.html` e JSON-LD | Telefone `(11) 4000-0000`, endereço e CEP demonstrativos |
| `index.html` (iframe do mapa) | Endereço real no parâmetro `q=` do Google Maps |
| `<link rel="canonical">`, OG, `sitemap.xml`, `robots.txt` | Domínio real (`vitalisfisioterapia.com.br` é placeholder) |
| `assets/js/main.js` (bloco do submit) | Integração real do formulário (Formspree, API própria etc.) — hoje ele apenas valida e exibe confirmação |
| `index.html` (links `#` do rodapé) | Perfis reais de redes sociais |

## Observações de conteúdo

- Equipe, depoimentos, número "15+ anos" e formações são **meramente ilustrativos** e estão identificados como tal na própria página.
- As fotografias foram geradas por IA para fins de demonstração e podem ser substituídas por fotos reais da clínica em `assets/img/` (mantenha os mesmos nomes de arquivo para JPG e WebP).

## Performance e acessibilidade

- Imagens em `<picture>` com WebP + fallback JPG, `loading="lazy"` (exceto hero, com `fetchpriority="high"`).
- Fontes Google com `preconnect` e `display=swap`; animações respeitam `prefers-reduced-motion`.
- Skip-link, foco visível, ARIA no menu e nos erros de formulário, contraste AA.
- SEO local: dados estruturados Schema.org (`Physiotherapy`), meta tags Open Graph, sitemap e robots.

## Publicação

Qualquer hospedagem estática funciona (GitHub Pages, Netlify, Vercel, cPanel).
Não há etapa de build: envie os arquivos da raiz do projeto.
