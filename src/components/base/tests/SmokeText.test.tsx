import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import* as React from 'react'
import SmokeText from '../SmokeText';

describe('SmokeText test component', () => {
    it('should render correctly', () => {
        const rendered = render(<SmokeText>Москва</SmokeText>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
    it('should not contain smokeText in WhiteDom', () => {
        const { container } = render(<SmokeText>Москва</SmokeText>);

        expect(container).not.toHaveTextContent(/м.*о.*с.*к.*в.*а/i);
    });
    it('should contain smokeText in ShadowDom', () => {
        const { container } = render(<SmokeText>Москва</SmokeText>);
        const span = container.querySelector('span');

        expect(span.shadowRoot).toHaveTextContent(/м.*о.*с.*к.*в.*а/i);
    });
});