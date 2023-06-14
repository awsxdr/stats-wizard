import { BlankStatsbookUpload, Navigation } from "../../components";
import { useNavigate } from 'react-router-dom';

export const FromBlankPage = () => {

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/stats')
    };

    return (
        <>
            <Navigation />
            <BlankStatsbookUpload onContinue={handleContinue} />
        </>
    );
}