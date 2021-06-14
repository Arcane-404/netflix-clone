# Temp Features

```js
{isMobile && ((menu)
	? <NavBar.Menu onClick={ handleToggle } />
	: <NavBar.Close onClick={ handleToggle } />
)}
/* ↑ */
<NavBar.Logo page={ 'browse' } src={ logo.img } alt={ logo.alt } to="/browse" />
```

```js
{!isMobile && (
	<NavBar.FilterBox>
		/* ↓ */
		{isTabletSm && !isDesktop && (
			<NavBar.Text primary>Browse</NavBar.Text>
		)}
		{isDesktop && (
			<>
				<NavBar.Text className={ 'active' }>Home</NavBar.Text>
				{/* <NavBar.Text>TV Shows</NavBar.Text> */}
				{/* <NavBar.Text>Movies</NavBar.Text> */}
			</>
		)}
		/* ↑ */
	</NavBar.FilterBox>
)}
```


