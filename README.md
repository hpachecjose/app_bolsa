# WeatherBoard 🌤️ & Global Exchanges 📈

Um painel interativo simples e elegante (Dashboard) desenvolvido com as tecnologias web (HTML, CSS, JS) para visualização de dados climáticos e informações sobre as principais bolsas de valores ao redor do mundo.

## 📌 Funcionalidades

- **Clima Atual:** Exibe informações detalhadas sobre as condições meteorológicas (temperatura, sensação térmica, umidade, pressão atmosférica, vento e índice UV).
- **Previsão por Horas:** Mostra a previsão de forma linear das próximas horas do dia.
- **Qualidade do Ar:** Apresenta índices detalhados sobre a qualidade do ar (PM2.5, PM10, O3, NO2).
- **Mercados Financeiros:** Lista as principais bolsas de valores do mundo extraídas de um documento XML, mostrando a capitalização de mercado, o volume diário e o número de empresas listadas.
- **Interface Moderna:** Design arrojado utilizando **Bootstrap 5**, com o conceito "Glassmorphism" e responsividade para dispositivos móveis, tablets e telas maiores.

## 🛠 Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3 (Bootstrap 5 & Custom CSS):** Estilização, layout flexível e design *glassmorphism*.
- **JavaScript (Vanilla):** Lógica e consumo de informações via Fetch API.
- **JSON & XML:** Fontes de dados assíncronas (`database.json` e `exchanges.xml`).

## 🚀 Como Executar o Projeto

Como o projeto realiza requisições `.fetch()` para ler arquivos locais (`database.json` e `exchanges.xml`), é necessário rodá-lo através de um servidor local para evitar bloqueios de CORS (Cross-Origin Resource Sharing) do navegador. 

1. **Clone este repositório**
   ```bash
   git clone https://github.com/SEU-USUARIO/app_bolsa.git
   ```

2. **Acesse a pasta do projeto**
   ```bash
   cd app_bolsa
   ```

3. **Inicie um servidor local**
   Existem várias maneiras rápidas de subir um servidor local. Abaixo algumas opções:

   - **Usando Python 3:**
     ```bash
     python -m http.server 8000
     ```
   - **Usando Node.js (http-server):**
     ```bash
     npx http-server
     ```
   - **Extensão do VS Code (Live Server):**
     Abra o arquivo `index.html` e clique em *Go Live* no canto inferior direito.

4. **Acesse no navegador**
   Abra: `http://localhost:8000` (ou a porta informada pelo servidor).

## 📁 Estrutura do Projeto

```text
📁 app_bolsa
├── 📄 index.html      # Página principal
├── 📄 estilo.css      # Estilização complementar (Glassmorphism e cores)
├── 📄 script.js       # Script responsável por popular a tabela de bolsas (exchanges.xml)
├── 📄 database.json   # Dados simulados das condições climáticas
├── 📄 exchanges.xml   # Dados simulados das bolsas de valores e micromercados
└── 📄 README.md       # Documentação do projeto
```

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja reportar algum problema, sugerir melhorias ou enviar *pull requests*, sinta-se livre para criar uma *Issue*.

---
Feito com ☕ por Henri.
