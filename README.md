# Laser & Fisio — site institucional

Site one-page completo para a **Fisioterapia Laser & Fisio** (Santana, São Paulo).
HTML, CSS e JavaScript puros — sem dependências, sem build. Basta publicar.

## Estrutura

```
index.html                  Página única (hero, sobre, tratamentos, equipe,
                            diferenciais, depoimentos, CTA, contato, rodapé)
politica-privacidade.html   Política de privacidade (LGPD)
assets/css/styles.css       Design system + estilos
assets/js/main.js           Menu mobile, botão flutuante, animações, validação
assets/img/*.jpg|webp       Fotografias (JPG + WebP otimizado)
robots.txt / sitemap.xml    SEO técnico
```

## Dados já reais (do perfil do Google)

- Nome: Fisioterapia Laser & Fisio
- Endereço: R. Voluntários da Pátria, Santana, São Paulo/SP, 02075-000
- Telefone e WhatsApp: (11) 97552-4552
- Domínio: laserfisio.com.br (canonical, sitemap, robots, e-mail)

## O que ainda precisa de conteúdo real

| Onde | O quê |
|---|---|
| Seção "Nossa equipe" | Nomes, fotos e formações dos profissionais reais (os atuais são fictícios) |
| Seção "Depoimentos" | Avaliações reais de pacientes (as atuais são fictícias) |
| Horário de funcionamento | Confirmar abertura (o Google informa fechamento às 19h) |
| `index.html` (links `#` do rodapé) | Perfis reais de redes sociais |
| `assets/js/main.js` (bloco do submit) | Integração real do formulário (Formspree, API própria etc.) — hoje ele apenas valida e exibe confirmação |
| `assets/img/` | Opcional: fotos reais da clínica e da equipe (mantenha os mesmos nomes de arquivo para JPG e WebP) |

## Performance e acessibilidade

- Imagens em `<picture>` com WebP + fallback JPG, `loading="lazy"` (exceto hero, com `fetchpriority="high"`).
- Fontes Google com `preconnect` e `display=swap`; animações respeitam `prefers-reduced-motion`.
- Skip-link, foco visível, ARIA no menu e nos erros de formulário, contraste AA.
- SEO local: dados estruturados Schema.org (`Physiotherapy`), meta tags Open Graph, sitemap e robots.
- Botão flutuante de WhatsApp fixo no canto inferior direito.

## Publicação

Qualquer hospedagem estática funciona (GitHub Pages, Netlify, Vercel, cPanel).
Não há etapa de build: envie os arquivos da raiz do projeto e aponte o domínio
`laserfisio.com.br` para a hospedagem.
