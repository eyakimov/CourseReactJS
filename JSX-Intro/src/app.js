const rootHTMLElement = document.getElementById('root')

const rootReactElement = ReactDOM.createRoot(rootHTMLElement)

const headingReactElement = (
    <header>
        <h1>Hello JSX from Ract</h1>
        <h2>JSX is Awesome</h2>
        <p>lorem10</p>

    </header>
);

rootReactElement.render(headingReactElement)