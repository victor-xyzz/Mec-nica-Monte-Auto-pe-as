https://victor-xyzz.github.io/Mec-nica-Monte-Auto-pe-as/




# 🔧 Monte Auto-Peças — Portal Web da Oficina

Projeto web desenvolvido para a oficina mecânica **Monte Auto-Peças**, integrando páginas institucionais, catálogo dinâmico de peças e serviços, cadastro de clientes com validação e simulador de orçamento.

## 🚀 Funcionalidades

- **Página Inicial (`index.html`) e Sobre Nós (`sobre.html`):** Apresentação da oficina, história, estrutura e navegação integrada.
- **Catálogo Dinâmico (`catalogo.html` + `js/catalogo.js`):** Renderização automática dos cards de peças e serviços a partir de um array de objetos usando `forEach` e manipulação do DOM.
- **Cadastro de Clientes (`cadastro.html` + `js/cadastro.js`):** Validação de formulário no front-end (`preventDefault`, verificação de tamanho de nome, contagem de dígitos do telefone e mínimo de caracteres na senha) com feedback visual direto na tela.
- **Simulador de Orçamento (`simulador.html` + `js/simulador.js`):** Cálculo interativo dos serviços selecionados (`:checked`), soma com taxa fixa de mão de obra (R$ 100,00), aplicação de 10% de desconto na mão de obra para clientes cadastrados e formatação monetária em Real (`BRL`).

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estrutura semântica das páginas)
- **CSS3** (Estilização, layout responsivo e identidade visual)
- **JavaScript (ES6+)** (Manipulação do DOM, eventos, validação e lógica de cálculo)
- **Git & GitHub** (Versionamento e hospedagem do código)

## 📂 Estrutura de Pastas

```text
├── index.html
├── sobre.html
├── catalogo.html
├── cadastro.html
├── simulador.html
├── css/
│   └── style.css
├── js/
│   ├── catalogo.js
│   ├── cadastro.js
│   └── simulador.js
└── img/
