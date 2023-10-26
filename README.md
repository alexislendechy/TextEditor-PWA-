# TextEditor-PWA-

[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)


This app is a simple text editor web application with progressive web app (PWA) features. It allows you to create and edit text content, save your work, and access it offline. JATE is designed to be user-friendly and efficient.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Text Editing:** Create and edit text content with a user-friendly interface.
- **Data Persistence:** Automatically save your text content to IndexedDB, ensuring you never lose your work.
- **Offline Functionality:** Access your text editor even when you're offline, thanks to PWA support.
- **Installation:** Install it as a PWA on your desktop for easy access.
- **Customizable Themes:** Choose from a variety of CodeMirror themes to personalize your editing experience.

## Getting Started

### Prerequisites

Before running TextEditor-PWA-, you'll need the following software installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/alexislendechy/TextEditor-PWA-
2. Navigate to the project directory:
   ```sh
   cd TextEditor-PWA-/Develop
3. Install dependencies using npm:
    ```sh
    npm install 
## Usage
1. Start the development server:
    ```sh
    npm start
This will launch the application locally. Open your browser and go to http://localhost:8080 to access the text editor.

2. Create and edit your text content. It will be automatically saved in IndexedDB.

3. Install the app by clicking the "Install!" button in the navigation bar.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

Fork the project.
Create your feature branch: git checkout -b feature/YourFeature
Commit your changes: git commit -m 'Add some feature'
Push to your branch: git push origin feature/YourFeature
Submit a pull request.
## License
This project is licensed under the MIT License.