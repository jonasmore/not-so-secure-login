/*
MIT License

© 2025 Jonas Mohr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

document.addEventListener('DOMContentLoaded', (event) => {
    const terminal = document.querySelector('.terminal');
    const header = document.querySelector('.terminal-header');
    const terminalContent = document.getElementById('terminal-content');
    const terminalInput = document.getElementById('terminal-input');
    const buttons = document.querySelectorAll('.buttons span');
    const loginButton = document.querySelector('.login-button');

    let isDragging = false;
    let offsetX, offsetY;
    let inputBuffer = '';

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - terminal.offsetLeft;
        offsetY = e.clientY - terminal.offsetTop;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            terminal.style.left = `${e.clientX - offsetX}px`;
            terminal.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        header.style.cursor = 'grab';
    });

    buttons.forEach(button => {
        button.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });

        button.addEventListener('click', () => {
            terminal.style.display = 'none';
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target !== loginButton && terminal.style.display === 'none') {
            terminal.style.display = 'block';
        }
    });

    terminalInput.addEventListener('input', (e) => {
        const value = e.target.value;
        const lastChar = value[value.length - 1];
        if (lastChar !== '*') {
            inputBuffer += lastChar;
            terminalInput.value = '*'.repeat(value.length);
        }
    });

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            terminalContent.innerHTML += `<p>root$ &#8764; ${'*'.repeat(inputBuffer.length)}</p>`;
            const inputText = inputBuffer;
            inputBuffer = '';
            terminalInput.value = '';
            terminalContent.scrollTop = terminalContent.scrollHeight;

            if (inputText === 'root') {
                terminal.style.display = 'none';
            }
        }
    });

    loginButton.addEventListener('click', () => {
        window.location.href = '#'
});
});
