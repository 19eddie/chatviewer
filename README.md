<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/srilakshmikanthanp/chatviewer">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Chat Viewer</h3>

  <p align="center">
    View The chat exporter from Whatsapp as it looks like in Whatsapp
    <br />
    <a href="https://github.com/srilakshmikanthanp/chatviewer">View Demo</a>
    ·
    <a href="https://github.com/srilakshmikanthanp/chatviewer/issues">Report Bug</a>
    ·
    <a href="https://github.com/srilakshmikanthanp/chatviewer/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This Project was initiated to view the WhatsApp exported chat as it like in WhatsApp

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* Express.js
* React.js

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is a Web interface application to view the exported chat you optionally create an account to maintain the copy of the chat in the cloud and make it easy to share.

### Prerequisites

To run the project local install npm and node js

* npm

### Installation

1. Clone the repo from github

   ```sh
   git clone https://github.com/srilakshmikanthanp/chatviewer.git
   ```
3. Install NPM packages

   ```sh
   npm install
   ```
5. Start the server using Nx

   ```sh
   npx nx serve chatviewer-api 
   ```
7. Start the React using nx

   ```sh
   npx nx serve chatviewer-web
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- DOCKER QUICK START -->
## Run with Docker

Prefer a self-contained setup? A Compose stack lives in the repo and spins up the API, web UI, and a Postgres instance with persisted storage.

```sh
docker compose up --build
```

- The web client is available on [http://localhost:8080](http://localhost:8080).
- The API listens on [http://localhost:8000](http://localhost:8000).
- Chat blobs persist across restarts via the named `db-data` volume.
- To override defaults (e.g. set a stronger `JWT_SECRET` or custom `DATABASE_URL`), copy `.env.docker.example` to `.env.docker` and pass it with `docker compose --env-file .env.docker up`.

> **Note:** Google Sign-In remains optional. Without configuring `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` the app still works for local preview uploads, but chats will not be stored server-side because authentication is disabled.



<!-- USAGE EXAMPLES -->
## Usage

For REST API documentation go to the following link

  * [REST API](apps/chatviewer-api)

For Web UI documentation go to the following link

  * [Web UI](apps/chatviewer-web)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/srilakshmikanthanp/chatviewer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/srilakshmikanthanp/chatviewer](https://github.com/srilakshmikanthanp/chatviewer)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Nx](https://nx.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>
