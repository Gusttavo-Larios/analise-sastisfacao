import ExcelJS from "exceljs";
import path from "path";

import { OutuptResultado } from "../types/output-resultado.type";

export class GeneratePlanilhaResultadoService {
  async generate(input: OutuptResultado[]) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Resultados");

    worksheet.columns = [
      { header: "Questão", key: "questao", width: 15 },
      { header: "Tangibilidade", key: "tangibilidade", width: 20 },
      { header: "Confiabilidade", key: "confiabilidade", width: 20 },
      { header: "Responsividade", key: "responsividade", width: 20 },
      { header: "Garantia", key: "garantia", width: 20 },
      { header: "Empatia", key: "empatia", width: 20 },
    ];

    worksheet.addRow([
      "Total",
      input[0].total,
      input[1].total,
      input[2].total,
      input[3].total,
      input[4].total,
    ]);

    const resultadosDir = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "public",
      "resultados"
    );
    const fileName = `resultado-analise-satisfacao-${Date.now()}.xlsx`;
    const filePath = path.join(resultadosDir, fileName);

    await workbook.xlsx.writeFile(filePath);

    return {
      filePath,
      fileName,
    };
  }
}
