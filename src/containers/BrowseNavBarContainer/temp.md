# Temp Features

```js
{isMobile && ((menu)
	? <NavBar.Menu onClick={ handleToggle } />
	: <NavBar.Close onClick={ handleToggle } />
)}
/* ↑ */
<NavBar.Logo page={ 'browse' } src={ logo.img } alt={ logo.alt } to="/browse" />
```
