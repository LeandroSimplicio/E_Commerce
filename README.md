# 🛒 BlueStore — E-commerce de Tecnologia & Games

[![Live Demo](https://img.shields.io/badge/🔴_Demo-Live-blue?style=for-the-badge)](https://e-commerce-tau-two-90.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

> Projeto refatorado de HTML/CSS/JS puro para **React 18 + Tailwind CSS + Vite** —
> com arquitetura de componentes, Context API para carrinho e design totalmente responsivo.

🔗 **Acesse ao vivo:** https://e-commerce-tau-two-90.vercel.app/

---

## 🔄 Antes × Depois

| | Versão 1 (HTML/CSS/JS) | Versão 2 (React + Tailwind) |
|---|---|---|
| **Stack** | HTML5 · CSS3 · JavaScript puro | React 18 · Tailwind CSS · Vite |
| **Componentização** | Nenhuma | Arquitetura modular com componentes reutilizáveis |
| **Estado** | Variáveis globais no DOM | Context API (CartContext) |
| **Estilização** | CSS manual com classes repetidas | Utility-first com Tailwind |
| **Build** | Nenhum (arquivo estático) | Vite com hot reload e otimização |
| **Responsividade** | Media queries manuais | Mobile-first com breakpoints Tailwind |

---

## ✨ Funcionalidades

- 🧭 **Navbar responsiva** com menu hambúrguer para mobile
- 🎯 **Hero Section** com chamada para ação (CTA)
- 🖥️ **Vitrine de produtos** dividida por categorias (Periféricos, Smartphones, Consoles)
- 🛒 **Carrinho funcional** — adicionar, remover e atualizar quantidade via Context API
- ⭐ **Avaliações por estrelas** em cada produto
- 📢 **Produto em destaque** com seção dedicada
- 💬 **Depoimentos de clientes**
- 📱 **Seção de download do app** (App Store & Play Store)
- 🔗 **Footer** completo com links e copyright

---

## 🛠️ Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 📁 Estrutura do Projeto

```
📦 bluestore/
├── 📄 index.html
├── ⚙️  vite.config.js
├── 📄 package.json
└── 📂 src/
    ├── 📄 main.jsx
    ├── 📄 App.jsx
    ├── 📂 components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── ProductCard.jsx
    │   ├── Cart.jsx
    │   ├── Depoimentos.jsx
    │   └── Footer.jsx
    ├── 📂 context/
    │   └── CartContext.jsx
    └── 📂 assets/
        └── images/
```

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/LeandroSimplicio/E_Commerce.git

# Acesse a pasta
cd E_Commerce

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🌐 Deploy

Hospedado na **Vercel** com deploy automático a cada push na branch `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/LeandroSimplicio/E_Commerce)

---

## 📦 Produtos em Destaque

| Categoria | Produtos |
|---|---|
| 🎮 Gamer | Combo Gamer Meetion, Cadeira Gamer Frizzi, Volante Ferrari |
| 🖥️ Hardware | MSI GeForce GTX 1650, PC Gamer |
| 📱 Smartphones | iPhone, Galaxy S23 Ultra, Rogue Phone 5, Xiaomi |
| 🕹️ Consoles | PlayStation 5, Xbox Series X, DualSense PS5 |

---

## 🙋‍♂️ Autor

Feito com 💙 por **Leandro Simplício**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/LeandroSimplicio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/leandro-simplicio)
[![Portfólio](https://img.shields.io/badge/Portfólio-1A56DB?style=flat&logo=vercel&logoColor=white)](https://portifolio-leandro-delta.vercel.app)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

*Copyright © 2026 Leandro Simplício*
