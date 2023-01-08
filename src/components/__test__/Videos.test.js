import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Videos from '../Videos/index';

test('Videos component renders correctly', () => {
    const { container } = render(<Videos />);

    expect(container).toBeInTheDocument();
});

test('Videos runs correctly on empty state', () => {
    const tree = renderer.create(<Videos />).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Videos runs correctly with 1 item', () => {
    const tree = renderer.create(<Videos videos={["Udemy"]} />).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Videos runs correctly with multiple item', () => {
    const tree = renderer.create(<Videos videos={["Udemy", "Youtube", "Vimeo", "Tutorial"]} />).toJSON();

    expect(tree).toMatchSnapshot(); 
});