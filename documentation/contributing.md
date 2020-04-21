# Contributing to React Native Boilerplate

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

We would love for you to contribute to React Native ThemBoilerplatee and help make it even better. As a contributor, here are some guidelines which will help you to understand the project:

 - [About Project](#about)
 - [Project Management](#management)
    - [Branch organization](#branch)
 - [How Can I Contribute?](#contribute)
   - [Reporting Bugs](#issue)
   - [Suggesting Enhancements](#feature)
   - [Your First Code Contribution](#first-contribution)
   - [Pull Requests](#pull-requests)
 - [Styleguides](#rules)
   - [Git Branch Naming](#branch-styleguide)
   - [Commit Message Convention](#commit)
   - [JavaScript Styleguide](#javascript-styleguide)
 - [Community](#community)

## <a name="about"></a> About Project

This project is a [React Native](https://reactnative.dev/) boilerplate that  provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic to help you kickstart your new app

## <a name="management"></a> Project Management

We use [Github issues](https://github.com/alexakasanjeev/react-native-boilerplate/issues) to track all the features and bug. We follow this project management strategy.

1. Each new feature or bug, first get listed in [Github issues](https://github.com/alexakasanjeev/react-native-boilerplate/issues).
2. The issue card is imported into [Github Project board](https://github.com/alexakasanjeev/react-native-boilerplate/projects/1).
3. By default, card is imported into `To do` column of the project board.
4. If a feature/bug is being worked on, the card is moved into `In progress` column, and a corresponding `feature/awesome-feature-title` or `hotfix/terrible-bug-title` branch is created.
5. Once completed
   * The branch is merged into `master` branch 
   * Card is moved into `Done` column of the project board
   * Issue is finally closed.

### <a name="branch"></a> Branch Organization

We follow [Git branch strategy](https://www.youtube.com/watch?v=aJnFGMclhU8). The `master` branch is the default and base branch for the project. It is used for development and all Pull Requests should go there. Follow [this](#branch-styleguide) naming convention for your branches.

## <a name="contribute"></a> How Can I Contribute?

### <a name="issue"></a> Reporting Bugs

- **Ensure the bug was not already reported** by [searching all issues.](https://github.com/alexakasanjeev/react-native-boilerplate/issues)
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/alexakasanjeev/react-native-boilerplate/issues/new?labels=bug&template=bug_report.md&title=). When you are creating a bug report, please include as many details as possible. Fill out the [required template](../.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

You can help the team even more and [submit a Pull Request with a fix](#pull-requests).

### <a name="feature"></a> Suggesting Enhancements

Feature suggestions are tracked as [GitHub issues](https://github.com/alexakasanjeev/react-native-boilerplate/issues). Feature requests are welcome. **But first, already open issues marked as [`Type: enhancement`](https://github.com/alexakasanjeev/react-native-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3A%22Type%3A+Enhancement%22) will take priority**. So take a moment to find out whether your idea fits with the scope and aims of the project. Please provide as much detail and [context](../.github/ISSUE_TEMPLATE/feature_request.md) as possible.

- Make a [new feature request](https://github.com/alexakasanjeev/react-native-boilerplate/issues/new?&labels=enhancement&template=feature_request.md&title=)

### <a name="first-contribution"></a> Your First Code Contribution

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/alexakasanjeev/react-native-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) that contain small functionality/bug that have a relatively limited scope. This is a great place to get started.

If you are familiar with the codebase, checkout [Help wanted issues](https://github.com/alexakasanjeev/react-native-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

### <a name="pull-requests"></a> Pull Requests

If you never created a pull request before, welcome :tada: :smile: [Here is a great tutorial](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github) on how to send one :)

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

1. Search [GitHub](https://github.com/alexakasanjeev/react-native-boilerplate/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.

2. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

    ```bash
    # Clone your fork of the repo into the current directory
    git clone https://github.com/<your-username>/<repo-name>
    # Navigate to the newly cloned directory
    cd <repo-name>
    # Assign the original repo to a remote called "upstream"
    git remote add upstream https://github.com/alexakasanjeev/react-native-boilerplate.git
    ```

3. If you cloned a while ago, get the latest changes from upstream:

    ```bash
    git checkout master
    git pull upstream master
    ```

4. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix: follow [this](#branch-styleguide) naming convention for branch

    ```bash
    git checkout -b <topic-branch-name>
    ```

5. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).

6. Push your branch to GitHub:

    ```bash
    git push origin <topic-branch-name>
    ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) using your branch and fill the [required template](../.github/pull_request_template.md).

**IMPORTANT**: By submitting a patch, you agree to license your work under the same license as that used by the project.


## <a name="rules"></a> Styleguides

To ensure consistency throughout the source code, keep these rules in mind as you are working:

### <a name="branch-styleguide"></a> Git Branch Naming

If you are working on an enhancement(feature) issue, start you branch name like this `feature/short-descriptive-title`.

If you are working on a bug fix issue, start your branch name like this `hotfix/issue-title`

**Example**

Suppose you are working on *add to cart* feature, name your branch

```
feature/add-to-cart
```

Suppose you are working on issue *Navigation drawer render multiple times*, name your branch

```
hotfix/navigation-multiple-render
```

### <a name="commit"></a> Commit Message Convention

A commit message consists of a header, body and footer. The header has a type and subject:

```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>(optional)
```

**Example**

Suppose your commit adds a feature, which is listed under Github issue `#7`

```
feat: added add to cart functionality in ProductDetailPage

description: in ProductDetailPage, added a button, which on click add the product to the cart.

close #7
```

Commit messages can have the following types:

- `build:` Changes that affect the build system or external dependencies
- `chore:` Changes to readme, etc
- `ci:` Changes to our CI configuration files and scripts
- `docs:` Documentation only changes
- `feat:` A new feature
- `fix:` A bug fix
- `perf:` A code change that improves performance
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `test:` Adding missing tests or correcting existing tests

**Footer**: The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

### <a name="javascript-styleguide"></a> JavaScript Styleguide

All JavaScript must adhere to [Airbnb's JS Style Guide](https://github.com/airbnb/javascript) and [Airbnb's React Style Guide](https://github.com/airbnb/javascript/tree/master/react).

## <a name="community"></a> Community

If you have any questions or if you would like to get involved or just want say *Hi!*, you can check out:
 
 - Drop a mail on `sanjeevy133@protonmail.com`
