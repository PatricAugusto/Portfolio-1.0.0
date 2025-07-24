# ⚡ Portfólio Pessoal - Cyberpunk & Reativo

Um portfólio pessoal moderno e responsivo, construído com **React** e estilizado com **Styled Components**, apresentando uma estética futurista inspirada no universo *cyberpunk* de *Ghost in the Shell*.  
Este projeto visa demonstrar habilidades em desenvolvimento **Front-end**, **design responsivo** e **interatividade**.

---

## 🚀 Funcionalidades Principais

- **Design Responsivo**  
  Layout adaptável para desktop, tablet e mobile, garantindo uma excelente experiência de usuário em qualquer dispositivo.

- **Menu Hambúrguer (Mobile)**  
  Navegação intuitiva em dispositivos móveis com um menu hambúrguer animado.

- **Animações Interativas**
  - **Cards de Projeto:** Efeito de "levantar" e sombra neon ao passar o mouse.
  - **Seções "Sobre Mim" e "Entre em Contato":** Mesma animação de elevação e brilho neon para consistência visual.

- **Imagem de Fundo Imersiva**  
  Uma imagem de fundo estática com temática cyberpunk, realçada por um *overlay* sutil para legibilidade do conteúdo.

- **Imagem de Perfil no Hero**  
  Sua foto de perfil destacada com borda e brilho neon na seção principal, criando um ponto focal visual.

- **Navegação Suave**  
  Links de navegação que rolam suavemente para as seções correspondentes da página.

---

## 💻 Tecnologias Utilizadas

- **ReactJS** – Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components** – Estilização com CSS-in-JS em componentes React.
- **Vite** – Ferramenta de build rápida e moderna.
- **HTML5 / CSS3 / JavaScript (ES6+)** – Fundamentos da web.

---

## ⚙️ Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js
- npm ou Yarn

### Instalação

```bash
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio
```

Substitua o link acima pela URL real do seu repositório.

### Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Rodando o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em http://localhost:5173.

### Construindo para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta dist/.

## 🎨 Estrutura de Pastas

```less
.
├── public/                     # Arquivos estáticos (ex: favicon)
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── cyberpunk-background.jpg
│   │   │   ├── seu-perfil.png
│   │   │   └── projects/
│   │   │       ├── project-ecommerce.jpg
│   │   │       └── ...
│   ├── components/             # Componentes React reutilizáveis
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── Container.jsx
│   ├── styles/
│   │   ├── GlobalStyles.js
│   │   └── breakpoints.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## ✍️ Personalização

Você pode adaptar facilmente este portfólio às suas necessidades:

- **Textos:**
    Edite os arquivos HeroSection, AboutSection, ProjectsSection e ContactSection.

- **Imagens:**
    Substitua:
    - src/assets/images/seu-perfil.png pela sua foto de perfil.
    - src/assets/images/cyberpunk-background.jpg por sua imagem de fundo.
    - As imagens dos projetos em src/assets/images/projects/.

- **Cores:**
    Paleta principal (ex: #00FFC0, #1B1C30) pode ser modificada diretamente nos Styled Components.

- **Links:**
    Atualize os links de contato (e-mail, LinkedIn, GitHub) e os links de projetos com repositórios e demos.

### 🤝 Contribuições

Contribuições, issues e feature requests são bem-vindos!
Sinta-se à vontade para abrir uma issue ou enviar um pull request.

### 🧠 Inspiração
Este projeto é inspirado no estilo visual de Ghost in the Shell e no universo neon do cyberpunk.
