# To run commands locally

## Setup

With [Homebrew](https://brew.sh/) installed, run:

- `brew install --cask docker`
- `brew install docker`

If you are using an M1 Mac, you will also need to:

- [Install a specific version of the CircleCI CLI](https://github.com/CircleCI-Public/circleci-cli/issues/676#issuecomment-1107030440)

### Env Variables Configuration

- Add or update your `~/.zshrc` file to include:
  - A `$GH_TOKEN` with [a token from your GitHub](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token)
  - A `$FONT_AWESOME_TOKEN` with the company's FontAwesome token

It should look something like:

```
export GITHUB_TOKEN = "SOMETHING"
export FONTAWESOME_TOKEN = "SOMETHING_ELSE"
```

## Running commands

- `circleci local execute -e GITHUB_TOKEN=$GITHUB_TOKEN -e FONTAWESOME_TOKEN=$FONTAWESOME_TOKEN --job lint_test_build`
