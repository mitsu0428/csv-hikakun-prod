import { useCSVDownloader } from "react-papaparse";

type CsvDownloadUseCaseInput = {
  filenameprefix: string;
  data: any;
};

type CsvDownloadUseCaseOutput = {
  csvFile: Blob;
};

const CsvDownloadUseCase = (
  input: CsvDownloadUseCaseInput
): CsvDownloadUseCaseOutput => {
  const { CSVDownloader } = useCSVDownloader();
  const filename = input.filenameprefix;

  const csvFile = CSVDownloader({
    data: input.data,
    filename,
    bom: true,
  });

  return { csvFile };
};

export default CsvDownloadUseCase;
