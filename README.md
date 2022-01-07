# Github Timeline Generator

## 📝 Description
Github Timeline Generator is a web app that, given a username, generates a timeline of repositories created by that user. It has filtering features, such as limiting the number of repositories displayed and sorting by date.

## Technologies
- React.js;
- React Testing Library (Automated Tests);
- Octokit/GraphQL (Github GraphQL API connection);
- Tailwind CSS;
- SASS;

## 🚀 Run on your machine

Note: it requires yarn or npm installed 

> Initial steps
```bash
git clone https://github.com/ruifernandees/github-timeline-generator.git
cd github-timeline-generator 

# Install all dependencies
yarn install
```

> Set the Environment Variables
1. Create a personal token on Github (it can have no permission, only public permissions): [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Create a .env file on the project root
3. Set the following variable in the .env file:
```sh
REACT_APP_API_KEY=your_github_personal_token
```

> Run server
```bash
# Start the server
yarn start
```

> Run tests
```bash
# Start the server
yarn test
```