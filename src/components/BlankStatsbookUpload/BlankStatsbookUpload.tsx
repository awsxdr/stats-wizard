import { useCallback, useEffect, useState } from 'react';
import { Button, Card, Elevation, Icon, IconSize } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import { FileInfo, FileUpload } from '../FileUpload';
import styles from './BlankStatsbookUpload.module.scss';

interface IBlankStatsbookUploadProps {
    onContinue: () => void;
};

export const BlankStatsbookUpload = ({ onContinue }: IBlankStatsbookUploadProps) => {

    const [file, setFile] = useState<FileInfo | null>();

    useEffect(() => {
        const fileData = localStorage.getItem("blank_statsbook");
        const fileName = localStorage.getItem("statsbook_file_name");

        setFile(fileName && fileData ? new FileInfo(fileName, fileData) : null);
    }, [setFile]);

    const handleFileSelected = useCallback((file: FileInfo) => {
        localStorage.setItem("blank_statsbook", file.data || "");
        localStorage.setItem("statsbook_file_name", file.name);

        setFile(file);
    }, [setFile]);

    const handleRemoveFile = useCallback(() => {
        setFile(null);
    }, [setFile]);

    return (
        <Card elevation={Elevation.TWO}>
            <div className={styles.title}>
                <h3>Upload blank statsbook</h3>
                <Tooltip2 content={
                    <>
                        <p>Due to the way the WFTDA stats book is licensed, we cannot provide a copy of it.</p>
                        <p>Please download a copy from the WFTDA website and then upload it here.</p>
                        <p>If you have previously uploaded a copy on this device then you should only have to upload a new copy if there is a new version available.</p>
                    </>
                }>
                    <Icon icon="help" size={IconSize.STANDARD} />
                </Tooltip2>
            </div>
            <FileUpload fileName={file?.name} onFileSelected={handleFileSelected} onRemoveFile={handleRemoveFile} />
            <Button intent='primary' disabled={!file?.data} onClick={onContinue}>Continue</Button>
        </Card>
    );
}