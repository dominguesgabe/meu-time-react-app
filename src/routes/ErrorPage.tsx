import '../assets/errorPage.css'
import Container from '../components/Container'

export default function ErrorPage() {

    return (
        <Container>
            <h1>Erro</h1>
            <p>
                Essa página não existe!
            </p>
            <a href={'/'}>Voltar para a home</a>
        </Container>
    );
}