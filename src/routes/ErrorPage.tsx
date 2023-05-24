import '../assets/errorPage.css'
import Container from '../components/Container'
import { Link } from 'react-router-dom';

type ErrorPageProps = {
    errorMessage: string
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }: ErrorPageProps) => {

    return (
        <Container>
            <h1>Erro</h1>
            <p>
                { errorMessage }
            </p>
            <Link to={'/'}>Voltar para a home</Link>
        </Container>
    );
}