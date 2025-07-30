export default function FixacaoCores () {

    function handleColor () {
        const cores = ['#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999', '#AAAAAA', '#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE', '#FFFFFF'];
        const randomColor = cores[Math.floor(Math.random() * cores.length)];
        document.body.style.backgroundColor = randomColor;
    }

    return (
        <input type="text" name="" id="" onChange={handleColor}/>
    )
}