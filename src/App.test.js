/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

// Testler çalışmaya başlamadan önce gerçekleşmesini istediğimiz işlemleri beforeAll içine yazarız.
beforeAll(() => {
    // console.log('Before All');
});

// beforeEach'e verilen callback fonksiyonu ise her bir testten önce çalışır.
beforeEach(() => {
    render(<App />);
    // console.log('Before Each');
}); 

// Tüm testler çalıştıktan sonra çalışır
afterAll(() => {
    // console.log('After All');
});

// Her testtten sonra çalışır.
afterEach(() => {
    // console.log('After Each');
    cleanup(); // Her bir testten önce renderladığımız <App /> componentini işlem bitiminde DOM'dan kaldırmak için kullanılır. (NOT: Yeni güncelleme ile bunu afterEach'e yazmaya gerek kalmadı. İşlem otomatik yapılıyor.) 
});

test('DOM renders correctly', () => {
    const customDiv = document.createElement('div');
    customDiv.classList.add('custom');
    const { debug, container } = render(
        <App />, 
        {
            container: document.body.appendChild(customDiv)
        }
    );
    // screen.debug();
    // console.log(container.textContent); 

    expect(container).toHaveTextContent(/kushadige/i);
});

test('Header renders correctly', () => {
    // render(<App />);

    const headerEl = screen.getByText(/kushadige$/i);
    // expect(headerEl).not.toBeInTheDocument();
    expect(headerEl).toBeInTheDocument();
    expect(headerEl).toHaveTextContent(/kushadige$/i);
});

test('Disabled Button test', () => {
    // render(<App />);

    const disabledBtn = screen.getByRole('button', {
        name: 'disabled'
    });
    expect(disabledBtn).toBeInTheDocument();
    expect(disabledBtn).toHaveTextContent(/disabled/i);
    expect(disabledBtn).toBeDisabled();
});

test('Enabled Button test 1', () => {
    // render(<App />);

    const enabledBtn = screen.getByRole('button', {
        name: 'enabled'
    });
    expect(enabledBtn).toBeInTheDocument();
    expect(enabledBtn).toHaveTextContent(/enabled/i);
    expect(enabledBtn).not.toBeDisabled();
});
test('Enabled Button test', () => {
    // render(<App />);

    const enabledBtn = screen.getByTestId('enabled');
    expect(enabledBtn).toBeInTheDocument();
    expect(enabledBtn).toHaveTextContent(/enabled/i);
    expect(enabledBtn).not.toBeDisabled();
});

test('Green element renders correctly', () => {
    // render(<App />);

    const greenEl = screen.getByText(/green color/i);
    expect(greenEl).toBeInTheDocument(); 
    expect(greenEl).toHaveTextContent(/green color/i);
    expect(greenEl).toHaveClass('green');
});