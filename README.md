## Real State Crypto Currency

This mobile app allows users to view the current price of various cryptocurrencies in USD. Users can easily filter and search for specific cryptocurrencies and view detailed information about each one.

## Table of Contents

Installation

- [Installation](#installation)

Execution

- [Execution](#execution)

Storybook

- [Storybook](#storybook)

Tests

- [Tests](#tests)

Technologies Used

- [Technologies Used](#technologies-used)

Project Structure

- [Project Structure](#project-structure)

## Installation

Before getting started, make sure you have [Volta](https://volta.sh/) installed on your system to manage the recommended Node.js version for the project.

1. Clone the repository

```bash

git clone https://github.com/stevenclar/RealStateCryptoCurrency.git

```

2. Navigate to the project directory and run the following command to install the dependencies:

```bash

npm  install

```

3. Install the pods for iOS:

```bash

cd  ios && pod  install && cd  ..

```

## Execution

To run the application on an emulator or device, make sure you have set up the development environment for React Native.

1. Run the following command to start the application:

```bash

npx  react-native  run-android  # For Android

or

npx  react-native  run-ios  # For iOS

```

## Storybook

The project includes a Storybook library for visualizing and testing components in isolation.

1. Run the following command to start the Storybook:

```bash

npm  run  storybook

```

Once started, you can access the Storybook in your browser at `http://localhost:6006`.

## Tests

The project includes unit tests using Jest and @testing-library/react-native.

1. Run the following command to execute the tests:

```bash

npm  run  test

```

## Technologies Used

- [React Native](https://reactnative.dev/)

- [Redux Toolkit](https://redux-toolkit.js.org/)

- [@React Navigation](https://reactnavigation.org/)

- [React Native Paper](https://callstack.github.io/react-native-paper/)

- [React Native SVG Charts](https://github.com/JesperLekland/react-native-svg-charts)

## Project Structure

The project is organized using Atomic Design principles. Components are separated into atoms, molecules, organisms, and screens for better reusability and maintenance.

```

src/

|-- assets/

|-- components/

| |-- atoms/

| |-- molecules/

| |-- organisms/

| |-- screens/

|-- container/

|-- interfaces/

|-- screen/

|-- navigation/

|-- services/

|-- store/

|-- theme/

|-- utils/

```
