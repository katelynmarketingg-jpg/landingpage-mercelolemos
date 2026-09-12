# Marcelo A. R. de Lemos — Landing Page

Landing page de conversão do advogado criminalista **Marcelo Augusto Rodrigues
de Lemos**, especialista em Direito Penal Econômico. Objetivo: atrair clientes e
parceiros, apresentando de forma direta o que ele faz, como faz e seus
diferenciais.

## Estrutura (blocos)

Topo (hero + frase de impacto) → Atuação (o que faz) → Método (como faz) →
Diferenciais → Expertise → Publicação em destaque → Parcerias → Contato.

| Arquivo        | Descrição                                                    |
| -------------- | ------------------------------------------------------------ |
| `index.html`   | Landing principal, organizada em blocos.                     |
| `artigo.html`  | Página do artigo completo (ConJur), com notas.               |
| `styles.css`   | Tema escuro editorial (preto, creme, dourado) + responsivo.  |
| `main.js`      | Header no scroll, menu mobile, animações e formulário (demo).|
| `images/`      | Fotos do site — veja `images/README.md`.                     |

## Imagens

O site funciona **sem imagens** (usa uma arte em linha elegante como fallback).
Para ativar as fotos reais, adicione os arquivos em `images/` com os nomes
indicados em [`images/README.md`](images/README.md).

## Visualizar localmente

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Observações

- O formulário de contato é demonstrativo. Para receber mensagens, conecte um
  serviço de envio (e-mail/WhatsApp) ao `submit` em `main.js`.
- Dados de contato (e-mail, WhatsApp, OAB) estão como placeholder — substituir
  pelos reais.
- Fontes via Google Fonts: Cormorant Garamond, EB Garamond, Jost.
