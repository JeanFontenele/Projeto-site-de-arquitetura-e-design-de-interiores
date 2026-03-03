import React, {useRef, useEffect, useState} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import secao2_2 from '../../assets/images/secao2_2.jpg'
import secao2_3 from '../../assets/images/secao2_3.jpg'
import secao2 from '../../assets/images/secao2.jpg'
import secao3 from '../../assets/images/secao3.jpg'
import secao3_2 from '../../assets/images/secao3_2.jpg'
import secao3_3 from '../../assets/images/secao3_3.jpg'

function Home(){
    //preciso pegar a informação da medida do topo da pagina até o elemento.
    const [clique, setClique] = useState(false);    
    const [valorMedida, setValorMedida] = useState(0);

    const secaoRef = useRef(null)

    useEffect(()=>{
       if(clique && secaoRef.current){
        const medida = secaoRef.current.offsetTop;
        setValorMedida(medida);
       } 
    },[clique])

    const maximaLargura = { maxWidth: '1450px' }
    const servicoTexto1 = { height: '150px' }
    const servicoTexto2 = { height: '252px' }

    return(
        <>
            < Header onClickMenu={()=>setClique(true)} />

            <section className='secao-sobreNos' ref={secaoRef}>
                <div className='container'>
                    
                    <h2 id='sobre-nos'>Sobre nós</h2>
                    <h2 id='sobre-nos-texto'>O Escritório Casa Nuvem N <br/>Pequenas Reformas <br/>Pintura de ambientes <br/>Desing de interiores <br/>Arquiterura <br/>Consultoria de Projetos <br/>Cursos de decoração e muito mais…</h2>
                </div>{/* container */}
            </section>{/* secao-sobreNos */}

            <section className='anuncios-ativos'>
                <div style={maximaLargura} className='container'>
                    <h2 id='titulo-anuncios'>Nossos anúncios ativos</h2>
                    <div className='anuncios-grid'>
                        <div className='anuncios-wrappe'>
                            <div className='anuncios-img'><img src={secao2_2}/></div>
                            <div className='anuncios-texto'>
                                <h2>Onde estamos?! Ilha Pura | Barra da Tijuca</h2>
                                <h3>Ajudamos você; Reformas e consultoria de Interiores e Projetos</h3>
                            </div>{/* anuncios-texto */}
                        </div>{/* anuncios-wrappe */}

                        <div className='anuncios-wrappe'>
                            <div className='anuncios-img'><img src={secao2_3}/></div>
                            <div className='anuncios-texto'>
                                <h2>O maior parque planejado residencial na Barra da Tijuca</h2>
                                <h3>Viva de forma planejada, do seu jeito, o seu sonho pode ser realizado</h3>
                            </div>{/* anuncios-texto */}
                        </div>{/* anuncios-wrappe */}

                        <div className='anuncios-wrappe'>
                            <div className='anuncios-img'><img src={secao2}/></div>
                            <div className='anuncios-texto'>
                                <h2>Tenha a sua casa dos Sonhos</h2>
                                <h3>A um click de distância…podemos ajudar</h3>
                            </div>{/* anuncios-texto */}
                        </div>{/* anuncios-wrappe */}
                    </div>{/* anuncios-grid */}
                </div>{/* container */}
            </section>{/* anuncios-ativos */}

            <section className='nossos-servicos'>
                <div className='container'>
                    <h2>Nossos Serviços</h2>
                    <div className='servicos-grid'>
                        <div className='servico-item'>
                            <img src={secao3} alt="Serviço 1" />
                            <div style={servicoTexto1} className='servico-texto'>
                                <h3>01 <br/>Pintura</h3>
                                <p>Quer dar uma reformada? Temos especialista em pintura</p>
                            </div>
                        </div>{/* servico-item */}

                        <div className='servico-item'>
                            <img src={secao3_2} alt="Serviço 2" />
                            <div style={servicoTexto2} className='servico-texto'>
                                <h3>02 <br/>Esta de mudança? Decoramos a casa nova com você</h3>
                                <p style={{marginTop:'20px'}}>Está de mudança ou pensando em redecorar? Redecoramos pra você e temos cursos rápidos pra te ajudar</p>
                            </div>
                        </div>{/* servico-item */}

                        <div className='servico-item'>
                            <img src={secao3_3} alt="Serviço 3" />
                            <div style={{height:'200px'}} className='servico-texto'>
                                <h3>03 <br/>Projetos | Desenho tecnico</h3>
                                <p style={{marginTop:'25px'}}>Desenho Técnico & Projetos? Temos Arquitetos e Design de interiores</p>
                            </div>
                        </div>{/* servico-item */}
                    </div>{/* servicos-grid */}
                </div>{/* container */}
            </section>{/* nossos-servicos */}

            <section className='intencao-casa-nuvem'>
                <div className='layer'></div>
                <h2>A intenção do casa nuvem escritório, é para todos aqueles que buscam descomplicar decorar casas transitórias ou fazer ou trazer um sonho a realidade uma coisa que de repente está nas nuvens e é possível trazer pra realidade.</h2>
            </section>{/* intencao-casa-nuvem */}

            < Footer />
        </>
    )

}

export default Home