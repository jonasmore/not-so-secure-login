# Secret Login Terminal

<img width="2208" alt="secret-login" src="https://github.com/user-attachments/assets/36a2e9cc-daea-4956-b836-dc6c5ae9851f" />

This project is a simple web-based terminal interface that simulates a secret login process. It includes HTML, CSS, and JavaScript files to create an interactive terminal experience.

## Project Structure

- **index.html**: The main HTML file that contains the structure of the web page.
- **scripts.js**: The JavaScript file that handles the terminal functionality.
- **styles.css**: The CSS file that styles the terminal and other elements on the page.

## Features

- Draggable terminal window
- Terminal input masking with asterisks
- Simulated login process
- Responsive design

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/jonasmore/not-so-secret-login.git
    ```

2. Navigate to the project directory:
    ```sh
    cd not-so-secret-login
    ```

3. Open [index.html](index.html) in your web browser to view the terminal interface.

## Edit
   Change URL in [scripts.js](scripts.js) - default "#"
 ```sh
 loginButton.addEventListener('click', () => {
        window.location.href = '#'
```
Change Password in [scripts.js](scripts.js) - default "root"
```sh
 if (inputText === 'root') {
                terminal.style.display = 'none';
            }
```


## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

© 2025 jonasmore

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
