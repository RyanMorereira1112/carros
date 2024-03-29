import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main>
      <section>
        <div>
          <img src={iconSedans} alt="Ícone dos carros sedan" />
          <h2>Sedans</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target="_blank " >Ver Mais</a>
        </div>

        <div>
          <img src={iconSuvs} alt="Ícone dos carros SUV" />
          <h2>SUVs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A8bcd6c70eb2a4017aac2e34222708902&tipoveiculo=carros&anunciante=Loja%7CConcession%C3%A1ria&carroceria=Utilit%C3%A1rio+esportivo&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwqpSwBhClARIsADlZ_TkyaGmrJlxLtKCqoJqBQ17Vj5ZtAST7SF9L4bgTbJe-9QFUijXAft0aAt6eEALw_wcB" target= "_blank ">Ver Mais </a>
        </div>

        <div>
          <img src={iconLuxury} alt="Ícone dos carros de luxo" target= "_blank" />
          <h2>Luxuosos</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target= "_blank">Ver Mais</a>
        </div>
      </section>
    </main>
  )
} 