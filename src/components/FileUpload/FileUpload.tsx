import { FileInput, Spinner } from '@blueprintjs/core';
import { useCallback, useState } from 'react';

export const FileUpload = () => {

    const [fileName, setFileName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        
        if(!file) {
            return;
        }

        setIsLoading(true);

        const reader = new FileReader();
        reader.onload = () => {
            localStorage["blank_statsbook"] = reader.result;
            setIsLoading(false);
        };
        reader.readAsDataURL(file);

        setFileName(e.target.files && e.target.files[0].name || "")
    }, [setFileName, setIsLoading]);

    return (
        <>
        
            <FileInput fill onInputChange={handleInputChange} disabled={isLoading} />
            {
                isLoading
                ? (<Spinner />)
                : (<h4>{fileName}</h4>)
            }
            
        </>
    );
}