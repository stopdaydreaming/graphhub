# GraphHub

GraphHub is without question the best way to interact with GitHub. We've hired 1200 code monkeys to build the amazing piece of software. We truly believe it will change the world.

## GitHub Personal Access Token

We're interacting with GitHub today, so you'll need a [GitHub Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). You only need the `repo` related permissions.

## Cloning Down

- To run this project, set up the GitHub token mentioned above and then clone the project.

- Install dependencies with `$ yarn install`

- Run `$ cp ./src/config/secrets.example.js ./src/config/secrets.js`

- In `./src/config/secrets.js` add the token you created and your Github username

- Run `$ yarn start`

## GraphiQL

GraphiQL is one of the most popular development tools for GraphQL. It's similar to Postman, but focused on GraphQL. Let's download the [desktop version](https://github.com/skevy/graphiql-app) to get started.

if you have homebrew you can run: `brew cask install graphiql`

### Setting up Authorization in GraphiQL

Click the "Edit HTTP Headers" button in thje top right corner

Click "+Add Header"

Under Header Name put `Authorization`

Under Header value put `token <your token here>` with the token you created earlier.

All of the calls will be made using the `https://api.github.com/graphql` endpoint

Note: If you're having trouble doing that, you can use the [GraphQL Explorer](https://developer.github.com/v4/explorer/) on GitHub's site.

## Web IDE Alternative

If you're having trouble setting the app up locally, you can use [GitPod](https://gitpod.io/#github.com/ni3t/graphhub) to run a VSCode WebIDE.

## Resources

[Slides](https://docs.google.com/presentation/d/1hN-xRhvRc7LtGhg0HwALUOo8ti_lo0cHsj0-Ef4cm_0/edit?usp=sharing)

[React Apollo Docs](https://www.apollographql.com/docs/react/)

[GitHub GraphQL Docs](https://developer.github.com/v4/)

[GraphQL With Ruby Talk with Riaz Virani](https://www.youtube.com/watch?v=XVEsCKGNkus)
