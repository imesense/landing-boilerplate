import React, { Component } from "react";
import Upload from 'rc-upload';
import styles from './FileUpload.module.scss';
import { RcFile } from "rc-upload/lib/interface";

interface FileUploadProps {
  onChange?: (file: File, error?: boolean) => void;
}

interface FileUploadState {
  empty: boolean;
  fileName?: string;
  fileSize?: number;
  error?: boolean;
}

export class FileUpload extends Component<FileUploadProps, FileUploadState> {
  private setFile = (file: RcFile): boolean => {
    const fileSize = Math.max(Math.round(file.size / 1000000), 1);
    const error = fileSize > 20;

    this.setState({
      empty: false,
      fileName: file.name,
      fileSize,
      error,
    });

    this.props.onChange(file, error);

    return true;
  };

  private reset = (e: React.MouseEvent) => {
    e.stopPropagation();

    this.setState({
      empty: true,
      fileName: undefined,
      fileSize: undefined,
      error: false,
    });

    this.props.onChange(null, false);
  };

  private emptyTmpl = <>Прикрепить файл (&lt;20 Мб)</>;

  constructor(props: {}) {
    super(props);
    this.state = { empty: true };
  }

  render(): JSX.Element {
    const { empty, fileName, fileSize, error } = this.state;
    return (
      <Upload 
        type="drag" 
        className={`${styles.root} ${error ? styles.root_error : ''}`.trim()} 
        beforeUpload={this.setFile}
      >
        {
          empty 
            ? this.emptyTmpl 
            : error ? <>Превышен максимальный размер</> : <>{fileName} (~{fileSize} Мб)</>}

        {empty ? null : <span className={styles.clear} onClick={this.reset}></span>}
      </Upload>
    );
  }
}