import Card from './Card'
import ben10 from '../assets/ben10.png'
import picapau from '../assets/PicaPau_antigo.png'
import prohyas from '../assets/Prohyas.png'
import vambre from '../assets/Vambre.png'
import vegeta from '../assets/Vedita.png'
import caraquetentoufuraromadara from '../assets/CaraQueTentouFurarOMadara.png'

export default function Galeria () {

    return (
    <>
        <Card imagem={ben10}/>
        <Card imagem={picapau}/>
        <Card imagem={prohyas}/>
        <Card imagem={vambre}/>
        <Card imagem={vegeta}/>
        <Card imagem={caraquetentoufuraromadara}/>
    </>
    )
}