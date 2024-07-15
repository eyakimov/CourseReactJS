const rootHTMLElement = document.getElementById('root')
console.dir(rootHTMLElement)

const rootReactElement = ReactDOM.createRoot(rootHTMLElement)

const headingReactElement = React.createElement('h1', null, 'Hello JSX from Ract')
console.log(headingReactElement)

rootReactElement.render(headingReactElement)