# Marcelo Augusto Rodrigues de Lemos — Landing Page

Página institucional do advogado criminalista Marcelo Augusto Rodrigues de
Lemos, com destaque para o artigo **“Constrangimento epistemológico e a
tipicidade da lavagem de dinheiro”** (publicado originalmente na coluna *Diário
de Classe*, ConJur, em 22 de julho de 2023).

## Estrutura

| Arquivo       | Descrição                                              |
| ------------- | ------------------------------------------------------ |
| `index.html`  | Página única (hero, sobre, artigo com notas, atuação, contato). |
| `styles.css`  | Estilos — tipografia serifada, layout responsivo, tema claro. |
| `main.js`     | Ano do rodapé e validação do formulário de contato.    |

## Como visualizar

Site estático, sem dependências de build. Basta abrir o `index.html` no
navegador ou servir a pasta:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Observações

- O formulário de contato é apenas demonstrativo no front-end. Para receber
  mensagens, conecte um serviço de envio (por exemplo, um endpoint de formulário
  ou função serverless) ao `submit` em `main.js`.
- Fontes carregadas via Google Fonts (Cormorant Garamond, Source Serif 4,
  Source Sans 3).
