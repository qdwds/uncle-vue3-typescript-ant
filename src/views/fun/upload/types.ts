
export interface OFile {
    file?: Blob | null | File,
}

export interface OUploadFile extends OFile {
    file1?: Blob | null | File,
    file2?: Blob | null | File,
}