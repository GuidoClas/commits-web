
<br />
<p align="center">
  <a href="https://commits-web.vercel.app">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">COMMIT HISTORY</h3>

  <p align="center">
    A github commit history viewer
    <br />
    <a href="https://github.com/GuidoClas/api-commits"><strong>API Docs »</strong></a>
    <br />
    <br />
    <a href="https://commits-web.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/GuidoClas/commits-web/issues">Report Bug/Feature</a>
    ·
  </p>
   
</p>



<!-- Index -->
<details open="open">
  <summary><h2 style="display: inline-block">Index</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About</a>
      <ul>
            <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="run-on-localhost">Run on Localhost</a></li>
      </ul>
    </li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About

![COMMIT_WEB](https://github.com/GuidoClas/commits-web/blob/main/assets/front_cards.PNG)

A github commit history viewer 

<!-- Features -->
## Features
Displaying current and next features:

- [x] Branch search
- [x] Branch selector
- [x] Commits display
- [ ] Select User
- [ ] Select Repository

See the [open issues](https://github.com/GuidoClas/commits-web/issues) for a list of proposed features, known issues or request a feature.

## Built With These Technologies

* [Next.js](https://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [React.js](https://es.reactjs.org/)
* [Context-API](https://react.dev/reference/react/createContext)
* [axios](https://github.com/axios/axios)
* [Github API](https://docs.github.com/es/rest)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To run this project on your local machine or deploy it to a server we need to use or have the following tools:
* ***Next.js***
  ```sh
  npm install next@latest react@latest react-dom@latest
  ```
* ***Node.js > 17.10***

  https://nodejs.org/es/download/

* ***git*** 

  https://git-scm.com/

### Run on Localhost 

1. First we need to setup the backend API repository, please follow these steps
    https://github.com/GuidoClas/api-commits/blob/master/README.md
   
2. Once you have done the API setup, clone this repository
    ```sh
   git clone https://github.com/GuidoClas/commits-web.git
   ```
3. Navigate to the root folder of the project and create an environment file with this variables
    ```sh
   .env
   BASE_URL=http://localhost:3000/api/v1
   ```
4. Install dependencies opening a terminal of your choice
    ```sh
   npm install | yarn install
   ```
5. Run the project
    ```sh
   npm run dev | yarn run dev
   ```
<!-- Author -->
## Author

***Guido Clas***

* Website: [guidoclas.com](https://guidoclas.com)
*	Github: [@GuidoClas](https://github.com/GuidoClas)
*	LinkedIn: [Guido Clas](https://www.linkedin.com/in/guido-clas/)