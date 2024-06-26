import iconSuvs from "../assets/icon-suvs.svg"

export default function Suvs() {
    return (
        <section className="bg-green p-12">
          <img src={iconSuvs} alt="Ícone dos carros SUV" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A8bcd6c70eb2a4017aac2e34222708902&tipoveiculo=carros&anunciante=Loja%7CConcession%C3%A1ria&carroceria=Utilit%C3%A1rio+esportivo&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwqpSwBhClARIsADlZ_TkyaGmrJlxLtKCqoJqBQ17Vj5ZtAST7SF9L4bgTbJe-9QFUijXAft0aAt6eEALw_wcB" target= "_blank ">Ver Mais </a>
        </section>
    )
}