const work = () => {
    fetch('http://localhosr:1337/articles')
    .then(res => res.json())
    .then(data => console.log(data))
}

work();