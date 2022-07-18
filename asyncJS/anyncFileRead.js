export default (filepath) => {
    fs.readFile(
        filepath,
        'utf-8',
        (_error, data) => console.log(data)
    )
}