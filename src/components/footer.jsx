import { FaInstagram } from "react-icons/fa6"

function Footer(){

    return(

        <>
            <footer>
                <div className="container">
                    <div className="texto-footer"><p id="texto1">Escritorio <br />Casa Nuvem N</p></div>

                    <div className="texto-footer">
                        <p id="texto2">Endereço do escritório:</p>
                        <p id="texto3">R. Escritor Rodrigo Melo Franco, 580</p>
                    </div>

                    <div className="texto-footer">
                        < FaInstagram className="icone-instagram" />
                        <a id="texto4" href="https://www.instagram.com/casanuvemn/" target="_blank" rel="noopener noreferrer">Instagram Casa Nuvem</a>
                    </div>

                    <div className="texto-footer">
                        <p id="texto5">Contatos</p>
                        <br />
                        <p id="texto6">(21) 99965-2985</p>
                        <p id="texto7">(21) 97229-9373</p>
                    </div>
                </div>{/*container*/}

                <br /><br /><br /><br /><br /><br />
                <div className="direitos-reservados">
                    <p>&copy; Todos os direitos reservados</p>
                </div>{/*direitos-reservados*/}
            </footer>
        </>

    )

}

export default Footer