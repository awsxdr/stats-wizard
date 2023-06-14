import { Button, FileInput, Spinner } from '@blueprintjs/core';
import { useCallback, useState } from 'react';

interface IFileUploadProps {
    onFileSelected?: (file: FileInfo) => void,
    onRemoveFile?: () => void,
    fileName?: string;
}

export class FileInfo {
    name: string;
    data?: string;

    constructor(name: string, data?: string) {
        this.name = name;
        this.data = data;
    }
}

export const FileUpload = ({ fileName, onFileSelected, onRemoveFile }: IFileUploadProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        
        if(!file) {
            return;
        }

        setIsLoading(true);

        const reader = new FileReader();
        reader.onload = () => {
            if(onFileSelected) {
                onFileSelected(new FileInfo(file.name, reader.result?.toString()));
            }
            setIsLoading(false);
        };
        reader.readAsDataURL(file);
    }, [setIsLoading]);

    const handleDelete = () => {
        onRemoveFile && onRemoveFile();
    };

    return (
        <>
            <FileInput fill onInputChange={handleInputChange} disabled={isLoading} />
            { isLoading && <Spinner /> }
            { fileName && !isLoading && (<h4>{fileName} <Button icon='trash' minimal onClick={handleDelete} /></h4>) }
        </>
    );
}